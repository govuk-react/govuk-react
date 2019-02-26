import React, { Component } from 'react';
import { H2 } from '@govuk-react/header';
import Table from '@govuk-react/table';

import Tabs from '.';

const { Tab, TabList, TabPanel, TabsContainer, TabsTitle } = Tabs;

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


  setTabIndex = newTabIndex => this.setState({
    tabIndex: newTabIndex,
  })

  render() {
    const { tabIndex } = this.state;
    return (
      <TabsContainer>
        <TabsTitle>Content</TabsTitle>
        <TabList>
          {arrTitles.map((label, index) => (
            <Tab
              key={`${label}-tabHeader`}
              onClick={() => this.setTabIndex(index)}
              isActive={tabIndex === index}
            >
              {label}
            </Tab>
          ))}
        </TabList>
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
          <TabPanel isActive={tabIndex === index} key={`${title}-tabPanel`} id={id}>
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
          </TabPanel>
        ))}
      </TabsContainer>
    );
  }
}

class SimpleTabs extends Component {
  constructor() {
    super();
    this.state = { tabIndex: 0 };
    this.setTabIndex = this.setTabIndex.bind(this);
  }

  setTabIndex(newTabIndex) {
    this.setState({
      tabIndex: newTabIndex,
    });
  }

  render() {
    const { tabIndex } = this.state;
    return (
      <TabsContainer>
        <TabList>
          <Tab
            onClick={() => this.setTabIndex(0)}
            isActive={tabIndex === 0}
            href="#first-panel"
          >
            Title 1
          </Tab>
          <Tab
            onClick={() => this.setTabIndex(1)}
            isActive={tabIndex === 1}
            href="#second-panel"
          >
            Title 2
          </Tab>
        </TabList>
        <TabPanel isActive={tabIndex === 0} id="first-panel">TabPanel content 1</TabPanel>
        <TabPanel isActive={tabIndex === 1} id="second-panel" >TabPanel content 2</TabPanel>
      </TabsContainer>
    );
  }
}

class SimpleMapTabs extends Component {
  constructor() {
    super();
    this.state = { tabIndex: 0 };
    this.setTabIndex = this.setTabIndex.bind(this);
  }

  setTabIndex(newTabIndex) {
    this.setState({
      tabIndex: newTabIndex,
    });
  }

  render() {
    const { tabIndex } = this.state;
    return (
      <TabsContainer>
        <TabList>
          {[
            {
              content: 'Title 1',
              href: '#first-panel'
            },
            {
              content: 'Title 2',
              href: '#second-panel'
            },
          ].map(({ content, href }, index) => (
              <Tab
                onClick={() => this.setTabIndex(index)}
                isActive={tabIndex === index}
                href={href}
              >
                {content}
              </Tab>
            ))
          }
        </TabList>
        {[
            {
              content: 'TabPanel content 1',
              id: 'first-panel'
            },
            {
              content: 'TabPanel content 2',
              id: 'second-panel'
            },
          ].map(({ content, id }, index) => (
              <TabPanel
                isActive={tabIndex === index}
                id={id}
              >
                {content}
              </TabPanel>
            ))
          }
        </TabsContainer>
    );
  }
}

class ProposedClassPropertiesPlugin extends Component {
  state = { tabIndex: 0 };
  
  setTabIndex = newTabIndex => this.setState({
    tabIndex: newTabIndex,
  });

  render() {
    const { tabIndex } = this.state;
    return (
      <Tabs>
        <TabList>
          {[
            {
              content: 'Title 1',
              href: '#first-panel'
            },
            {
              content: 'Title 2',
              href: '#second-panel'
            },
          ].map(({ content, href }, index) => (
              <Tab
                onClick={() => this.setTabIndex(index)}
                isActive={tabIndex === index}
                href={href}
              >
                {content}
              </Tab>
            ))
          }
        </TabList>
        {[
            {
              content: 'TabPanel content 1',
              id: 'first-panel'
            },
            {
              content: 'TabPanel content 2',
              id: 'second-panel'
            },
          ].map(({ content, id }, index) => (
              <TabPanel
                isActive={tabIndex === index}
                id={id}
              >
                {content}
              </TabPanel>
            ))
          }
        </Tabs>
    );
  }
}

export { ProposedClassPropertiesPlugin, SimpleTabs, SimpleMapTabs, TableTabs };
