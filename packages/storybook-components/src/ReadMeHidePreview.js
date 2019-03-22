import { withDocs } from 'storybook-readme';

const readMeHidePreview = (readme = '') =>
  navigator.userAgent.match(/Chromatic/) ? storyFn => storyFn() : withDocs(readme);

export default readMeHidePreview;
