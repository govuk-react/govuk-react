import * as React from 'react';
import { H2 } from '@govuk-react/heading';
import VisuallyHidden from '@govuk-react/visually-hidden';

import UnorderedList from '../../atoms/unordered-list';
import { ListItem } from '../../atoms/list-item';

const MetaLinks: React.FC<MetaLinksProps> = ({ children, heading }: MetaLinksProps) => {
  return (
    <>
      <VisuallyHidden>
        <H2>{heading}</H2>
      </VisuallyHidden>
      {children && (
        <UnorderedList inline>
          {Array.isArray(children) ? (
            React.Children.map(children, (child, i) => (child ? <ListItem inline>{child}</ListItem> : null))
          ) : (
            <ListItem inline>{children}</ListItem>
          )}
        </UnorderedList>
      )}
    </>
  );
};

interface MetaLinksProps {
  /**
   * Meta links
   */
  children: React.ReactNode;
  /**
   * Meta links heading (will be visually hidden)
   */
  heading: string;
}

export default MetaLinks;
