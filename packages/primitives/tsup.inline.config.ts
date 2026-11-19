import { defineConfig } from 'tsup';
import { inlineElements } from './inline-elements';

// Each element on its own, with no imports, as a minified classic script that can be inlined in a
// page, so the markup is interactive before React has loaded.
export default defineConfig({
  entry: Object.fromEntries(inlineElements.map((name) => [`${name}-element`, `src/${name}/element.ts`])),
  outDir: 'dist/inline',
  format: ['iife'],
  outExtension: () => ({ js: '.js' }),
  minify: true,
  target: 'es2020',
  clean: false,
});
