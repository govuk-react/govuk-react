import Tab from './Tab';
import TabList from './TabList';
import TabPanel from './TabPanel';
import TabsContainer from './TabsContainer';
import TabsTitle from './TabsTitle';

/**
 *
 * ### Import
 * ```js
 * import { Tab, TabList, TabPanel, Tabs } from '@govuk-react/tabs';
 * ```
 *
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
 *
 * ### References:
 * - https://github.com/alphagov/govuk-frontend/tree/master/src/components/tabs
 * - https://design-system.service.gov.uk/components/tabs/
 *
 */

export default { Tab, TabList, TabPanel, TabsContainer, TabsTitle };
