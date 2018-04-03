import React from 'react';
import { storiesOf } from '@storybook/react';
// import { withKnobs, text, number, boolean } from '@storybook/addon-knobs/react';
import InputField from '@govuk-react/input-field';
import Button from '@govuk-react/button';

import withWhiteSpace from '.';

const InputFieldWithWhiteSpace = withWhiteSpace()(InputField);
const InputFieldWithWhiteSpace5 = withWhiteSpace({ marginBottom: 5 })(InputField);
const InputFieldWithWhiteSpace9 = withWhiteSpace({ marginBottom: 9 })(InputField);
const InputFieldWithWhiteSpace9NoLastChild = withWhiteSpace({
  marginBottom: 9,
  disableLastChildMargin: true,
})(InputField);

storiesOf('withWhiteSpace', module).add('default', () => (
  <React.Fragment>
    <InputFieldWithWhiteSpace name="group1" hint="hi">Example 1</InputFieldWithWhiteSpace>
    <InputFieldWithWhiteSpace name="group1" hint="hi">Example 2</InputFieldWithWhiteSpace>
    <InputFieldWithWhiteSpace name="group1" hint="hi">Example 3</InputFieldWithWhiteSpace>
    <InputFieldWithWhiteSpace name="group1" hint="okay">Example 4</InputFieldWithWhiteSpace>
    <Button>Finish</Button>
  </React.Fragment>
));

storiesOf('withWhiteSpace', module).add('with spacing size 5', () => (
  <React.Fragment>
    <InputFieldWithWhiteSpace5 name="group1" hint="hi">Example 1</InputFieldWithWhiteSpace5>
    <InputFieldWithWhiteSpace5 name="group1" hint="hi">Example 2</InputFieldWithWhiteSpace5>
    <InputFieldWithWhiteSpace5 name="group1" hint="hi">Example 3</InputFieldWithWhiteSpace5>
    <InputFieldWithWhiteSpace5 name="group1" hint="okay">Example 4</InputFieldWithWhiteSpace5>
    <Button>Finish</Button>
  </React.Fragment>
));

storiesOf('withWhiteSpace', module).add('with spacing size 9', () => (
  <React.Fragment>
    <InputFieldWithWhiteSpace9 name="group1" hint="hi">Example 1</InputFieldWithWhiteSpace9>
    <InputFieldWithWhiteSpace9 name="group1" hint="hi">Example 2</InputFieldWithWhiteSpace9>
    <InputFieldWithWhiteSpace9 name="group1" hint="hi">Example 3</InputFieldWithWhiteSpace9>
    <InputFieldWithWhiteSpace9 name="group1" hint="okay">Example 4</InputFieldWithWhiteSpace9>
    <Button>Finish</Button>
  </React.Fragment>
));

storiesOf('withWhiteSpace', module).add('with spacing size 9 & disableLastChildMargin', () => (
  <React.Fragment>
    <InputFieldWithWhiteSpace9NoLastChild name="group1" hint="hi">Example 1</InputFieldWithWhiteSpace9NoLastChild>
    <InputFieldWithWhiteSpace9NoLastChild name="group1" hint="hi">Example 2</InputFieldWithWhiteSpace9NoLastChild>
    <InputFieldWithWhiteSpace9NoLastChild name="group1" hint="hi">Example 3</InputFieldWithWhiteSpace9NoLastChild>
    <InputFieldWithWhiteSpace9NoLastChild name="group1" hint="okay">Example 4</InputFieldWithWhiteSpace9NoLastChild>
    <Button>Finish</Button>
  </React.Fragment>
));
