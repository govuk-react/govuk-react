import fs from 'fs';
import path from 'path';

import * as packageExports from '.';
import pkg from '../package.json';

describe('Exports', () => {
  // all exports are truthy
  Object.keys(packageExports).map((exportName) =>
    it(`${exportName} is truthy`, () => {
      expect(!!packageExports[exportName]).toBe(true);
    })
  );
});

// https://stackoverflow.com/questions/18112204/get-all-directories-within-directory-nodejs?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
const dirs = (p) => fs.readdirSync(p).filter((f) => fs.statSync(path.join(p, f)).isDirectory());

describe('Components', () => {
  const components = dirs(path.join(__dirname, '../../../components'));

  // filter out any build artifacts from deleted components that may be in gitignore
  const componentsWithPackageFile = components.filter((componentName) => {
    const packageFile = path.join(path.join(__dirname, '../../../components'), componentName, 'package.json');
    return fs.existsSync(packageFile);
  });

  componentsWithPackageFile.map((component) =>
    describe(`@govuk-react/${component}`, () => {
      const pascal = kebabCaseToPascalCase(component);

      it(`is in dependencies`, () => {
        expect(!!pkg.dependencies[`@govuk-react/${component}`]).toBe(true);
      });

      it(`is exported as ${pascal}`, () => {
        expect(!!packageExports[pascal]).toBe(true);
      });

      it(`has displayName set to ${pascal}`, () => {
        expect(packageExports[pascal].displayName).toBe(pascal);
      });

      it(`has a stories.tsx file with id set to "${component}""`, () => {
        // eslint-disable-next-line global-require, import/no-dynamic-require, @typescript-eslint/no-var-requires
        const story = require(path.join(__dirname, `../../../components/${component}/src/stories.tsx`));
        expect(story.default.id).toBe(component);
      });
    })
  );
});

function kebabCaseToPascalCase(str: string): string {
  const camel = str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
  return camel.charAt(0).toUpperCase() + camel.slice(1);
}
