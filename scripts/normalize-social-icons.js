const fs = require("fs");
const path = require("path");

const file = path.join(__dirname, "..", "data", "blog.json");
const store = JSON.parse(fs.readFileSync(file, "utf8"));

const ICON_STYLE =
  'display:block;margin-left:auto;margin-right:auto;width:72px;height:72px;object-fit:contain;border-radius:14px;';
const VIA_STYLE =
  'display:block;margin-left:auto;margin-right:auto;width:72px;height:72px;object-fit:contain;border-radius:14px;background-color:#0C2249;padding:10px;box-sizing:border-box;';

function normalizeImgTag(tag) {
  const src = (tag.match(/src="([^"]+)"/i) || [])[1] || "";
  const isSocial =
    src.includes("/img/social/") ||
    src.includes("/img/Logo.webp") ||
    src.includes("/img/Logo-dark.webp") ||
    /Logo VIA/i.test(tag) ||
    /alt="Logo (Facebook|Instagram|YouTube|LinkedIn)"/i.test(tag);

  if (!isSocial) return tag;

  const alt = (tag.match(/alt="([^"]*)"/i) || [])[1] || "";
  const isVia =
    src.includes("/img/Logo") || /Logo VIA/i.test(alt) || /via communication/i.test(alt);

  // Prefer square dark VIA mark
  const nextSrc = isVia ? "/img/Logo.webp" : src;
  const style = isVia ? VIA_STYLE : ICON_STYLE;

  return `<img style="${style}" src="${nextSrc}" alt="${alt}" width="72" height="72" />`;
}

let count = 0;
for (const post of store.posts) {
  for (const loc of ["fr", "en"]) {
    if (!post.content?.[loc]) continue;
    const before = post.content[loc];
    const after = before.replace(/<img\b[^>]*>/gi, (tag) => {
      const next = normalizeImgTag(tag);
      if (next !== tag) count += 1;
      return next;
    });
    post.content[loc] = after;
  }
}

fs.writeFileSync(file, JSON.stringify(store, null, 2), "utf8");
console.log(`Normalized ${count} end-of-article icon images`);
