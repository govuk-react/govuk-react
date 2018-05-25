import React from 'react';
import { storiesOf } from '@storybook/react';
import Panel from '.';

const stories = storiesOf('Components/Panel', module);

stories.add('Panel with header only', () => (
  <Panel panelTitle="Application complete" />
));

stories.add('Panel with header and HTML body', () => (
  <Panel
    panelTitle="Application complete"
    panelBody={['Your reference number', <br />, <strong>HDJ2123F</strong>]}
  />
));
