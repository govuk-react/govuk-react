import { withDocs } from 'storybook-readme';

const withDocsCustom = (readme = '') =>
  navigator.userAgent.match(/Chromatic/) ? storyFn => storyFn() : withDocs(readme);

export default withDocsCustom;
