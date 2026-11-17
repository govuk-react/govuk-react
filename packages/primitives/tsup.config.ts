import { defineConfig } from 'tsup';

export default defineConfig({
  entry: {
    index: 'src/index.ts',
    accordion: 'src/accordion/index.tsx',
    'accordion-element': 'src/accordion/element.ts',
    disclosure: 'src/disclosure/index.tsx',
    'disclosure-element': 'src/disclosure/element.ts',
    tabs: 'src/tabs/index.tsx',
    'tabs-element': 'src/tabs/element.ts',
    modal: 'src/modal/index.tsx',
    'modal-element': 'src/modal/element.ts',
    'password-input': 'src/password-input/index.tsx',
    'password-input-element': 'src/password-input/element.ts',
  },
  format: ['esm'],
  dts: true,
  tsconfig: 'tsconfig.build.json',
  sourcemap: true,
  clean: true,
  // Keep the React parts out of React Server Components. esbuild drops the directive from the source.
  banner: { js: "'use client';" },
});
