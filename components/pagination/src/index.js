import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { MEDIA_QUERIES, SPACING_POINTS } from '@govuk-react/constants';
import { spacing, typography } from '@govuk-react/lib';

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
 * Simple usage with `asPaginationItem` HOC
 * ```jsx
 * import { asPaginationItem } from '@govuk-react/hoc';
 *
 * const PaginationAnchor = asPaginationItem('a');
 *
 * <Pagination>
 *   <PaginationAnchor href="#prev" previousPage>
 *     Previous page
 *   </PaginationAnchor>
 *   <PaginationAnchor href="#next" nextPage>
 *     Next page
 *   </PaginationAnchor>
 * </Pagination>
 * ```
 *
 * ### References:
 * - https://govuk-static.herokuapp.com/component-guide/previous_and_next_navigation
 *
 */
const Pagination = props => <StyledList {...props} />;

Pagination.propTypes = {
  /** `asPaginationItem` nodes */
  children: PropTypes.node.isRequired,
};

export default Pagination;
