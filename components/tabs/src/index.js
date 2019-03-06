import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TEXT_COLOUR } from 'govuk-colours';
import { spacing, typography } from '@govuk-react/lib';

import Tab from './atoms/tab';
import TabList from './atoms/tab-list';
import TabPanel from './atoms/tab-panel';
import TabsTitle from './atoms/tabs-title';

const Tabs = styled('div')(
  typography.font({ size: 19 }),
  {
    color: TEXT_COLOUR,
    marginTop: spacing.responsive({ size: 1, property: 'margin', direction: 'top' }),
    marginBottom: spacing.responsive({ size: 6, property: 'margin', direction: 'bottom' }),
  },
  spacing.withWhiteSpace(),
);

/**
 *
 * ### Import
 * ```js
 * import Tabs, { Tab, TabList, TabPanel, TabsTitle } from '@govuk-react/tabs';
 * ```
 *
 * ##### Simple Example
 * ```js
 * class App extends Component {
 *   constructor() {
 *     super();
 *     this.state = { tabIndex: 0 };
 *     this.setTabIndex = this.setTabIndex.bind(this);
 *   }
 *
 *   setTabIndex(newTabIndex) {
 *     this.setState({
 *       tabIndex: newTabIndex,
 *     }));
 *   }
 *   // @babel/plugin-proposal-class-properties
 *   // state = { tabIndex: 0 };
 *
 *   // setTabIndex = newTabIndex => this.setState({
 *   //   tabIndex: newTabIndex,
 *   // });
 *
 *   render() {
 *     const { tabIndex } = this.state;
 *     return (
 *       <Tabs>
 *         <TabsTitle>Content</TabsTitle>
 *         <TabList>
 *           <Tab
 *             onClick={() => this.setTabIndex(0)}
 *             isActive={tabIndex === 0}
 *             href="#first-panel"
 *           >
 *             Title 1
 *           </Tab>
 *           <Tab
 *             onClick={() => this.setTabIndex(1)}
 *             isActive={tabIndex === 1}
 *             href="#second-panel"
 *           >
 *             Title 2
 *           </Tab>
 *         </TabList>
 *         <TabPanel isActive={tabIndex === 0} id="first-panel">TabPanel content 1</TabPanel>
 *         <TabPanel isActive={tabIndex === 1} id="second-panel" >TabPanel content 2</TabPanel>
 *       </Tabs>
 *     );
 *   }
 * }
 * ```
 *
 * ##### Hooks Example
 * ```js
 * const App = ({ defaultIndex}) => {
 *  const [tabIndex, setTabIndex] = React.useState(defaultIndex);
 *
 *  const handleTabChange = newTabIndex => setTabIndex(newTabIndex);
 *
 *  return (
 * <Tabs>
 *   <Tabs.TabsTitle>Content</Tabs.TabsTitle>
 *   <Tabs.TabList>
 *     {[
 *       {
 *         content: 'Title 1',
 *         href: '#first-panel',
 *       },
 *       {
 *         content: 'Title 2',
 *         href: '#second-panel',
 *       },
 *     ].map(({ content, href }, index) => (
 *       <Tabs.Tab
 *           onClick={() => this.setTabIndex(index)}
 *           isActive={tabIndex === index}
 *           href={href}
 *         >
 *           {content}
 *         </Tab>
 *       ))
 *     }
 *   </Tabs.TabList>
 *     {[
 *       {
 *         content: 'TabPanel content 1',
 *         id: 'first-panel',
 *       },
 *       {
 *         content: 'TabPanel content 2',
 *         id: 'second-panel',
 *       },
 *     ].map(({ content, id }, index) => (
 *       <Tabs.TabPanel
 *           isActive={tabIndex === index}
 *           id={id}
 *         >
 *           {content}
 *         </Tabs.TabPanel>
 *       ))
 *     }
 *    </Tabs>
 *  );
 * }
 *
 * ```
 *
 *
 * ### References:
 * - https://github.com/alphagov/govuk-frontend/tree/master/src/components/tabs
 * - https://design-system.service.gov.uk/components/tabs/
 *
 */
const DocumentedTabs = props => <Tabs {...props} />;

Tabs.propTypes = {
  children: PropTypes.node.isRequired,
};

Tabs.Tab = Tab;
Tabs.TabList = TabList;
Tabs.TabPanel = TabPanel;
Tabs.TabsTitle = TabsTitle;

export { DocumentedTabs };

export default Tabs;
