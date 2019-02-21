import React, { Fragment } from 'react';
import { storiesOf } from '@storybook/react';
import { text, withKnobs } from '@storybook/addon-knobs/react';
import { WithDocsCustom } from '@govuk-react/storybook-components';

import Header from '@govuk-react/header';

import Caption, { CaptionWithKnobs } from './fixtures';
import ReadMe from '../README.md';

const stories = storiesOf('Typography/Caption', module);
const examples = storiesOf('Typography/Caption/Examples', module);

stories.addDecorator(withKnobs);
stories.addDecorator(WithDocsCustom(ReadMe));
examples.addDecorator(withKnobs);

stories.add('Component default', () => (
  <CaptionWithKnobs />
));

examples.add('Placed with a heading component', () => (
  <Fragment>
    <Caption size={text('size', 'XL')}>{text('children', 'Supporting header text')}</Caption>
    <Header size={text('header size', 'XL')}>{text('children', 'Main header text')}</Header>
  </Fragment>
));

examples.add('Showing all standard caption sizes, with headings', () => (
  <Fragment>
    <Caption size="XL">Supporting header size XL</Caption>
    <Header size="XL">Main header size XL</Header>
    <Caption size="L">Supporting header size L</Caption>
    <Header size="L">Main header size L</Header>
    <Caption size="M">Supporting header size M</Caption>
    <Header size="M">Main header size M</Header>
  </Fragment>
));
