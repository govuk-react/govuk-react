import React from 'react';
import styled from 'styled-components';
import { MEDIA_QUERIES, SPACING_POINTS } from '@govuk-react/constants';
import { spacing, typography } from '@govuk-react/lib';
import Anchor from './anchor';

const StyledList = styled('ul')(
  typography.font({ size: 19 }),
  {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    marginTop: SPACING_POINTS[5],
    padding: SPACING_POINTS[2],
    justifyContent: 'space-between',
    width: '100%',
    [MEDIA_QUERIES.LARGESCREEN]: {
      flexDirection: 'row',
    },
  },
  spacing.withWhiteSpace({ marginBottom: 6 })
);

/**
 *
 * ### Usage
 *
 * ```jsx
 * import { Pagination } from 'govuk-react';
 *
 * <Pagination>
 *   <Pagination.Anchor href="#prev" previousPage>
 *     Previous page
 *   </Pagination.Anchor>
 *   <Pagination.Anchor href="#next" nextPage>
 *     Next page
 *   </Pagination.Anchor>
 * </Pagination>
 * ```
 *
 * ### References:
 *
 * - https://govuk-static.herokuapp.com/component-guide/previous_and_next_navigation
 *
 */
const Pagination: PaginationType = (props: PaginationProps) => <StyledList {...props} />;

interface PaginationType extends React.FC<PaginationProps> {
  Anchor: typeof Anchor;
}
interface PaginationProps {
  children: React.ReactNode;
}

Pagination.Anchor = Anchor;

export default Pagination;
