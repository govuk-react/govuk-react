/* eslint-disable max-classes-per-file */
import React, { Component, useLayoutEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { BREAKPOINTS } from '@govuk-react/constants';
import { H2, H4 } from '@govuk-react/heading';
import SectionBreak from '@govuk-react/section-break';
import Table from '@govuk-react/table';
import { MemoryRouter, Route, Link } from 'react-router-dom';
import { useMedia } from 'react-use-media';

import Tabs from '.';

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

const sharedPropTypes = {
  defaultIndex: PropTypes.number,
};

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

class TableTabs extends Component<Record<string, never>, { tabIndex: number }> {
  static defaultProps = sharedDefaultProps;

  static propTypes = sharedPropTypes;

  setTabIndex;

  handleClick;

  constructor(props: Record<string, never>) {
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
class SimpleTabs extends Component<Record<string, never>, { tabIndex: number }> {
  static defaultProps = sharedDefaultProps;

  static propTypes = sharedPropTypes;

  setTabIndex;

  handleClick;

  constructor(props: Record<string, never>) {
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
class SimpleMapTabs extends Component<Record<string, never>, { tabIndex: number }> {
  static defaultProps = sharedDefaultProps;

  static propTypes = sharedPropTypes;

  setTabIndex;

  handleClick;

  constructor(props: Record<string, never>) {
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

  static propTypes = sharedPropTypes;

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

const HooksExample: React.FC<{ defaultIndex: number }> = ({ defaultIndex }) => {
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

HooksExample.propTypes = sharedPropTypes;

// This example demonstrates one way to use react-router with tabs.
// The use of useMedia means it is not suitable for server-side rendering.
// When in mobile mode, all panels will be shown but the route will
// still be updated to match the last clicked tab title.
// NB in this example react-router is in control over which panel is rendered
const RouterTabs = ({
  // eslint-disable-next-line react/prop-types
  match: {
    // eslint-disable-next-line react/prop-types
    params: { section },
  },
}) => {
  const isTablet = useMedia(`(min-width: ${BREAKPOINTS.TABLET})`);
  const [prevSection, setPrevSection] = useState(undefined);

  useLayoutEffect(() => {
    // scroll to the chosen tab if it's changed
    if (section !== prevSection && !isTablet) {
      // eslint-disable-next-line no-undef
      document.querySelector(`#${section || 'first'}`).scrollIntoView();
    }
    setPrevSection(section);
  }, [section, isTablet, prevSection]);

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
      <Route
        path={isTablet ? '/' : null}
        exact={isTablet}
        render={() => (
          <Tabs.Panel id="first" selected>
            First tab contents
          </Tabs.Panel>
        )}
      />
      <Route
        path={isTablet ? '/test' : null}
        render={() => (
          <Tabs.Panel id="test" selected>
            Second tab contents
          </Tabs.Panel>
        )}
      />
    </Tabs>
  );
};

const ReactRouterExample: React.FC = () => (
  <MemoryRouter>
    <div>
      <Route path="/:section?" component={RouterTabs} />
    </div>
  </MemoryRouter>
);

// This example demonstrates one way to use tabs with react-router in a way
// that is compatible with server-side/universal rendering
// NB in this example react-router does not directly control what content/panel is rendered
// and on a mobile view the client will not jump to the content for the clicked title
const RouterTabsSSR = ({
  // eslint-disable-next-line react/prop-types
  match: {
    // eslint-disable-next-line react/prop-types
    params: { section },
  },
}) => (
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

const ReactRouterSSRExample: React.FC = () => (
  <MemoryRouter>
    <div>
      <Route path="/:section?" component={RouterTabsSSR} />
    </div>
  </MemoryRouter>
);

// This example demonstrates another way to use tabs with react-router in a way
// that is compatible with server-side/universal rendering
// NB in this example react-router controls what content is rendered, and thus
// will only show a single panel, even when the screen is at a mobile width
const RouterTabsSSRSinglePanel = ({
  // eslint-disable-next-line react/prop-types
  match: {
    // eslint-disable-next-line react/prop-types
    params: { section },
  },
}) => (
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
    <Route
      path="/"
      exact
      render={() => (
        <Tabs.Panel id="first" selected>
          First tab contents
        </Tabs.Panel>
      )}
    />
    <Route
      path="/test"
      render={() => (
        <Tabs.Panel id="test" selected>
          Second tab contents
        </Tabs.Panel>
      )}
    />
  </Tabs>
);

const ReactRouterSSRSinglePanelExample: React.FC = () => (
  <MemoryRouter>
    <div>
      <Route path="/:section?" component={RouterTabsSSRSinglePanel} />
    </div>
  </MemoryRouter>
);

export {
  HooksExample,
  ProposedClassPropertiesPlugin,
  SimpleTabs,
  SimpleMapTabs,
  TableTabs,
  ReactRouterExample,
  ReactRouterSSRExample,
  ReactRouterSSRSinglePanelExample,
};
