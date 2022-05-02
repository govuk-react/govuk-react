import type { Story } from '@storybook/react';

import * as React from 'react';
import { Table, H2 } from 'govuk-react';

import { Tabs } from '.';
import {
  HooksExample,
  ProposedClassPropertiesPlugin,
  SimpleTabs,
  SimpleMapTabs,
  TableTabs,
  ReactRouterExample,
  ReactRouterSinglePanelExample,
} from './fixtures';

export default {
  title: 'Navigation/Tabs',
  id: 'tabs',
  component: Tabs,
};

export const Default: Story = (args) => (
  <Tabs {...args}>
    <Tabs.Title>Contents</Tabs.Title>
    <Tabs.List>
      <Tabs.Tab href="#0" selected>
        Past day
      </Tabs.Tab>
      <Tabs.Tab href="#1">Past week</Tabs.Tab>
      <Tabs.Tab href="#2">Past month</Tabs.Tab>
      <Tabs.Tab href="#3">Past year</Tabs.Tab>
    </Tabs.List>
    <Tabs.Panel selected id="0">
      <H2>Past day</H2>
      <Table
        head={
          <Table.Row>
            <Table.CellHeader>Case manager</Table.CellHeader>
            <Table.CellHeader>Cases opened</Table.CellHeader>
            <Table.CellHeader>Cases closed</Table.CellHeader>
          </Table.Row>
        }
      >
        <Table.Row>
          <Table.Cell>David Francis</Table.Cell>
          <Table.Cell>3</Table.Cell>
          <Table.Cell>0</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Paul Farmer</Table.Cell>
          <Table.Cell>1</Table.Cell>
          <Table.Cell>0</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Rita Patel</Table.Cell>
          <Table.Cell>2</Table.Cell>
          <Table.Cell>0</Table.Cell>
        </Table.Row>
      </Table>
    </Tabs.Panel>
    <Tabs.Panel id="1">
      <H2>Past week</H2>
      <Table
        head={
          <Table.Row>
            <Table.CellHeader>Case manager</Table.CellHeader>
            <Table.CellHeader>Cases opened</Table.CellHeader>
            <Table.CellHeader>Cases closed</Table.CellHeader>
          </Table.Row>
        }
      >
        <Table.Row>
          <Table.Cell>David Francis</Table.Cell>
          <Table.Cell>24</Table.Cell>
          <Table.Cell>18</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Paul Farmer</Table.Cell>
          <Table.Cell>16</Table.Cell>
          <Table.Cell>20</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Rita Patel</Table.Cell>
          <Table.Cell>24</Table.Cell>
          <Table.Cell>27</Table.Cell>
        </Table.Row>
      </Table>
    </Tabs.Panel>
    <Tabs.Panel id="1">
      <H2>Past month</H2>
      <Table
        head={
          <Table.Row>
            <Table.CellHeader>Case manager</Table.CellHeader>
            <Table.CellHeader>Cases opened</Table.CellHeader>
            <Table.CellHeader>Cases closed</Table.CellHeader>
          </Table.Row>
        }
      >
        <Table.Row>
          <Table.Cell>David Francis</Table.Cell>
          <Table.Cell>98</Table.Cell>
          <Table.Cell>95</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Paul Farmer</Table.Cell>
          <Table.Cell>122</Table.Cell>
          <Table.Cell>133</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Rita Patel</Table.Cell>
          <Table.Cell>126</Table.Cell>
          <Table.Cell>142</Table.Cell>
        </Table.Row>
      </Table>
    </Tabs.Panel>
    <Tabs.Panel id="1">
      <H2>Past year</H2>
      <Table
        head={
          <Table.Row>
            <Table.CellHeader>Case manager</Table.CellHeader>
            <Table.CellHeader>Cases opened</Table.CellHeader>
            <Table.CellHeader>Cases closed</Table.CellHeader>
          </Table.Row>
        }
      >
        <Table.Row>
          <Table.Cell>David Francis</Table.Cell>
          <Table.Cell>1380</Table.Cell>
          <Table.Cell>1472</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Paul Farmer</Table.Cell>
          <Table.Cell>1129</Table.Cell>
          <Table.Cell>1083</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Rita Patel</Table.Cell>
          <Table.Cell>1539</Table.Cell>
          <Table.Cell>1265</Table.Cell>
        </Table.Row>
      </Table>
    </Tabs.Panel>
  </Tabs>
);

export const Simple: Story = () => <SimpleTabs />;
export const SimpleWithMapFunction: Story = () => <SimpleMapTabs />;
export const SimpleWithMapAndBabelSProposedClassPropertiesPlugin: Story = () => <ProposedClassPropertiesPlugin />;
export const ComplexMappedTable: Story = () => <TableTabs />;
export const Hooks: Story = (args) => <HooksExample {...args} />;
Hooks.args = {
  defaultIndex: 1,
};
export const UsingReactRouter: Story = () => <ReactRouterExample />;
export const UsingReactRouterSinglePanelOnly: Story = () => <ReactRouterSinglePanelExample />;
