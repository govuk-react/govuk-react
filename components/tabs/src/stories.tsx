import React from 'react';

import { number } from '@storybook/addon-knobs';

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
  component: Tabs,
};

export const Default: React.FC = () => <TableTabs />;

export const Simple: React.FC = () => <SimpleTabs />;
export const SimpleWithMapFunction: React.FC = () => <SimpleMapTabs />;
export const SimpleWithMapAndBabelSProposedClassPropertiesPlugin: React.FC = () => <ProposedClassPropertiesPlugin />;
export const ComplexMappedTable: React.FC = () => <TableTabs />;
export const Hooks: React.FC = () => <HooksExample defaultIndex={number('defaultIndex', 1)} />;
export const UsingReactRouterClientSide: React.FC = () => <ReactRouterExample />;
export const UsingReactRouterServerSideRenderingCompatible: React.FC = () => <ReactRouterSSRExample />;
export const UsingReactRouterServerSideRenderingCompatibleSinglePanelOnly: React.FC = () => (
  <ReactRouterSSRSinglePanelExample />
);
