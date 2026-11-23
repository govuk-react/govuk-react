import { createServer } from 'node:http';
import compression from 'compression';

process.env.ASTRO_NODE_AUTOSTART = 'disabled';
const { handler } = await import('./dist/server/entry.mjs');

const port = Number(process.env.PORT ?? 4322);
const compress = compression();
const staticPrefixes = ['/_astro/', '/assets/', '/javascripts/', '/stylesheets/'];

/** Compresses every response, and lets browsers cache static files, as a production server would. */
createServer((req, res) => {
  if (staticPrefixes.some((prefix) => req.url?.startsWith(prefix))) {
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
  }
  compress(req, res, () => handler(req, res));
}).listen(port, () => console.log(`Benchmark server on http://localhost:${port}/`));
