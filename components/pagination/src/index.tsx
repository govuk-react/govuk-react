/**
 * ### References:
 *
 * https://github.com/alphagov/static/blob/077649737c43d3937f745df0b3adade9df3717dc/app/views/govuk_component/docs/previous_and_next_navigation.yml
 * https://github.com/alphagov/govuk_publishing_components/blob/master/app/views/govuk_publishing_components/components/docs/previous_and_next_navigation.yml
 */
import * as React from 'react';
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
 * Navigational links that allow users to navigate within a series of pages or elements.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/pagination
 * - https://components.publishing.service.gov.uk/component-guide/previous_and_next_navigation
 *
 */
export const Pagination: PaginationType = (props: PaginationProps) => <StyledList {...props} />;

export interface PaginationType extends React.FC<PaginationProps> {
  Anchor: typeof Anchor;
}
export interface PaginationProps {
  children: React.ReactNode;
}

Pagination.displayName = 'Pagination';

Pagination.Anchor = Anchor;

export default Pagination;
