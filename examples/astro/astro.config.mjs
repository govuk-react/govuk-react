// @ts-check
import { cpSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import react from '@astrojs/react';

/** govuk-frontend's CSS loads its fonts and images from /assets, so serve them from public/assets. */
function govukFrontendAssets() {
  return {
    name: 'govuk-frontend-assets',
    hooks: {
      /** @param {{ config: import('astro').AstroConfig }} options */
      'astro:config:setup': ({ config }) => {
        cpSync(
          fileURLToPath(new URL('node_modules/govuk-frontend/dist/govuk/assets', config.root)),
          fileURLToPath(new URL('assets', config.publicDir)),
          { recursive: true }
        );
      },
    },
  };
}

export default defineConfig({
  output: 'server',
  integrations: [react(), govukFrontendAssets()],
  adapter: node({ mode: 'standalone' }),
  // The forms are small, so refuse large submissions rather than parse them.
  security: { actionBodySizeLimit: 16 * 1024 },
  // govuk-frontend's CSS has hacks for old browsers that Lightning CSS rejects unless it can recover.
  vite: { css: { lightningcss: { errorRecovery: true } } },
});
