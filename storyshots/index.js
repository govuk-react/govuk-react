import initStoryshots, { renderOnly } from '@storybook/addon-storyshots';
 
initStoryshots({
  configPath: './packages/storybook/.storybook',
  test: renderOnly
});