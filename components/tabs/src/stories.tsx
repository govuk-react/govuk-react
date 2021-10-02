import type { Story } from '@storybook/react';

import * as React from 'react';

import { Tabs } from '.';
import {
  HooksExample,
  ProposedClassPropertiesPlugin,
  SimpleTabs,
  SimpleMapTabs,
  TableTabs,
  ReactRouterExample,
  ReactRouterSSRExample,
  ReactRouterSSRSinglePanelExample,
} from './fixtures';

export default {
  title: 'Navigation/Tabs',
  id: 'tabs',
  component: Tabs,
};

export const Default: Story = () => <TableTabs />;

export const Simple: Story = () => <SimpleTabs />;
export const SimpleWithMapFunction: Story = () => <SimpleMapTabs />;
export const SimpleWithMapAndBabelSProposedClassPropertiesPlugin: Story = () => <ProposedClassPropertiesPlugin />;
export const ComplexMappedTable: Story = () => <TableTabs />;
export const Hooks: Story = (args) => <HooksExample {...args} />;
Hooks.args = {
  defaultIndex: 1,
};
export const UsingReactRouterClientSide: Story = () => <ReactRouterExample />;
export const UsingReactRouterServerSideRenderingCompatible: Story = () => <ReactRouterSSRExample />;
export const UsingReactRouterServerSideRenderingCompatibleSinglePanelOnly: Story = () => (
  <ReactRouterSSRSinglePanelExample />
);
