/**
 * ### References:
 *
 * - https://github.com/alphagov/govuk-frontend/tree/main/src/govuk/components/tabs
 */

import * as React from 'react';
import styled from 'styled-components';
import { spacing, typography } from '@govuk-react/lib';

import List from './atoms/list';
import Panel from './atoms/panel';
import Tab from './atoms/tab';
import Title from './atoms/title';

const TabsContainer = styled('div')(
  typography.font({ size: 19 }),
  typography.textColour,
  spacing.responsiveMargin({ size: 1, direction: 'top' }),
  spacing.responsiveMargin({ size: 6, direction: 'bottom' }),
  spacing.withWhiteSpace()
);

/**
 * The tabs component lets users navigate between related sections of content, displaying one section at a time.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/tabs
 * - https://design-system.service.gov.uk/components/tabs/
 */
export const Tabs: TabsType = (props: TabsProps) => <TabsContainer {...props} />;

Tabs.displayName = 'Tabs';

export interface TabsType extends React.FC<TabsProps> {
  Tab: typeof Tab;
  List: typeof List;
  Panel: typeof Panel;
  Title: typeof Title;
}
export interface TabsProps {
  /** child components that will appear in the Tabs section */
  children: React.ReactNode;
}

Tabs.Tab = Tab;
Tabs.List = List;
Tabs.Panel = Panel;
Tabs.Title = Title;

export { Tab, List, Panel, Title };

export default Tabs;
