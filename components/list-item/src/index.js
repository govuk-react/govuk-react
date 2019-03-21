import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { SPACING_POINTS } from '@govuk-react/constants';
import { spacing, typography } from '@govuk-react/lib';

const ListItem = styled('li')(
  // including font definition here is belt & braces
  // govuk-frontend doesn't bother to do that
  typography.font({ size: 19 }),
  { marginBottom: SPACING_POINTS[1] },
  spacing.withWhiteSpace()
);

/**
 *
 * ### Usage
 *
 *
 * Simple
 * ```jsx
 * <ListItem>List item example</ListItem>
 * ```
 *
 * With a link
 * ```jsx
 * import { Link } from '@govuk-react/link';
 *
 * <ListItem>
 *   <Link href="https://www.google.com/">List item example</Link>
 * </ListItem>
 * ```
 *
 * ### References
 * - https://github.com/alphagov/govuk-frontend/blob/master/src/core/_lists.scss
 */

// Do the react-docgen dance
const DocumentedComponent = props => <ListItem {...props} />;

DocumentedComponent.propTypes = {
  /** List item content */
  children: PropTypes.node.isRequired,
};

ListItem.propTypes = DocumentedComponent.propTypes;

export { DocumentedComponent };
export default ListItem;
