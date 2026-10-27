import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { landscapingSeo, pageUrl } from "./src/seo.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function escapeAttr(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;");
}

function replaceMeta(html, attr, key, content) {
  const pattern = new RegExp(
    "<meta\\s+" + attr + '="' + key + '"\\s+content="[^"]*"\\s*/?>'
  );
  const tag =
    "<meta " + attr + '="' + key + '" content="' + escapeAttr(content) + '" />';
  if (pattern.test(html)) {
    return html.replace(pattern, tag);
  }
  return html;
}

function applySeo(html, seo) {
  const url = pageUrl(seo.path);
  let next = html;
  next = next.replace(
    /<title>[\s\S]*?<\/title>/,
    "<title>" + escapeAttr(seo.title) + "</title>"
  );
  next = replaceMeta(next, "name", "description", seo.description);
  next = replaceMeta(next, "property", "og:title", seo.title);
  next = replaceMeta(next, "property", "og:description", seo.description);
  next = replaceMeta(next, "property", "og:url", url);
  next = replaceMeta(next, "name", "twitter:title", seo.title);
  next = replaceMeta(next, "name", "twitter:description", seo.description);
  next = next.replace(
    /<link rel="canonical" href="[^"]*"\s*\/?>/,
    '<link rel="canonical" href="' + escapeAttr(url) + '" />'
  );
  next = next.replace(
    /<script type="application\/ld\+json" id="page-jsonld">[\s\S]*?<\/script>/,
    '<script type="application/ld+json" id="page-jsonld">' +
      JSON.stringify(seo.jsonLd) +
      "</script>"
  );
  return next;
}

function landscapingHtmlPlugin() {
  return {
    name: "landscaping-html",
    apply: "build",
    closeBundle() {
      const indexPath = path.resolve(__dirname, "build", "index.html");
      const html = fs.readFileSync(indexPath, "utf8");
      const next = applySeo(html, landscapingSeo);
      const outDir = path.resolve(__dirname, "build", "landscaping");
      fs.mkdirSync(outDir, { recursive: true });
      fs.writeFileSync(path.join(outDir, "index.html"), next);
    },
  };
}

export default defineConfig({
  plugins: [react(), landscapingHtmlPlugin()],
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.jsx?$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        ".js": "jsx",
      },
    },
  },
  server: {
    port: 3000,
  },
  build: {
    outDir: "build",
  },
});
