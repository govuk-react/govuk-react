import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs/react';
import { WithDocsCustom } from '@govuk-react/storybook-components';

import TabbedNav from '.';
import ReadMe from '../README.md';

const stories = storiesOf('Navigation/TabbedNav', module);
const examples = storiesOf('Navigation/TabbedNav/Examples', module);

stories.addDecorator(WithDocsCustom(ReadMe));
stories.addDecorator(withKnobs);

stories.add('Component default', () => (
  <TabbedNav
    handleNavChange={this.handleNavChange}
    activeNavTab={this.state.activeNavTab}
    navItems={['Example tab 1', 'Example tab 2', 'Example tab 3']}
  />
));

