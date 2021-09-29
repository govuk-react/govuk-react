import React from 'react';

import { withKnobs, number } from '@storybook/addon-knobs';

import Tabs from '.';
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
  decorators: [withKnobs],
};

export const Default = () => <TableTabs />;

export const Simple = () => <SimpleTabs />;
export const SimpleWithMapFunction = () => <SimpleMapTabs />;
export const SimpleWithMapAndBabelSProposedClassPropertiesPlugin = () => <ProposedClassPropertiesPlugin />;
export const ComplexMappedTable = () => <TableTabs />;
export const Hooks = () => <HooksExample defaultIndex={number('defaultIndex', 1)} />;
export const UsingReactRouterClientSide = () => <ReactRouterExample />;
export const UsingReactRouterServerSideRenderingCompatible = () => <ReactRouterSSRExample />;
export const UsingReactRouterServerSideRenderingCompatibleSinglePanelOnly = () => <ReactRouterSSRSinglePanelExample />;
