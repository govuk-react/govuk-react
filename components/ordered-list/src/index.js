import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MEDIA_QUERIES, SPACING_POINTS } from '@govuk-react/constants';
import { spacing, typography } from '@govuk-react/lib';
import ListItem from '@govuk-react/list-item';

function translateType(type) {
  return { bullet: 'disc', number: 'decimal' }[type] || type;
}

const OrderedList = styled('ol')(
  typography.font({ size: 19 }),
  typography.textColour,
  {
    marginTop: 0,

    '& &': {
      marginTop: SPACING_POINTS[2],
    },
  },
  spacing.withWhiteSpace({ margin: { size: 4, direction: 'bottom' } }),
  ({ listStyleType }) => {
    const type = translateType(listStyleType);

    return [
      { listStyleType: type },
      type === 'none'
        ? {
            paddingLeft: 0,
          }
        : {
            paddingLeft: SPACING_POINTS[4],
          },
      // TODO consider whether these spacing adjusts should be for all non-`none` styles
      // NB the inclusion of these ensures that withWhiteSpace's mb prop doesn't work on ListItem
      ['disc', 'decimal'].includes(type)
        ? {
            [`> ${ListItem}`]: {
              marginBottom: 0,
              [MEDIA_QUERIES.TABLET]: {
                marginBottom: SPACING_POINTS[1],
              },
            },
          }
        : {
            // Style when not disc/decimal
            [`> ${ListItem}`]: {
              marginBottom: SPACING_POINTS[1],
            },
          },
    ];
  }
);

/**
 *
 * ### Usage
 *
 * Simple
 * ```jsx
 * import OrderedList from '@govuk-react/ordered-list';
 * import ListItem from '@govuk-react/list-item';
 *
 * <OrderedList>
 *   <ListItem>Lorem ipsum dolor sit.</ListItem>
 *   <ListItem>Consectetur adipiscing elit.</ListItem>
 *   <ListItem>Curabitur et libero nec.</ListItem>
 * </OrderedList>
 * ```
 *
 * with Roman
 * ```jsx
 * import OrderedList from '@govuk-react/ordered-list';
 * import ListItem from '@govuk-react/list-item';
 *
 * <OrderedList listStyleType="lower-roman">
 *   <ListItem>Lorem ipsum dolor sit.</ListItem>
 *   <ListItem>Consectetur adipiscing elit.</ListItem>
 *   <ListItem>Curabitur et libero nec.</ListItem>
 * </OrderedList>
 * ```
 *
 * ### References
 * - https://design-system.service.gov.uk/styles/typography/#lists
 * - https://github.com/alphagov/govuk-frontend/blob/master/src/core/_lists.scss
 *
 * ### TODO
 * - Consider using the context API https://github.com/reactjs/rfcs/blob/master/text/0002-new-version-of-context.md
 */
// Create a component wrapper for react-docgen only
const DocumentedComponent = props => <OrderedList {...props} />;

DocumentedComponent.defaultProps = {
  listStyleType: undefined,
};

DocumentedComponent.propTypes = {
  /** One or more ListItem components */
  children: PropTypes.node.isRequired,
  /** CSS value for `list-style-type`, or `bullet` or `number` to match govuk-frontend */
  listStyleType: PropTypes.string,
};

OrderedList.defaultProps = DocumentedComponent.defaultProps;
OrderedList.propTypes = DocumentedComponent.propTypes;

// Named export so react-docgen will generate docs
export { DocumentedComponent };
// Export un-wrapped styled component
export default OrderedList;
