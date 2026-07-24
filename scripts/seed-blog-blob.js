/**
 * Upload local data/blog.json into Vercel Blob.
 *
 * Usage:
 *   set BLOB_READ_WRITE_TOKEN=vercel_blob_rw_...
 *   npm run blog:seed-blob
 *
 * Or pass the token:
 *   BLOB_READ_WRITE_TOKEN=... npm run blog:seed-blob
 */
const fs = require("fs");
const path = require("path");
const { put } = require("@vercel/blob");

const ROOT = path.join(__dirname, "..");
const DATA_FILE = path.join(ROOT, "data", "blog.json");
const BLOB_PATHNAME = "blog/data.json";

async function main() {
  const token = process.env.BLOB_READ_WRITE_TOKEN?.trim();
  if (!token || token.includes("...")) {
    console.error(
      "Set a real BLOB_READ_WRITE_TOKEN (Vercel → Storage → Blob → token)."
    );
    process.exit(1);
  }

  if (!fs.existsSync(DATA_FILE)) {
    console.error(`Missing ${DATA_FILE}`);
    process.exit(1);
  }

  const raw = fs.readFileSync(DATA_FILE, "utf8");
  const store = JSON.parse(raw);
  const posts = store.posts?.length ?? 0;
  const cats = store.categories?.length ?? 0;

  console.log(`Uploading blog store: ${posts} posts, ${cats} categories...`);

  const blob = await put(BLOB_PATHNAME, JSON.stringify(store, null, 2), {
    access: "public",
    addRandomSuffix: false,
    allowOverwrite: true,
    contentType: "application/json",
    cacheControlMaxAge: 60,
    token,
  });

  console.log("Done.");
  console.log(`URL: ${blob.url}`);
  console.log(`Path: ${blob.pathname}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
