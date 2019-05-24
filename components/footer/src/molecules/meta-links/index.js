import React from 'react';
import PropTypes from 'prop-types';
import { H2 } from '@govuk-react/heading';
import VisuallyHidden from '@govuk-react/visually-hidden';

import UnorderedList from '../../atoms/unordered-list';
import ListItem from '../../atoms/list-item';

const MetaLinks = ({ children, heading }) => {
  return (
    <React.Fragment>
      <VisuallyHidden>
        <H2>{heading}</H2>
      </VisuallyHidden>
      {children && (
        <UnorderedList inline>
          {children.length && children.map ? (
            children.map((child, i) =>
              child && (child.length || child.props) ? (
                <ListItem key={child.key || i} inline>
                  {child}
                </ListItem>
              ) : null
            )
          ) : (
            <ListItem inline>{children}</ListItem>
          )}
        </UnorderedList>
      )}
    </React.Fragment>
  );
};

MetaLinks.propTypes = {
  /**
   * Meta links
   */
  children: PropTypes.node.isRequired,
  /**
   * Meta links heading (will be visually hidden)
   */
  heading: PropTypes.string.isRequired,
};

export default MetaLinks;
