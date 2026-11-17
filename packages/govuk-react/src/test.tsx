import fs from 'fs';
import path from 'path';

import * as packageExports from '.';

const stories = import.meta.glob<{ default: { id: string } }>('./components/*/stories.tsx', { eager: true });

describe('Exports', () => {
  // all exports are truthy
  Object.keys(packageExports).map((exportName) =>
    it(`${exportName} is truthy`, () => {
      expect(!!packageExports[exportName]).toBe(true);
    })
  );
});

// Function components, or objects such as styled components; module namespaces are neither
const isComponent = (value: unknown) =>
  typeof value === 'function' || (typeof value === 'object' && value !== null && '$$typeof' in value);

// https://stackoverflow.com/questions/18112204/get-all-directories-within-directory-nodejs?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
const dirs = (p) => fs.readdirSync(p).filter((f) => fs.statSync(path.join(p, f)).isDirectory());

describe('Components', () => {
  const components = dirs(path.join(__dirname, 'components'));
  const tsupConfig = fs.readFileSync(path.join(__dirname, '../tsup.config.ts'), 'utf8');

  components.map((component) =>
    describe(`govuk-react/${component}`, () => {
      const pascal = kebabCaseToPascalCase(component);

      it(`has a build entry`, () => {
        expect(tsupConfig).toContain(`'src/components/${component}/index.tsx'`);
      });

      it(`is exported as ${pascal}`, () => {
        expect(!!packageExports[pascal]).toBe(true);
      });

      // Multi-part components are namespaces of parts, so only single components have a name
      it.skipIf(!isComponent(packageExports[pascal]))(`is named ${pascal}`, () => {
        expect(packageExports[pascal].displayName ?? packageExports[pascal].name).toBe(pascal);
      });

      it(`has a stories.tsx file with id set to "${component}""`, () => {
        expect(stories[`./components/${component}/stories.tsx`].default.id).toBe(component);
      });
    })
  );
});

function kebabCaseToPascalCase(str: string): string {
  const camel = str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
  return camel.charAt(0).toUpperCase() + camel.slice(1);
}
