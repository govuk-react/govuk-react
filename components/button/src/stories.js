import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react';

// import iconPointer from '../../../images/icon-pointer.png';
import Button from '.';

const stories = storiesOf('Button', module);

stories.addDecorator(withKnobs);

stories.add('Button text', () => <Button>Save and continue</Button>);

stories.add('Start', () => (
  <Button start={boolean('Start', true)}>Start now</Button>
));

// TODO: reinstate inline images
// stories.add('Start with icon', () => (
//   <Button iconUrl={text('Icon', iconPointer)} start={boolean('Start', true)}>
//     Start now
//   </Button>
// ));

stories.add('Disabled', () => (
  <Button disabled={boolean('Disabled', true)}>Disabled primary button</Button>
));

// TODO: reinstate inline images
// stories.add('Disabled start with icon', () => (
//   <Button
//     disabled={boolean('Disabled', true)}
//     iconUrl={text('Icon', iconPointer)}
//     start={boolean('Start', true)}
//   >
//     Start now
//   </Button>
// ));
