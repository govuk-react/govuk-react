import fs from 'fs';
import path from 'path';

import * as packageExports from './index';
import pkg from '../package.json';

describe('Exports', () => {
  // all exports are truthy
  Object.keys(packageExports).map(exportName =>
    it(`${exportName} is truthy`, () => {
      expect(!!packageExports[exportName]).toBe(true);
    })
  );
});

// https://stackoverflow.com/questions/18112204/get-all-directories-within-directory-nodejs?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
const dirs = p => fs.readdirSync(p).filter(f => fs.statSync(path.join(p, f)).isDirectory());

describe('Components', () => {
  // all componenents are dependencies of govuk-react
  // if needed in future, can add an exclusion list/array to this test
  const components = dirs(path.join(__dirname, '../../../components'));

  // TODO: this fails if a component is deleted/renamed and es/lib/node_modules are left behind.
  // We either need a clean command that can be run before tests or check the existence of package.json in each component folder.
  components.map(component =>
    it(`@govuk-react/${component} is in dependencies`, () => {
      expect(!!pkg.dependencies[`@govuk-react/${component}`]).toBe(true);
    })
  );
});
