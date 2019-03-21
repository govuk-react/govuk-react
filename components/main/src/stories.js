import { storiesOf } from '@storybook/react';
import { WithDocsCustom } from '@govuk-react/storybook-components';

import Main from '.';
import ReadMe from '../README.md';

const stories = storiesOf('Layout/Main', module);

stories.addDecorator(WithDocsCustom(ReadMe));

stories.add('Component default', Main);
