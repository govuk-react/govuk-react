import React from 'react';
import ReactDOM from 'react-dom';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs/react';

import LoadingBox from '.';

const stories = storiesOf('LoadingBox', module);

stories.addDecorator(withKnobs);

stories.add('LoadingBox default', () => (
  <LoadingBox>LoadingBox example</LoadingBox>
));

stories.add('LoadingBox with black', () => (
  <div>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <LoadingBox
      in={boolean('show', false)}
      backgroundColor={text('backgroundColor', '#888')}
      timeIn={number('timeIn', 500)}
      timeOut={number('timeOut', 100)}
      backgroundColorOpacity={number('backgroundColorOpacity', 0.5)}
    >
      <span style={{ color: '#ffffff' }}>LoadingBox example</span>
    </LoadingBox>
  </div>
));
