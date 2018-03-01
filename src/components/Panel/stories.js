import React from 'react';
import { storiesOf } from '@storybook/react';
import Panel from '.';

storiesOf('Panel', module).add('Panel with header only', () => (
  <Panel panelTitle="Application complete" />
));

storiesOf('Panel', module).add('Panel with header and HTML body', () => (
  <Panel
    panelTitle="Application complete"
    panelBody={['Your reference number', <br />, <strong>HDJ2123F</strong>]}
  />
));
