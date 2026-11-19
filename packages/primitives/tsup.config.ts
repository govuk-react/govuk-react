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
    'character-count': 'src/character-count/index.tsx',
    'auto-focus': 'src/auto-focus/index.tsx',
    'auto-focus-element': 'src/auto-focus/element.ts',
    choices: 'src/choices/index.tsx',
    'choices-element': 'src/choices/element.ts',
    'focus-links': 'src/focus-links/index.tsx',
    'focus-links-element': 'src/focus-links/element.ts',
    'character-count-element': 'src/character-count/element.ts',
  },
  format: ['esm'],
  dts: true,
  tsconfig: 'tsconfig.build.json',
  sourcemap: true,
  clean: true,
  // Keep the React parts out of React Server Components. esbuild drops the directive from the source.
  banner: { js: "'use client';" },
});
