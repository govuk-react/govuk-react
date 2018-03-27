import React from 'react';
import ReactDOM from 'react-dom';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, number, boolean } from '@storybook/addon-knobs/react';

import LoadingBox from '.';

const stories = storiesOf('LoadingBox', module);

stories.addDecorator(withKnobs);

stories.add('LoadingBox default', () => (
  <LoadingBox
    loading={boolean('loading', false)}
    backgroundColor={text('backgroundColor', '#888')}
    timeIn={number('timeIn', 500)}
    timeOut={number('timeOut', 100)}
    backgroundColorOpacity={number('backgroundColorOpacity', 0.5)}
    spinnerColor={text('spinnerColor', '#fff')}
  >
    <p style={{ marginTop: 0 }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, et dolore magna aliqua.</p>
    <p>Ut enim ad minim veniam, quis laboris nisi ut aliquip ex ea commodo consequat.</p>
    <p>Duis aute irure dolor qui officia deserunt mollit anim id est laborum.</p>
  </LoadingBox>
));

stories.add('LoadingBox with black', () => (
  <LoadingBox
    loading={boolean('loading', false)}
    backgroundColor={text('backgroundColor', '#000')}
    timeIn={number('timeIn', 333)}
    timeOut={number('timeOut', 1000)}
    backgroundColorOpacity={number('backgroundColorOpacity', 0.8)}
    spinnerColor={text('spinnerColor', '#fff')}
  >
    <p style={{ marginTop: 0 }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, et dolore magna aliqua.</p>
    <p>Ut enim ad minim veniam, quis laboris nisi ut aliquip ex ea commodo consequat.</p>
    <p>Duis aute irure dolor qui officia deserunt mollit anim id est laborum.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, et dolore magna aliqua.</p>
    <p>Ut enim ad minim veniam, quis laboris nisi ut aliquip ex ea commodo consequat.</p>
    <p>Duis aute irure dolor qui officia deserunt mollit anim id est laborum.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, et dolore magna aliqua.</p>
    <p>Ut enim ad minim veniam, quis laboris nisi ut aliquip ex ea commodo consequat.</p>
    <p>Duis aute irure dolor qui officia deserunt mollit anim id est laborum.</p>
  </LoadingBox>
));

stories.add('LoadingBox with black (long)', () => (
  <LoadingBox
    loading={boolean('loading', false)}
    backgroundColor={text('backgroundColor', '#000')}
    timeIn={number('timeIn', 333)}
    timeOut={number('timeOut', 1000)}
    backgroundColorOpacity={number('backgroundColorOpacity', 0.8)}
    spinnerColor={text('spinnerColor', '#fff')}
  >
    <p style={{ marginTop: 0 }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, et dolore magna aliqua.</p>
    <p>Ut enim ad minim veniam, quis laboris nisi ut aliquip ex ea commodo consequat.</p>
    <p>Duis aute irure dolor qui officia deserunt mollit anim id est laborum.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, et dolore magna aliqua.</p>
    <p>Ut enim ad minim veniam, quis laboris nisi ut aliquip ex ea commodo consequat.</p>
    <p>Duis aute irure dolor qui officia deserunt mollit anim id est laborum.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, et dolore magna aliqua.</p>
    <p>Ut enim ad minim veniam, quis laboris nisi ut aliquip ex ea commodo consequat.</p>
    <p>Duis aute irure dolor qui officia deserunt mollit anim id est laborum.</p>
    <p>Ut enim ad minim veniam, quis laboris nisi ut aliquip ex ea commodo consequat.</p>
    <p>Duis aute irure dolor qui officia deserunt mollit anim id est laborum.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, et dolore magna aliqua.</p>
    <p>Ut enim ad minim veniam, quis laboris nisi ut aliquip ex ea commodo consequat.</p>
    <p>Duis aute irure dolor qui officia deserunt mollit anim id est laborum.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, et dolore magna aliqua.</p>
    <p>Ut enim ad minim veniam, quis laboris nisi ut aliquip ex ea commodo consequat.</p>
    <p>Duis aute irure dolor qui officia deserunt mollit anim id est laborum.</p>
    <p>Ut enim ad minim veniam, quis laboris nisi ut aliquip ex ea commodo consequat.</p>
    <p>Duis aute irure dolor qui officia deserunt mollit anim id est laborum.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, et dolore magna aliqua.</p>
    <p>Ut enim ad minim veniam, quis laboris nisi ut aliquip ex ea commodo consequat.</p>
    <p>Duis aute irure dolor qui officia deserunt mollit anim id est laborum.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, et dolore magna aliqua.</p>
    <p>Ut enim ad minim veniam, quis laboris nisi ut aliquip ex ea commodo consequat.</p>
    <p>Duis aute irure dolor qui officia deserunt mollit anim id est laborum.</p>
  </LoadingBox>
));
