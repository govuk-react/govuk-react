import { readFile } from 'node:fs/promises';
import { defineConfig, type Options } from 'tsup';

type Plugin = NonNullable<Options['esbuildPlugins']>[number];

/**
 * Resolves `inline:<name>` to the text of that element's inline script, which
 * tsup.inline.config.ts builds first, made safe to put inside a script tag.
 */
const inlineScripts: Plugin = {
  name: 'inline-scripts',
  setup(build) {
    build.onResolve({ filter: /^inline:/ }, (args) => ({
      path: args.path.slice('inline:'.length),
      namespace: 'inline',
    }));
    build.onLoad({ filter: /.*/, namespace: 'inline' }, async (args) => {
      const source = await readFile(`dist/inline/${args.path}-element.js`, 'utf8');
      return {
        contents: source
          .trim()
          .replace(/<\/(script)/gi, '<\\/$1')
          .replace(/<!--/g, '<\\!--'),
        loader: 'text',
      };
    });
  },
};

const shared: Options = {
  format: ['esm'],
  dts: true,
  tsconfig: 'tsconfig.build.json',
  sourcemap: true,
  // package.json's build script cleans dist first, and builds the inline scripts before these.
  clean: false,
};

export default defineConfig([
  {
    ...shared,
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
      button: 'src/button/index.tsx',
      'exit-this-page': 'src/exit-this-page/index.tsx',
      'exit-this-page-element': 'src/exit-this-page/element.ts',
      'button-element': 'src/button/element.ts',
      choices: 'src/choices/index.tsx',
      'choices-element': 'src/choices/element.ts',
      'focus-links': 'src/focus-links/index.tsx',
      'focus-links-element': 'src/focus-links/element.ts',
      'character-count-element': 'src/character-count/element.ts',
      'file-upload': 'src/file-upload/index.tsx',
      'file-upload-element': 'src/file-upload/element.ts',
    },
    // Keep the React parts out of React Server Components. esbuild drops the directive from the source.
    banner: { js: "'use client';" },
  },
  {
    ...shared,
    // A server component, so the scripts stay out of client bundles.
    entry: { 'inline-script': 'src/inline-script/index.tsx' },
    esbuildPlugins: [inlineScripts],
  },
]);
