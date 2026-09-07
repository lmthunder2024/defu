// Zero-dependency static file server for the Astro build output.
// Listens on $PORT (defaults to 8080) and binds 0.0.0.0 so the
// PocketBay edge proxy can reach it through the cluster network.

import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const ROOT = join(__dirname, 'dist');
const PORT = Number(process.env.PORT) || 8080;
const HOST = '0.0.0.0';

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};

function isSafePath(candidate) {
  const resolved = normalize(candidate);
  return resolved === ROOT || resolved.startsWith(ROOT + sep);
}

async function tryServe(filePath, res) {
  try {
    const stats = await stat(filePath);
    if (stats.isDirectory()) {
      const idx = join(filePath, 'index.html');
      return tryServe(idx, res);
    }
    const data = await readFile(filePath);
    const ext = extname(filePath).toLowerCase();
    res.writeHead(200, {
      'Content-Type': MIME[ext] || 'application/octet-stream',
      'Cache-Control': ext === '.html' ? 'no-cache' : 'public, max-age=300',
    });
    res.end(data);
    return true;
  } catch {
    return false;
  }
}

const server = createServer(async (req, res) => {
  // Lightweight request log so we can see what's hitting the server.
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);

  // Health endpoints used by PocketBay probes.
  if (req.url === '/health' || req.url === '/healthz') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    return res.end('ok');
  }

  // Strip query string and decode the path.
  const urlPath = decodeURIComponent((req.url || '/').split('?')[0]);
  const requested = urlPath === '/' ? '/index.html' : urlPath;
  const candidate = normalize(join(ROOT, requested));

  if (!isSafePath(candidate)) {
    res.writeHead(403);
    return res.end('Forbidden');
  }

  // Try the literal path first, then fall back to path + ".html" for clean URLs.
  if (await tryServe(candidate, res)) return;
  if (!candidate.endsWith('.html') && await tryServe(candidate + '.html', res)) return;

  res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('Not Found');
});

server.listen(PORT, HOST, () => {
  console.log(`Photography portfolio serving dist/ on http://${HOST}:${PORT}`);
});