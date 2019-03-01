import React, { Component } from 'react';
import { H2, H4 } from '@govuk-react/header';
import SectionBreak from '@govuk-react/section-break';
import Table from '@govuk-react/table';

import Tabs from '.';

const arrTitles = ['Past day', 'Past week', 'Past month', 'Past year'];

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
      <Tabs.TabsContainer>
        <Tabs.TabsTitle>Content</Tabs.TabsTitle>
        <Tabs.TabList>
          {arrTitles.map((label, index) => (
            <Tabs.Tab
              key={`${label}-tabHeader`}
              onClick={() => this.setTabIndex(index)}
              isActive={tabIndex === index}
            >
              {label}
            </Tabs.Tab>
          ))}
        </Tabs.TabList>
        {[
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
        ].map(({ arr, id, title }, index) => (
          <Tabs.TabPanel isActive={tabIndex === index} key={`${title}-tabPanel`} id={id}>
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
      </Tabs.TabsContainer>
    );
  }
}

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
      <Tabs.TabsContainer>
        <Tabs.TabList>
          <Tabs.Tab
            onClick={() => this.setTabIndex(0)}
            isActive={tabIndex === 0}
            href="#first-panel"
          >
            Title 1
          </Tabs.Tab>
          <Tabs.Tab
            onClick={() => this.setTabIndex(1)}
            isActive={tabIndex === 1}
            href="#second-panel"
          >
            Title 2
          </Tabs.Tab>
        </Tabs.TabList>
        <Tabs.TabPanel isActive={tabIndex === 0} id="first-panel">TabPanel content 1</Tabs.TabPanel>
        <Tabs.TabPanel isActive={tabIndex === 1} id="second-panel" >TabPanel content 2</Tabs.TabPanel>
      </Tabs.TabsContainer>
    );
  }
}

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
      <Tabs.TabsContainer>
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
              isActive={tabIndex === index}
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
              isActive={tabIndex === index}
              id={id}
            >
              <H4>{content}</H4>
            </Tabs.TabPanel>
            ))
          }
      </Tabs.TabsContainer>
    );
  }
}

class ProposedClassPropertiesPlugin extends Component {
  state = { tabIndex: 0 };

  setTabIndex = tabIndex => this.setState({
    tabIndex,
  });

  render() {
    const { tabIndex } = this.state;
    return (
      <Tabs.TabsContainer>
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
              isActive={tabIndex === index}
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
              isActive={tabIndex === index}
              id={id}
            >
              <H2>with Babel Plugin</H2>
              <SectionBreak level="L" visible />
              {content}
            </Tabs.TabPanel>
            ))
          }
      </Tabs.TabsContainer>
    );
  }
}

export { ProposedClassPropertiesPlugin, SimpleTabs, SimpleMapTabs, TableTabs };
