const fs = require("fs");
const path = require("path");

const SQL_PATH =
  process.argv[2] ||
  path.join(
    process.env.USERPROFILE || "",
    "Downloads",
    "devvia_laravel (2).sql"
  );
const OUT_DIR = path.join(__dirname, "..", "data");
const OUT_FILE = path.join(OUT_DIR, "blog.json");

function parseSqlString(sql, startIndex) {
  // startIndex points at opening quote '
  let i = startIndex + 1;
  let out = "";
  while (i < sql.length) {
    const ch = sql[i];
    if (ch === "\\" && i + 1 < sql.length) {
      const next = sql[i + 1];
      const map = { n: "\n", r: "\r", t: "\t", "0": "\0", "'": "'", '"': '"', "\\": "\\" };
      out += map[next] !== undefined ? map[next] : next;
      i += 2;
      continue;
    }
    if (ch === "'" && sql[i + 1] === "'") {
      out += "'";
      i += 2;
      continue;
    }
    if (ch === "'") {
      return { value: out, end: i + 1 };
    }
    out += ch;
    i += 1;
  }
  throw new Error("Unterminated SQL string");
}

function parseValue(sql, i) {
  while (i < sql.length && /\s/.test(sql[i])) i += 1;
  if (sql.slice(i, i + 4).toUpperCase() === "NULL" && !/[A-Za-z0-9_]/.test(sql[i + 4] || "")) {
    return { value: null, end: i + 4 };
  }
  if (sql[i] === "'") {
    return parseSqlString(sql, i);
  }
  // number
  let j = i;
  while (j < sql.length && /[0-9.]/.test(sql[j])) j += 1;
  return { value: Number(sql.slice(i, j)), end: j };
}

function parseRow(sql, i) {
  // i points at '('
  if (sql[i] !== "(") throw new Error(`Expected ( at ${i}`);
  i += 1;
  const values = [];
  while (i < sql.length) {
    while (i < sql.length && /[\s,]/.test(sql[i])) i += 1;
    if (sql[i] === ")") {
      return { values, end: i + 1 };
    }
    const parsed = parseValue(sql, i);
    values.push(parsed.value);
    i = parsed.end;
    while (i < sql.length && /\s/.test(sql[i])) i += 1;
    if (sql[i] === ",") {
      i += 1;
      continue;
    }
    if (sql[i] === ")") {
      return { values, end: i + 1 };
    }
  }
  throw new Error("Unterminated row");
}

function extractInserts(sql, table) {
  const needle = `INSERT INTO \`${table}\``;
  const rows = [];
  let searchFrom = 0;
  while (true) {
    const start = sql.indexOf(needle, searchFrom);
    if (start === -1) break;
    let i = sql.indexOf("VALUES", start);
    if (i === -1) break;
    i += "VALUES".length;
    while (true) {
      while (i < sql.length && /\s/.test(sql[i])) i += 1;
      if (sql[i] !== "(") break;
      const row = parseRow(sql, i);
      rows.push(row.values);
      i = row.end;
      while (i < sql.length && /\s/.test(sql[i])) i += 1;
      if (sql[i] === ",") {
        i += 1;
        continue;
      }
      if (sql[i] === ";") {
        i += 1;
        break;
      }
      break;
    }
    searchFrom = i;
  }
  return rows;
}

function safeJson(value, fallback = {}) {
  if (value == null || value === "") return fallback;
  try {
    return JSON.parse(value);
  } catch {
    return fallback;
  }
}

function main() {
  if (!fs.existsSync(SQL_PATH)) {
    console.error("SQL file not found:", SQL_PATH);
    process.exit(1);
  }
  const sql = fs.readFileSync(SQL_PATH, "utf8");

  const categoryRows = extractInserts(sql, "categories");
  const postRows = extractInserts(sql, "posts");
  const pivotRows = extractInserts(sql, "category_post");

  const categories = categoryRows.map((r) => ({
    id: r[0],
    title: safeJson(r[1], { fr: "", en: "" }),
    slug: safeJson(r[2], { fr: "", en: "" }),
    description: safeJson(r[3], { fr: "", en: "" }),
    created_at: r[4],
    updated_at: r[5],
  }));

  const posts = postRows.map((r) => ({
    id: r[0],
    title: safeJson(r[1], { fr: "", en: "" }),
    slug: safeJson(r[2], { fr: "", en: "" }),
    image: r[3] || "",
    meta_description: safeJson(r[4], { fr: "", en: "" }),
    keywords: safeJson(r[5], { fr: "", en: "" }),
    content: safeJson(r[6], { fr: "", en: "" }),
    created_at: r[7],
    updated_at: r[8],
    category_ids: [],
  }));

  const postById = new Map(posts.map((p) => [p.id, p]));
  for (const r of pivotRows) {
    const categoryId = r[1];
    const postId = r[2];
    const post = postById.get(postId);
    if (post && !post.category_ids.includes(categoryId)) {
      post.category_ids.push(categoryId);
    }
  }

  posts.sort((a, b) => b.id - a.id);

  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });
  const payload = {
    nextPostId: Math.max(0, ...posts.map((p) => p.id)) + 1,
    nextCategoryId: Math.max(0, ...categories.map((c) => c.id)) + 1,
    categories,
    posts,
  };
  fs.writeFileSync(OUT_FILE, JSON.stringify(payload, null, 2), "utf8");
  console.log(
    `Imported ${posts.length} posts and ${categories.length} categories → ${OUT_FILE}`
  );
}

main();
