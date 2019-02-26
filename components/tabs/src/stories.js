import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs/react';
import { WithDocsCustom } from '@govuk-react/storybook-components';

import { ProposedClassPropertiesPlugin, SimpleTabs, SimpleMapTabs, TableTabs } from './fixtures';
import ReadMe from '../README.md';

const stories = storiesOf('Tabs', module).add('Tabs', TableTabs);
const examples = storiesOf('Tabs/Examples', module);

stories.addDecorator(withKnobs);
stories.addDecorator(WithDocsCustom(ReadMe));

examples.addDecorator(WithDocsCustom(''));

stories.add('Component default', () => <TableTabs />);

examples.add('simple', () => <SimpleTabs />);
examples.add('simple with map function', () => <SimpleMapTabs />);

examples.add('simple with map and babel\'s proposed class properties plugin', () => <ProposedClassPropertiesPlugin />);

examples.add('complex mapped table', () => <TableTabs />);
