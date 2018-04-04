import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs/react';
import InputField from '@govuk-react/input-field';
import Button from '@govuk-react/button';

import withWhiteSpace from '.';

const stories = storiesOf('withWhiteSpace', module);
stories.addDecorator(withKnobs);

const InputFieldWithWhiteSpace = withWhiteSpace({ marginBottom: 1 })(InputField);


stories.add('with spacing default size 1', () => (
  <React.Fragment>
    <InputFieldWithWhiteSpace mb={number('marginBottom', 1)} name="group1" hint="Change whitespace value with knobs">Example 1</InputFieldWithWhiteSpace>
    <Button>Finish</Button>
  </React.Fragment>
));

stories.add('with spacing size 2', () => (
  <React.Fragment>
    <InputFieldWithWhiteSpace mb={number('marginBottom1', 1)} name="group1" hint="hi">Example 1</InputFieldWithWhiteSpace>
    <InputFieldWithWhiteSpace mb={number('marginBottom2', 4)} name="group1" hint="hi">Example 2</InputFieldWithWhiteSpace>
    <InputFieldWithWhiteSpace mb={number('marginBottom3', 7)} name="group1" hint="hi">Example 3</InputFieldWithWhiteSpace>
    <InputFieldWithWhiteSpace mb={number('marginBottom4', 9)} name="group1" hint="okay">Example 4</InputFieldWithWhiteSpace>
    <Button>Finish</Button>
  </React.Fragment>
));
