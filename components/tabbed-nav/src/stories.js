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

const props = {
  handleNavChange: () => { },
  activeNavTab: 'Example tab 1',
  navItems: ['Example tab 1', 'Example tab 2'],
};

const childComponentOne = () => (
  <div>
    First child component
  </div>
);

const childComponentTwo = () => (
  <div>
    Second child component
  </div>
);

stories.add('Component default', () => (
  <TabbedNav {...props}>
    {props.activeNavTab === 'Example tab 1' ?
      <childComponentOne />
      :
      <childComponentTwo />
    }
  </TabbedNav>
));

