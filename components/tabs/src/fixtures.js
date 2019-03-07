import React, { Component } from 'react';
import { H2, H4 } from '@govuk-react/header';
import SectionBreak from '@govuk-react/section-break';
import Table from '@govuk-react/table';

import Tabs from '.';

const arrTabularTabs = [
  {
    title: 'Past day',
    arr: [[3, 1, 2], [0, 0, 0]],
    id: 'past-day',
  },
  {
    title: 'Past week',
    arr: [[24, 16, 24], [18, 20, 27]],
    id: 'past-week',
  },
  {
    title: 'Past month',
    arr: [[98, 122, 126], [95, 131, 142]],
    id: 'past-month',
  },
  {
    title: 'Past year',
    arr: [[1380, 1129, 1539], [1472, 1083, 1265]],
    id: 'past-year',
  },
];

const flip2dArray = (prev, next) =>
  next.map((item, i) => [...(prev[i] || []), next[i]]);

const tableHead = (
  <Table.Row>
    <Table.CellHeader>Case manager</Table.CellHeader>
    <Table.CellHeader>Cases opened</Table.CellHeader>
    <Table.CellHeader>Cases closed</Table.CellHeader>
  </Table.Row>
);
class TableTabs extends Component {
  state = {
    tabIndex: 0,
  }

  setTabIndex = tabIndex => this.setState({
    tabIndex,
  })

  render() {
    const { tabIndex } = this.state;
    return (
      <Tabs>
        <Tabs.TabsTitle>Contents</Tabs.TabsTitle>
        <Tabs.TabList>
          {arrTabularTabs.map(({ id, title }, index) => (
            <Tabs.Tab
              key={`${title}-tabHeader`}
              onClick={() => this.setTabIndex(index)}
              href={`#${id}`}
              selected={tabIndex === index}
            >
              {title}
            </Tabs.Tab>
          ))}
        </Tabs.TabList>
        {arrTabularTabs.map(({ arr, id, title }, index) => (
          <Tabs.TabPanel selected={tabIndex === index} key={`${title}-tabPanel`} id={id}>
            <H2>{title}</H2>
            <Table
              head={tableHead}
            >
              {[['David Francis', 'Paul Farmer', 'Rita Patel'], ...arr]
                .reduce(flip2dArray, [])
                .map(innerArr => (
                  <Table.Row key={`${innerArr.join()}-col`}>
                    {innerArr.map(elem => (
                      <Table.Cell key={`${elem}-row`}>{elem}</Table.Cell>
                    ))}
                  </Table.Row>
                ))}
            </Table>
          </Tabs.TabPanel>
        ))}
      </Tabs>
    );
  }
}

/* eslint-disable-next-line react/no-multi-comp */
class SimpleTabs extends Component {
  constructor() {
    super();
    this.state = { tabIndex: 0 };
    this.setTabIndex = this.setTabIndex.bind(this);
  }

  setTabIndex(tabIndex) {
    this.setState({
      tabIndex,
    });
  }

  render() {
    const { tabIndex } = this.state;
    return (
      <Tabs>
        <Tabs.TabsTitle>Contents</Tabs.TabsTitle>
        <Tabs.TabList>
          <Tabs.Tab
            onClick={() => this.setTabIndex(0)}
            selected={tabIndex === 0}
            href="#first-panel"
          >
            Title 1
          </Tabs.Tab>
          <Tabs.Tab
            onClick={() => this.setTabIndex(1)}
            selected={tabIndex === 1}
            href="#second-panel"
          >
            Title 2
          </Tabs.Tab>
        </Tabs.TabList>
        <Tabs.TabPanel selected={tabIndex === 0} id="first-panel">TabPanel content 1</Tabs.TabPanel>
        <Tabs.TabPanel selected={tabIndex === 1} id="second-panel" >TabPanel content 2</Tabs.TabPanel>
      </Tabs>
    );
  }
}

/* eslint-disable-next-line react/no-multi-comp */
class SimpleMapTabs extends Component {
  constructor() {
    super();
    this.state = { tabIndex: 0 };
    this.setTabIndex = this.setTabIndex.bind(this);
  }

  setTabIndex(tabIndex) {
    this.setState({
      tabIndex,
    });
  }

  render() {
    const { tabIndex } = this.state;
    return (
      <Tabs>
        <Tabs.TabsTitle>Contents</Tabs.TabsTitle>
        <Tabs.TabList>
          {[
            {
              content: 'Title 1',
              href: '#first-panel',
            },
            {
              content: 'Title 2',
              href: '#second-panel',
            },
          ].map(({ content, href }, index) => (
            <Tabs.Tab
              onClick={() => this.setTabIndex(index)}
              selected={tabIndex === index}
              href={href}
            >
              {content}
            </Tabs.Tab>
            ))
          }
        </Tabs.TabList>
        {[
            {
              content: 'Mapped TabPanel content 1',
              id: 'first-panel',
            },
            {
              content: 'Mapped TabPanel content 2',
              id: 'second-panel',
            },
          ].map(({ content, id }, index) => (
            <Tabs.TabPanel
              selected={tabIndex === index}
              id={id}
            >
              <H4>{content}</H4>
            </Tabs.TabPanel>
            ))
          }
      </Tabs>
    );
  }
}

/* eslint-disable-next-line react/no-multi-comp */
class ProposedClassPropertiesPlugin extends Component {
  state = { tabIndex: 0 };

  setTabIndex = tabIndex => this.setState({
    tabIndex,
  });

  render() {
    const { tabIndex } = this.state;
    return (
      <Tabs>
        <Tabs.TabsTitle>Contents</Tabs.TabsTitle>
        <Tabs.TabList>
          {[
            {
              content: 'Title 1',
              href: '#first-panel',
            },
            {
              content: 'Title 2',
              href: '#second-panel',
            },
          ].map(({ content, href }, index) => (
            <Tabs.Tab
              onClick={() => this.setTabIndex(index)}
              selected={tabIndex === index}
              href={href}
            >
              {content}
            </Tabs.Tab>
            ))
          }
        </Tabs.TabList>
        {[
            {
              content: 'TabPanel content 1',
              id: 'first-panel',
            },
            {
              content: 'TabPanel content 2',
              id: 'second-panel',
            },
          ].map(({ content, id }, index) => (
            <Tabs.TabPanel
              selected={tabIndex === index}
              id={id}
            >
              <H2>with Babel Plugin</H2>
              <SectionBreak level="L" visible />
              {content}
            </Tabs.TabPanel>
            ))
          }
      </Tabs>
    );
  }
}

export { ProposedClassPropertiesPlugin, SimpleTabs, SimpleMapTabs, TableTabs };
