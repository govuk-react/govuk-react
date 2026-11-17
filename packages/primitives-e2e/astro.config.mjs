// @ts-check
import { defineConfig } from 'astro/config';
import process from 'node:process';
import react from '@astrojs/react';

// With E2E_DEV_REACT, bundle React's development build so hydration mismatches are reported.
const devReact = process.env.E2E_DEV_REACT === 'true';

export default defineConfig({
  integrations: [react()],
  vite: {
    build: { minify: devReact ? false : 'esbuild' },
    ...(devReact ? { define: { 'process.env.NODE_ENV': '"development"' } } : {}),
  },
});
