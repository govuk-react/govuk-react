// import React from 'react';
import { storiesOf } from '@storybook/react';
import { WithDocsCustom } from '@govuk-react/storybook-components';

import ReadMe from '../README.md';

import Page from './fixtures';

const stories = storiesOf('Layout/Page', module);

stories.addDecorator(WithDocsCustom(ReadMe));

stories.add('Component default', Page);
