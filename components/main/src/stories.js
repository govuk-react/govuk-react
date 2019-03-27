import { storiesOf } from '@storybook/react';
import { withDocsCustom } from '@govuk-react/storybook-components';

import Main from '.';
import ReadMe from '../README.md';

const stories = storiesOf('Layout/Main', module);

stories.addDecorator(withDocsCustom(ReadMe));

stories.add('Component default', Main);
