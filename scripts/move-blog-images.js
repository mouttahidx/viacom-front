const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const DEST = path.join(ROOT, "public", "uploads", "blog");
const STORE_FILE = path.join(ROOT, "data", "blog.json");

const SEARCH_ROOTS = [
  path.join(ROOT, "storage", "app", "public"),
  path.join(ROOT, "public", "storage"),
];

fs.mkdirSync(DEST, { recursive: true });

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (/\.(png|jpe?g|webp|gif|svg)$/i.test(entry.name)) out.push(full);
  }
  return out;
}

const diskFiles = SEARCH_ROOTS.flatMap((r) => walk(r));
const byName = new Map();
for (const full of diskFiles) {
  byName.set(path.basename(full).toLowerCase(), full);
}

function resolveSource(ref) {
  if (!ref) return null;
  // absolute web path
  if (ref.startsWith("/storage/")) {
    const rel = ref.replace(/^\/storage\//, "");
    const candidates = [
      path.join(ROOT, "storage", "app", "public", rel),
      path.join(ROOT, "public", "storage", rel),
    ];
    for (const c of candidates) if (fs.existsSync(c)) return c;
    return byName.get(path.basename(rel).toLowerCase()) || null;
  }
  // cover-style relative: posts/xxx or xxx
  const rel = ref.replace(/^\//, "");
  const candidates = [
    path.join(ROOT, "storage", "app", "public", rel),
    path.join(ROOT, "storage", "app", "public", "posts", path.basename(rel)),
    path.join(ROOT, "public", "storage", rel),
  ];
  for (const c of candidates) if (fs.existsSync(c)) return c;
  return byName.get(path.basename(rel).toLowerCase()) || null;
}

function copyToUploads(srcPath) {
  const name = path.basename(srcPath);
  const dest = path.join(DEST, name);
  if (!fs.existsSync(dest)) {
    fs.copyFileSync(srcPath, dest);
  }
  return `/uploads/blog/${name}`;
}

const store = JSON.parse(fs.readFileSync(STORE_FILE, "utf8"));
const map = new Map(); // old web path or cover path -> new /uploads/blog/...
let copied = 0;
let updated = 0;

function migrateRef(ref) {
  if (!ref) return ref;
  if (ref.startsWith("/uploads/blog/")) return ref;
  if (ref.startsWith("/img/")) return ref; // keep site assets
  if (map.has(ref)) return map.get(ref);

  const src = resolveSource(ref);
  if (!src) {
    console.warn("MISSING", ref);
    return ref;
  }
  const next = copyToUploads(src);
  if (!map.has(ref)) {
    map.set(ref, next);
    // also map basename variants
    map.set(path.basename(ref), next);
    map.set(`posts/${path.basename(ref)}`, next);
    map.set(`/storage/${path.basename(ref)}`, next);
    map.set(`/storage/posts/${path.basename(ref)}`, next);
    copied += 1;
  }
  return next;
}

// covers
for (const post of store.posts) {
  const before = post.image;
  const after = migrateRef(before);
  if (after !== before) {
    post.image = after;
    updated += 1;
  }
}

// content
for (const post of store.posts) {
  for (const loc of ["fr", "en"]) {
    if (!post.content?.[loc]) continue;
    post.content[loc] = post.content[loc].replace(
      /src="([^"]+)"/gi,
      (full, src) => {
        if (src.startsWith("/img/")) return full;
        if (!src.includes("storage") && !src.match(/\.(png|jpe?g|webp|gif)$/i)) {
          return full;
        }
        // only migrate storage paths (and accidental relative storage files)
        if (
          src.startsWith("/storage/") ||
          src.startsWith("storage/") ||
          src.startsWith("posts/")
        ) {
          const next = migrateRef(src.startsWith("/") ? src : `/${src}`);
          if (next !== src) {
            updated += 1;
            return `src="${next}"`;
          }
        }
        return full;
      }
    );
  }
}

fs.writeFileSync(STORE_FILE, JSON.stringify(store, null, 2), "utf8");
console.log(`Copied/ensured files in public/uploads/blog: ${copied}`);
console.log(`Updated references: ${updated}`);
console.log(`Files now in uploads/blog: ${fs.readdirSync(DEST).length}`);
