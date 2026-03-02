import { build as esbuild } from "esbuild";
import { build as viteBuild } from "vite";
import { rm, readFile, mkdir, writeFile } from "fs/promises";
import pg from "pg";

// server deps to bundle to reduce openat(2) syscalls
// which helps cold start times
const allowlist = [
  "@google/generative-ai",
  "axios",
  "connect-pg-simple",
  "cors",
  "date-fns",
  "drizzle-orm",
  "drizzle-zod",
  "express",
  "express-rate-limit",
  "express-session",
  "jsonwebtoken",
  "memorystore",
  "multer",
  "nanoid",
  "nodemailer",
  "openai",
  "passport",
  "passport-local",
  "pg",
  "stripe",
  "uuid",
  "ws",
  "xlsx",
  "zod",
  "zod-validation-error",
];

async function exportBlogPosts() {
  const dbUrl = process.env.DATABASE_URL;
  if (!dbUrl) {
    console.log("No DATABASE_URL, skipping blog export");
    return;
  }
  console.log("exporting blog posts to static JSON...");
  const client = new pg.Client({ connectionString: dbUrl });
  await client.connect();
  try {
    const result = await client.query(
      "SELECT * FROM blog_posts WHERE published = true ORDER BY created_at DESC"
    );
    const posts = result.rows.map((r: any) => ({
      id: r.id,
      title: r.title,
      slug: r.slug,
      summary: r.summary,
      content: r.content,
      imageUrl: r.image_url,
      published: r.published,
      createdAt: r.created_at,
    }));

    await mkdir("dist/public/api/blog", { recursive: true });

    const listData = posts.map(({ content, ...rest }: any) => rest);
    await writeFile("dist/public/api/blog.json", JSON.stringify(listData));

    for (const post of posts) {
      await writeFile(`dist/public/api/blog/${post.slug}.json`, JSON.stringify(post));
    }
    console.log(`exported ${posts.length} blog posts`);
  } finally {
    await client.end();
  }
}

async function buildAll() {
  await rm("dist", { recursive: true, force: true });

  console.log("building client...");
  await viteBuild();

  await exportBlogPosts();

  console.log("building server...");
  const pkg = JSON.parse(await readFile("package.json", "utf-8"));
  const allDeps = [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.devDependencies || {}),
  ];
  const externals = allDeps.filter((dep) => !allowlist.includes(dep));

  await esbuild({
    entryPoints: ["server/index.ts"],
    platform: "node",
    bundle: true,
    format: "cjs",
    outfile: "dist/index.cjs",
    define: {
      "process.env.NODE_ENV": '"production"',
    },
    minify: true,
    external: externals,
    logLevel: "info",
  });
}

buildAll().catch((err) => {
  console.error(err);
  process.exit(1);
});
