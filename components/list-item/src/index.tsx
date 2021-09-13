import React from 'react';
import styled from 'styled-components';
import { SPACING_POINTS } from '@govuk-react/constants';
import { spacing, typography } from '@govuk-react/lib';

const ListItem: React.FC<ListItemProps> = styled('li')(
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
 *
 * ```jsx
 * import { ListItem } from 'govuk-react'
 *
 * <ListItem>List item example</ListItem>
 * ```
 *
 * With a link
 *
 * ```jsx
 * import { ListItem, Link } from 'govuk-react';
 *
 * <ListItem>
 *   <Link href="https://www.google.com/">List item example</Link>
 * </ListItem>
 * ```
 *
 * ### References
 * - https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/core/_lists.scss
 */

// Do the react-docgen dance
const DocumentedComponent: React.FC<ListItemProps> = (props: ListItemProps) => <ListItem {...props} />;

interface ListItemProps {
  /** List item content */
  children: React.ReactNode;
}

export { DocumentedComponent };
export default ListItem;
