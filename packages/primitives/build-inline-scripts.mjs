import { readFile, writeFile } from 'node:fs/promises';
import { build } from 'esbuild';

/*
 * Each element's script must run on its own, before React loads, so it is bundled into a
 * minified classic script with no imports. The inline-script module that tsc emits imports
 * each one as `inline:<name>`; this replaces those imports with the scripts' text.
 */

const inlineImport = /^import (\w+) from 'inline:([\w-]+)';$/gm;
const module = 'dist/inline-script/index.js';
const types = 'dist/inline-script/index.d.ts';

const source = await readFile(module, 'utf8');
const names = [...source.matchAll(inlineImport)].map(([, , name]) => name);

await build({
  entryPoints: names.map((name) => ({ in: `src/${name}/element.ts`, out: `${name}-element` })),
  outdir: 'dist/inline',
  bundle: true,
  format: 'iife',
  minify: true,
  target: 'es2020',
});

const scripts = Object.fromEntries(
  await Promise.all(
    names.map(async (name) => {
      const script = await readFile(`dist/inline/${name}-element.js`, 'utf8');
      // Safe inside a script tag
      return [
        name,
        script
          .trim()
          .replace(/<\/(script)/gi, '<\\/$1')
          .replace(/<!--/g, '<\\!--'),
      ];
    })
  )
);

await writeFile(
  module,
  source.replace(inlineImport, (_, id, name) => `const ${id} = ${JSON.stringify(scripts[name])};`)
);
const declarations = await readFile(types, 'utf8');
await writeFile(
  types,
  declarations.replace(inlineImport, (_, id) => `declare const ${id}: string;`)
);
