const fs = require("fs");
const path = require("path");

const storePath = path.join(__dirname, "..", "data", "blog.json");
const store = JSON.parse(fs.readFileSync(storePath, "utf8"));

function decode(s = "") {
  return s
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&rsquo;/g, "'")
    .replace(/&lsquo;/g, "'")
    .replace(/&rdquo;/g, '"')
    .replace(/&ldquo;/g, '"')
    .replace(/&eacute;/g, "é")
    .replace(/&Eacute;/g, "É")
    .replace(/&agrave;/g, "à")
    .replace(/&acirc;/g, "â")
    .replace(/&ecirc;/g, "ê")
    .replace(/&icirc;/g, "î")
    .replace(/&ocirc;/g, "ô")
    .replace(/&ucirc;/g, "û")
    .replace(/&ccedil;/g, "ç")
    .replace(/&egrave;/g, "è")
    .replace(/&ugrave;/g, "ù")
    .replace(/&#?[a-z0-9]+;/gi, " ")
    .replace(/[\u2018\u2019\u02BC]/g, "'");
}

function toPublicUrl(diskPath) {
  const norm = diskPath.replace(/\\/g, "/");
  if (norm.includes("storage/app/public/")) {
    return "/storage/" + norm.split("storage/app/public/")[1];
  }
  if (norm.startsWith("public/")) {
    return "/" + norm.slice("public/".length);
  }
  return "/" + norm;
}

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, e.name);
    if (e.isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

const IMAGE_EXT = /\.(png|jpe?g|webp|gif|svg)$/i;
const diskFiles = walk("storage/app/public")
  .concat(walk("public/img"))
  .filter((f) => IMAGE_EXT.test(f) && !f.toLowerCase().includes("gitignore"));
const byName = new Map(
  diskFiles.map((f) => [path.basename(f).toLowerCase(), f])
);

function fuzzyFind(filename) {
  const base = path.basename(filename).toLowerCase();
  if (!IMAGE_EXT.test(base)) return null;
  if (byName.has(base)) return byName.get(base);
  const stem = base.replace(/\.[^.]+$/, "");
  // Only accept suffix matches for truncated hashed filenames (min 16 chars)
  if (stem.length >= 16) {
    for (const [name, full] of byName) {
      const other = name.replace(/\.[^.]+$/, "");
      if (other.length >= 16 && (other.endsWith(stem) || stem.endsWith(other))) {
        return full;
      }
    }
  }
  return null;
}

function coverForPost(postId) {
  const post = store.posts.find((p) => p.id === postId);
  if (!post?.image) return "/img/ad.webp";
  if (post.image.startsWith("/")) return post.image;
  return `/storage/${post.image.replace(/^\//, "")}`;
}

function pickByAlt(altRaw, postId) {
  const alt = decode(altRaw).toLowerCase();

  if (!alt.trim()) return null;

  if (alt.includes("logo via") || alt === "via communication, agence web à québec") {
    return "/img/Logo.webp";
  }
  if (alt.includes("icône réflexion") || alt.includes("icone reflexion")) {
    return "/img/blog-icons/idea.svg";
  }
  if (alt.includes("recherches sur internet")) {
    return "/img/blog-icons/search.svg";
  }
  if (alt.includes("réseaux sociaux sur mobile") || alt.includes("reseaux sociaux sur mobile")) {
    return "/img/blog-icons/social-mobile.svg";
  }

  // People / event photos before generic service keyword matches
  if (
    alt.includes("françois") ||
    alt.includes("francois") ||
    alt.includes("dennis yu") ||
    alt.includes("conférencier") ||
    alt.includes("conferencier") ||
    alt.includes("chroniqueur") ||
    alt.includes("émission") ||
    alt.includes("emission") ||
    alt.includes("interview") ||
    alt.includes("rencontre") ||
    (alt.includes("homme devant") && (alt.includes("téléphone") || alt.includes("telephone")))
  ) {
    return coverForPost(postId);
  }

  if (
    alt.includes("affiche") ||
    alt.includes("poster") ||
    (alt.includes("awsummit") && !alt.includes("francois") && !alt.includes("françois"))
  ) {
    return "/storage/uploads/41923sTAV5heMMwFx6NypLMQU7rtr8FCJ3HHXSeR.jpg";
  }

  if (alt.includes("conception de site") || alt.includes("website design")) {
    return "/img/website-creation.webp";
  }
  if (
    alt.includes("service de seo") ||
    alt.includes("référencement") ||
    alt.includes("referencement") ||
    alt.includes("natural referencing") ||
    /(^|[^a-z])seo([^a-z]|$)/i.test(alt)
  ) {
    return "/img/seo.webp";
  }
  if (
    alt.includes("service de sem") ||
    alt.includes("search engine marketing") ||
    alt.includes("publicité en ligne") ||
    alt.includes("publicite en ligne") ||
    /(^|[^a-z])sem([^a-z]|$)/i.test(alt)
  ) {
    return "/img/sem.webp";
  }
  if (
    alt.includes("emoji like") ||
    alt.includes("téléphone intelligent") ||
    alt.includes("telephone intelligent") ||
    alt.includes("social media management") ||
    alt.includes("gestion des réseaux") ||
    alt.includes("gestion des reseaux")
  ) {
    return "/img/facebook-phone.webp";
  }
  if (
    alt.includes("rédige") ||
    alt.includes("redige") ||
    alt.includes("clavier") ||
    alt.includes("writing on") ||
    alt.includes("person writing")
  ) {
    return "/img/medias.webp";
  }
  if (alt.includes("post-its") || alt.includes("post its")) {
    return "/img/strategy.webp";
  }
  if (
    alt.includes("application d'actualités") ||
    alt.includes("application d'actualites") ||
    alt.includes("curation")
  ) {
    return "/img/phone-icons.webp";
  }

  if (alt.includes("via communication")) {
    return "/img/why-us.webp";
  }

  return null;
}

// Filename/context fallbacks for images without useful alt
const FILE_FALLBACKS = {
  "rZMZBa3yfFqAoNu1OwENhmvHSqyDrZ4EYH5vrRqe.png": "/img/blog-icons/blvd.svg",
  // affiliate tip icons (post 19)
  "hll49eFenXw4j1FmsFMnXC27lJQQjF9VR31A6sfW.png": "/img/blog-icons/idea.svg",
  "6DcYqHdXpG9oCd8OZQhj09u0aKNd5AqSdFVYbelZ.png": "/img/blog-icons/content.svg",
  "Wlg292QaBFy8GSB86iW6EcqWYPZwr7kUs6bRnkj7.png": "/img/blog-icons/target.svg",
  // travel tip icons (post 14)
  "W7VJnd0eTIoVcCk4m0CKGHsp410VF4JnSX7fhpjP.png": "/img/blog-icons/travel.svg",
  "EDRWOg9wA4SyWvKFVmWyMydBKsd5AeyHxlEyIrQk.png": "/img/blog-icons/check.svg",
  "vGiRkhIwdXfJSNivYhhG1WvfrnEOBYNh9B2p3Yh8.png": "/img/blog-icons/target.svg",
  "GnDwbtgwnjEaspSllnG2jfGsUp4vJmtknlNpC6q2.png": "/img/blog-icons/users.svg",
  "cyc5hdE0bM6qpW01ohvZYqkoJMYiJkSiWSBvods2.png": "/img/blog-icons/search.svg",
  "e0zpWNVIQiN9kCJ0IJbqcMrknPsEgfI8Skvv6pgI.png": "/img/blog-icons/computer.svg",
  "GxCIM9661O41TSweXfNQRFkI8mH9Whr87HBN1Uou.png": "/img/blog-icons/idea.svg",
  // SEO tip icons (post 13)
  "Oo3DP3ypBJatiyfYPCyBp0DhmMHAUWS7Zl3cyhvq.png": "/img/blog-icons/seo.svg",
  "iAtCLbE111YajbNpfV2tx2F6aiVhXMtXRZiTUoPa.png": "/img/blog-icons/users.svg",
  "5d5zvJh0SqOyMP56VeaQAbYbYSrGh2297CLjOs68.png": "/img/blog-icons/idea.svg",
  "am16s8bLPvjJ9k1wKHN0AwnewUZwSceRKkEiptYI.png": "/img/blog-icons/computer.svg",
  "LE0PB0tTw6VtvzfZLmS1M981mpAcy0PF5TAEfdpD.png": "/img/blog-icons/check.svg",
  "tCjk6s8X03J7ASmWWnAuLcLe51MsOeCTuLIiTLoj.webp": "/img/phone-icons.webp",
  "wyV6O8QWF22KZkbuvtlAWso1okcjnzdyrHZzqGjc.webp":
    "/storage/uploads/41923sTAV5heMMwFx6NypLMQU7rtr8FCJ3HHXSeR.jpg",
  "uT87lq5PQYJLiV35yTTKeSdWHKmUQRjBQe7ROxs3.webp":
    "/storage/uploads/41923sTAV5heMMwFx6NypLMQU7rtr8FCJ3HHXSeR.jpg",
};

function resolveReplacement(src, alt, postId) {
  // broken absolute-ish admin path
  if (src.includes("laravel.devvia.ca/storage/uploads/")) {
    const file = src.split("/").pop();
    const hit = fuzzyFind(file);
    if (hit) return toPublicUrl(hit);
  }

  const file = src.split("/").pop();
  const fuzzy = fuzzyFind(file);
  if (fuzzy) return toPublicUrl(fuzzy);

  if (FILE_FALLBACKS[file]) return FILE_FALLBACKS[file];

  const byAlt = pickByAlt(alt, postId);
  if (byAlt) return byAlt;

  // last resort: article cover for webp/jpg photos, icon for png
  if (/\.(webp|jpe?g)$/i.test(file)) return coverForPost(postId);
  if (/\.png$/i.test(file)) return "/img/blog-icons/idea.svg";

  return null;
}

const map = new Map(); // oldSrc -> newSrc
let replacedTags = 0;

for (const post of store.posts) {
  for (const loc of ["fr", "en"]) {
    if (!post.content?.[loc]) continue;
    let html = post.content[loc];
    html = html.replace(/<img\b[^>]*>/gi, (tag) => {
      const src = (tag.match(/src="([^"]+)"/i) || [])[1];
      if (!src) return tag;
      // already local working paths under /img keep
      if (src.startsWith("/img/")) return tag;

      // check existence
      const rel = src.replace(/^\//, "").replace(/^storage\//, "");
      const exists =
        fs.existsSync(path.join("public", src.replace(/^\//, ""))) ||
        fs.existsSync(path.join("storage", "app", "public", rel)) ||
        fs.existsSync(path.join("public", "storage", rel));
      if (exists) return tag;

      const alt = (tag.match(/alt="([^"]*)"/i) || [])[1] || "";
      const next = resolveReplacement(src, alt, post.id);
      if (!next || next === src) return tag;

      map.set(src, next);
      replacedTags += 1;
      return tag.replace(src, next);
    });
    post.content[loc] = html;
  }
}

fs.writeFileSync(storePath, JSON.stringify(store, null, 2), "utf8");

console.log(`Replaced ${replacedTags} <img> tags`);
console.log(`Unique mappings: ${map.size}`);
for (const [from, to] of map) {
  console.log(`  ${from.split("/").slice(-1)[0]} -> ${to}`);
}
