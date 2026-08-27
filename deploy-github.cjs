#!/usr/bin/env node
// Deploys the LifeTree site to GitHub Pages using only the GitHub REST API.
// Usage: GH_TOKEN=... GH_OWNER=yourname GH_REPO=lifetree node deploy-github.cjs [distDir]
// Needs a fine-grained token scoped to ONE repo with: Contents (read/write), Pages (read/write), Administration (read/write).
// The repo must already exist (public, for free Pages). Revoke the token after the deploy is confirmed.
const fs = require("fs"); const path = require("path");
const { GH_TOKEN, GH_OWNER, GH_REPO } = process.env; const dist = process.argv[2] || "dist";
if (!GH_TOKEN || !GH_OWNER || !GH_REPO) { console.error("Set GH_TOKEN, GH_OWNER, GH_REPO"); process.exit(1); }
const api = async (method, url, body) => {
  const r = await fetch(`https://api.github.com${url}`, { method, headers: { Authorization: `Bearer ${GH_TOKEN}`, Accept: "application/vnd.github+json", "X-GitHub-Api-Version": "2022-11-28", "Content-Type": "application/json" }, body: body ? JSON.stringify(body) : undefined });
  const text = await r.text(); let json = null; try { json = JSON.parse(text); } catch { /* not json */ }
  return { status: r.status, json, text };
};
(async () => {
  const repo = await api("GET", `/repos/${GH_OWNER}/${GH_REPO}`);
  if (repo.status !== 200) { console.error(`Repo not reachable (${repo.status}): ${repo.text.slice(0, 200)}`); process.exit(1); }
  const branch = repo.json.default_branch || "main";
  const files = ["index.html", "manifest.webmanifest", "sw.js", "icon-192.png", "icon-512.png", "apple-touch-icon.png", "og-image.png", ".nojekyll"];
  if (!fs.existsSync(path.join(dist, ".nojekyll"))) fs.writeFileSync(path.join(dist, ".nojekyll"), "");
  for (const f of files) {
    const content = fs.readFileSync(path.join(dist, f)).toString("base64");
    const existing = await api("GET", `/repos/${GH_OWNER}/${GH_REPO}/contents/${f}?ref=${branch}`);
    const sha = existing.status === 200 ? existing.json.sha : undefined;
    const put = await api("PUT", `/repos/${GH_OWNER}/${GH_REPO}/contents/${f}`, { message: `deploy: ${f}`, content, branch, sha });
    if (put.status !== 200 && put.status !== 201) { console.error(`Upload failed for ${f} (${put.status}): ${put.text.slice(0, 200)}`); process.exit(1); }
    console.log(`uploaded ${f}`);
  }
  let pages = await api("GET", `/repos/${GH_OWNER}/${GH_REPO}/pages`);
  if (pages.status === 404) { pages = await api("POST", `/repos/${GH_OWNER}/${GH_REPO}/pages`, { source: { branch, path: "/" } }); }
  else if (pages.status === 200) { await api("PUT", `/repos/${GH_OWNER}/${GH_REPO}/pages`, { source: { branch, path: "/" } }); pages = await api("GET", `/repos/${GH_OWNER}/${GH_REPO}/pages`); }
  const url = pages.json?.html_url || `https://${GH_OWNER}.github.io/${GH_REPO}/`;
  console.log(`\nPages enabled. First build takes about a minute.\nLive at: ${url}`);
  console.log(`Set og:url / og:image in index.html to ${url} for link previews, then re-run this script.`);
})().catch(e => { console.error(e); process.exit(1); });
