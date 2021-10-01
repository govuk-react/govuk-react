import * as React from 'react';

import Section from '../../atoms/section';
import SectionHeading from '../../atoms/section-heading';
import UnorderedList from '../../atoms/unordered-list';
import { ListItem } from '../../atoms/list-item';

const NavigationLinks: React.FC<NavigationLinksProps> = ({ heading, listColumns, children }: NavigationLinksProps) => {
  return (
    <Section>
      <SectionHeading size="MEDIUM">{heading}</SectionHeading>
      {children && (
        <UnorderedList columns={listColumns}>
          {Array.isArray(children) ? (
            React.Children.map(children, (child, i) => (child ? <ListItem>{child}</ListItem> : null))
          ) : (
            <ListItem>{children}</ListItem>
          )}
        </UnorderedList>
      )}
    </Section>
  );
};

interface NavigationLinksProps {
  /**
   * Navigation heading
   */
  heading: string;
  /**
   * Number of columns the links will split into
   */
  listColumns?: number;
  /**
   * Navigation links
   */
  children: React.ReactNode;
}

NavigationLinks.defaultProps = {
  listColumns: 0,
};

export default NavigationLinks;
