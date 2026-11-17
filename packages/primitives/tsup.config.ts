import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    tabs: 'src/tabs/index.tsx',
    'tabs-element': 'src/tabs/element.ts',
    modal: 'src/modal/index.tsx',
    'modal-element': 'src/modal/element.ts',
  },
  format: ['esm'],
  dts: true,
  tsconfig: 'tsconfig.build.json',
  sourcemap: true,
  clean: true,
  // Keep the React parts out of React Server Components. esbuild drops the directive from the source.
  banner: { js: "'use client';" },
});
