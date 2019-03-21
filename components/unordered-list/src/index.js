import React from 'react';
import PropTypes from 'prop-types';
import OrderedList from '@govuk-react/ordered-list';

/**
 *
 * ### Usage
 *
 * Simple
 * ```jsx
 * import UnorderedList from '@govuk-react/unordered-list';
 * import ListItem from '@govuk-react/list-item';
 *
 * <UnorderedList>
 *   <ListItem>Lorem ipsum dolor sit.</ListItem>
 *   <ListItem>Consectetur adipiscing elit.</ListItem>
 *   <ListItem>Curabitur et libero nec.</ListItem>
 * </UnorderedList>
 * ```
 *
 * with Roman
 * ```jsx
 * import UnorderedList from '@govuk-react/unordered-list';
 * import ListItem from '@govuk-react/list-item';
 *
 * <UnorderedList listStyleType="lower-roman">
 *   <ListItem>Lorem ipsum dolor sit.</ListItem>
 *   <ListItem>Consectetur adipiscing elit.</ListItem>
 *   <ListItem>Curabitur et libero nec.</ListItem>
 * </UnorderedList>
 * ```
 *
 * ### References
 * - https://design-system.service.gov.uk/styles/typography/#lists
 * - https://github.com/alphagov/govuk-frontend/blob/master/src/core/_lists.scss
 */

const UnorderedList = props => <OrderedList as="ul" {...props} />;

UnorderedList.defaultProps = {
  listStyleType: undefined,
};

UnorderedList.propTypes = {
  /** One or more ListItem components */
  children: PropTypes.node.isRequired,
  /** CSS value for `list-style-type`, or `bullet` or `number` to match govuk-frontend */
  listStyleType: PropTypes.string,
};

export default UnorderedList;
