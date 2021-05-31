import React from 'react';
import PropTypes from 'prop-types';

import Section from '../../atoms/section';
import SectionHeading from '../../atoms/section-heading';
import UnorderedList from '../../atoms/unordered-list';
import ListItem from '../../atoms/list-item';

const NavigationLinks = ({ heading, listColumns, children }) => {
  return (
    <Section>
      <SectionHeading size="MEDIUM">{heading}</SectionHeading>
      {children && (
        <UnorderedList columns={listColumns}>
          {children.length && children.map ? (
            children.map((child, i) =>
              child && (child.length || child.props) ? <ListItem key={child.key || i}>{child}</ListItem> : null
            )
          ) : (
            <ListItem>{children}</ListItem>
          )}
        </UnorderedList>
      )}
    </Section>
  );
};

NavigationLinks.propTypes = {
  /**
   * Navigation heading
   */
  heading: PropTypes.string.isRequired,
  /**
   * Number of columns the links will split into
   */
  listColumns: PropTypes.number,
  /**
   * Navigation links
   */
  children: PropTypes.node.isRequired,
};

NavigationLinks.defaultProps = {
  listColumns: 0,
};

export default NavigationLinks;
