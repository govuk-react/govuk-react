import * as React from 'react';

import { Panel } from '.';

export default {
  title: 'Page & Layout/Panel',
  component: Panel,
};

export const Default: React.FC = () => <Panel title="Application complete" />;

export const PanelWithHeaderAndHtmlBody: React.FC = () => (
  <Panel title="Application complete">
    Your reference number
    <br />
    <strong>HDJ2123F</strong>
  </Panel>
);
