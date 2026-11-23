// @ts-check
import { cpSync, mkdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import react from '@astrojs/react';
import * as sass from 'sass';

/**
 * Serves govuk-frontend's assets, one stylesheet that every variant shares, and govuk-frontend's
 * JavaScript for the govuk-frontend variant, from public.
 */
function govukFrontendFiles() {
  return {
    name: 'govuk-frontend-files',
    hooks: {
      /** @param {{ config: import('astro').AstroConfig }} options */
      'astro:config:setup': ({ config }) => {
        const dist = new URL('node_modules/govuk-frontend/dist/govuk/', config.root);
        cpSync(fileURLToPath(new URL('assets', dist)), fileURLToPath(new URL('assets', config.publicDir)), {
          recursive: true,
        });
        mkdirSync(fileURLToPath(new URL('javascripts', config.publicDir)), { recursive: true });
        cpSync(
          fileURLToPath(new URL('govuk-frontend.min.js', dist)),
          fileURLToPath(new URL('javascripts/govuk-frontend.min.js', config.publicDir))
        );
        const { css } = sass.compile(fileURLToPath(new URL('src/styles/govuk-frontend.scss', config.root)), {
          style: 'compressed',
          loadPaths: [fileURLToPath(new URL('node_modules', config.root))],
          quietDeps: true,
        });
        mkdirSync(fileURLToPath(new URL('stylesheets', config.publicDir)), { recursive: true });
        writeFileSync(fileURLToPath(new URL('stylesheets/govuk-frontend.css', config.publicDir)), css);
      },
    },
  };
}

export default defineConfig({
  output: 'server',
  integrations: [react(), govukFrontendFiles()],
  adapter: node({ mode: 'standalone' }),
  vite: { css: { lightningcss: { errorRecovery: true } } },
});
