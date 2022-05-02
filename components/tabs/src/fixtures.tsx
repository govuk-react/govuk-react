/* eslint-disable max-classes-per-file */
import React, { Component } from 'react';
import { BREAKPOINTS } from '@govuk-react/constants';
import { H2, H4 } from '@govuk-react/heading';
import SectionBreak from '@govuk-react/section-break';
import Table from '@govuk-react/table';
import { MemoryRouter, Route, Link, Routes, useParams, useLocation } from 'react-router-dom';

import { Tabs } from '.';

const flip2dArray = (prev, next) => next.map((item, index) => [...(prev[index] || []), next[index]]);

function setTabIndex(tabIndex: number): void {
  return this.setState({
    tabIndex,
  });
}

function handleClick({ event: e, index }: { event: React.MouseEvent<HTMLAnchorElement>; index: number }): void {
  /* eslint-disable-next-line no-undef */
  const mql = window.matchMedia(`(min-width: ${BREAKPOINTS.TABLET})`);
  if (mql.matches) {
    e.preventDefault();
  }
  return this.setTabIndex(index);
}

const sharedDefaultProps = {
  defaultIndex: 0,
};

interface SharedProps {
  defaultIndex?: number;
}

const tableHead = (
  <Table.Row>
    <Table.CellHeader>Case manager</Table.CellHeader>
    <Table.CellHeader>Cases opened</Table.CellHeader>
    <Table.CellHeader>Cases closed</Table.CellHeader>
  </Table.Row>
);

const arrTabularTabs = [
  {
    title: 'Past day',
    arr: [
      [3, 1, 2],
      [0, 0, 0],
    ],
    id: 'past-day',
  },
  {
    title: 'Past week',
    arr: [
      [24, 16, 24],
      [18, 20, 27],
    ],
    id: 'past-week',
  },
  {
    title: 'Past month',
    arr: [
      [98, 122, 126],
      [95, 131, 142],
    ],
    id: 'past-month',
  },
  {
    title: 'Past year',
    arr: [
      [1380, 1129, 1539],
      [1472, 1083, 1265],
    ],
    id: 'past-year',
  },
];

class TableTabs extends Component<SharedProps, { tabIndex: number }> {
  static defaultProps = sharedDefaultProps;

  setTabIndex;

  handleClick;

  constructor(props: SharedProps) {
    super(props);
    this.state = { tabIndex: props.defaultIndex };
    this.setTabIndex = setTabIndex.bind(this);
    this.handleClick = handleClick.bind(this);
  }

  render(): JSX.Element {
    const { tabIndex } = this.state;
    return (
      <Tabs>
        <Tabs.Title>Contents</Tabs.Title>
        <Tabs.List>
          {arrTabularTabs.map(({ id, title }, index) => (
            <Tabs.Tab
              key={`${title}-tabHeader`}
              onClick={(event) => this.handleClick({ event, index })}
              href={`#${id}`}
              selected={tabIndex === index}
            >
              {title}
            </Tabs.Tab>
          ))}
        </Tabs.List>
        {arrTabularTabs.map(({ arr, id, title }, index) => (
          <Tabs.Panel selected={tabIndex === index} key={`${title}-tabPanel`} id={id}>
            <H2>{title}</H2>
            <Table head={tableHead}>
              {[['David Francis', 'Paul Farmer', 'Rita Patel'], ...arr].reduce(flip2dArray, []).map((innerArr) => (
                <Table.Row key={`${innerArr.join()}-col`}>
                  {innerArr.map((elem) => (
                    <Table.Cell key={`${elem}-row`}>{elem}</Table.Cell>
                  ))}
                </Table.Row>
              ))}
            </Table>
          </Tabs.Panel>
        ))}
      </Tabs>
    );
  }
}

/* eslint-disable-next-line react/no-multi-comp */
class SimpleTabs extends Component<SharedProps, { tabIndex: number }> {
  static defaultProps = sharedDefaultProps;

  setTabIndex;

  handleClick;

  constructor(props: SharedProps) {
    super(props);
    this.state = { tabIndex: props.defaultIndex };
    this.setTabIndex = setTabIndex.bind(this);
    this.handleClick = handleClick.bind(this);
  }

  render(): JSX.Element {
    const { tabIndex } = this.state;
    return (
      <Tabs>
        <Tabs.Title>Contents</Tabs.Title>
        <Tabs.List>
          <Tabs.Tab
            onClick={(event) => this.handleClick({ event, index: 0 })}
            selected={tabIndex === 0}
            href="#first-panel"
          >
            Title 1
          </Tabs.Tab>
          <Tabs.Tab
            onClick={(event) => this.handleClick({ event, index: 1 })}
            selected={tabIndex === 1}
            href="#second-panel"
          >
            Title 2
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel selected={tabIndex === 0} id="first-panel">
          Panel content 1
        </Tabs.Panel>
        <Tabs.Panel selected={tabIndex === 1} id="second-panel">
          Panel content 2
        </Tabs.Panel>
      </Tabs>
    );
  }
}

const arrSimpleMapped = [
  {
    contentListItem: 'Title 1',
    contentPanel: 'Mapped Panel content 1',
    id: 'first-panel',
  },
  {
    contentListItem: 'Title 2',
    contentPanel: 'Mapped Panel content 2',
    id: 'second-panel',
  },
];

/* eslint-disable-next-line react/no-multi-comp */
class SimpleMapTabs extends Component<SharedProps, { tabIndex: number }> {
  static defaultProps = sharedDefaultProps;

  setTabIndex;

  handleClick;

  constructor(props: SharedProps) {
    super(props);
    this.state = { tabIndex: props.defaultIndex };
    this.setTabIndex = setTabIndex.bind(this);
    this.handleClick = handleClick.bind(this);
  }

  render(): JSX.Element {
    const { tabIndex } = this.state;
    return (
      <Tabs>
        <Tabs.Title>Contents</Tabs.Title>
        <Tabs.List>
          {arrSimpleMapped.map(({ contentListItem, id }, index) => (
            <Tabs.Tab
              key={`${contentListItem}-simpleMappedListItem`}
              onClick={(event) => this.handleClick({ event, index })}
              selected={tabIndex === index}
              href={`#${id}`}
            >
              {contentListItem}
            </Tabs.Tab>
          ))}
        </Tabs.List>
        {arrSimpleMapped.map(({ contentPanel, id }, index) => (
          <Tabs.Panel key={`${contentPanel}-simpleMappedPanel`} selected={tabIndex === index} id={id}>
            <H4>{contentPanel}</H4>
          </Tabs.Panel>
        ))}
      </Tabs>
    );
  }
}

const arrProposedBabel = [
  {
    contentListItem: 'Title 1',
    contentPanel: 'Panel content 1',
    id: 'first-panel',
  },
  {
    contentListItem: 'Title 2',
    contentPanel: 'Panel content 2',
    id: 'second-panel',
  },
];

/* eslint-disable-next-line react/no-multi-comp */
class ProposedClassPropertiesPlugin extends Component<{ defaultIndex: number }, { tabIndex: number }> {
  static defaultProps = sharedDefaultProps;

  setTabIndex = setTabIndex;

  handleClick = handleClick;

  constructor(props: { defaultIndex: number }) {
    super(props);
    const { defaultIndex } = this.props;
    this.state = { tabIndex: defaultIndex };
  }

  render(): JSX.Element {
    const { tabIndex } = this.state;
    return (
      <Tabs>
        <Tabs.Title />
        <Tabs.List>
          {arrProposedBabel.map(({ contentListItem, id }, index) => (
            <Tabs.Tab
              key={`${contentListItem}-babelListItem`}
              onClick={(event) => this.handleClick({ event, index })}
              selected={tabIndex === index}
              href={`#${id}`}
            >
              {contentListItem}
            </Tabs.Tab>
          ))}
        </Tabs.List>
        {arrProposedBabel.map(({ contentPanel, id }, index) => (
          <Tabs.Panel key={`${contentPanel}-babelPanel`} selected={tabIndex === index} id={id}>
            <H2>with Babel Plugin</H2>
            <SectionBreak level="L" visible />
            {contentPanel}
          </Tabs.Panel>
        ))}
      </Tabs>
    );
  }
}

const HooksExample: React.FC<SharedProps> = ({ defaultIndex }: SharedProps) => {
  const [tabIndex, setHooksTabIndex] = React.useState(defaultIndex);

  const handleTabChange = (newTabIndex) => setHooksTabIndex(newTabIndex);

  function hooksHandleClick({ event: e, index }) {
    /* eslint-disable-next-line no-undef */
    const mql = window.matchMedia(`(min-width: ${BREAKPOINTS.TABLET})`);
    if (mql.matches) {
      e.preventDefault();
    }
    return handleTabChange(index);
  }

  return (
    <Tabs>
      <Tabs.Title>Content</Tabs.Title>
      <Tabs.List>
        {[
          {
            content: 'Hooks Title 1',
            href: '#first-panel',
          },
          {
            content: 'Hooks Title 2',
            href: '#second-panel',
          },
        ].map(({ content, href }, index) => (
          <Tabs.Tab
            key={href}
            onClick={(event) => hooksHandleClick({ event, index })}
            selected={tabIndex === index}
            href={href}
          >
            {content}
          </Tabs.Tab>
        ))}
      </Tabs.List>
      {[
        {
          content: 'Hooks Panel content 1',
          id: 'first-panel',
        },
        {
          content: 'Hooks Panel content 2',
          id: 'second-panel',
        },
      ].map(({ content, id }, index) => (
        <Tabs.Panel key={id} selected={tabIndex === index} id={id}>
          {content}
        </Tabs.Panel>
      ))}
    </Tabs>
  );
};

HooksExample.defaultProps = sharedDefaultProps;

// This example demonstrates one way to use tabs with react-router in a way
// that is compatible with server-side/universal rendering
// NB in this example react-router does not directly control what content/panel is rendered
// and on a mobile view the client will not jump to the content for the clicked title
const RouterTabs = () => {
  const { section } = useParams();
  return (
    <Tabs>
      <Tabs.Title />
      <Tabs.List>
        <Tabs.Tab as={Link} selected={!section} to="/">
          First tab
        </Tabs.Tab>
        <Tabs.Tab as={Link} selected={section === 'test'} to="/test">
          Second tab
        </Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel selected={!section}>First tab contents</Tabs.Panel>
      <Tabs.Panel selected={section === 'test'}>Second tab contents</Tabs.Panel>
    </Tabs>
  );
};

const ReactRouterExample: React.FC = () => (
  <MemoryRouter>
    <Routes>
      <Route path="/" element={<RouterTabs />} />
      <Route path="/:section" element={<RouterTabs />} />
    </Routes>
  </MemoryRouter>
);

// This example demonstrates another way to use tabs with react-router in a way
// that is compatible with server-side/universal rendering
// NB in this example react-router controls what content is rendered, and thus
// will only show a single panel, even when the screen is at a mobile width
const RouterTabsSinglePanel = () => {
  const { pathname } = useLocation();
  return (
    <Tabs>
      <Tabs.Title />
      <Tabs.List>
        <Tabs.Tab as={Link} selected={pathname !== '/test'} to="/">
          First tab
        </Tabs.Tab>
        <Tabs.Tab as={Link} selected={pathname === '/test'} to="/test">
          Second tab
        </Tabs.Tab>
      </Tabs.List>
      <Routes>
        <Route
          path="test"
          element={
            <Tabs.Panel id="test" selected>
              Second tab contents
            </Tabs.Panel>
          }
        />
        <Route
          path="/"
          element={
            <Tabs.Panel id="first" selected>
              First tab contents
            </Tabs.Panel>
          }
        />
      </Routes>
    </Tabs>
  );
};

const ReactRouterSinglePanelExample: React.FC = () => (
  <MemoryRouter>
    <RouterTabsSinglePanel />
  </MemoryRouter>
);

export {
  HooksExample,
  ProposedClassPropertiesPlugin,
  SimpleTabs,
  SimpleMapTabs,
  TableTabs,
  ReactRouterExample,
  ReactRouterSinglePanelExample,
};
