import { storiesOf } from '@storybook/react';
import ExampleApplication from '.';

const stories = storiesOf('Example Application', module);

stories.add('Example Application', ExampleApplication, {
  layout: 'fullscreen',
});
