/**
 * ### References:
 *
 * - https://github.com/alphagov/govuk_frontend_toolkit/blob/master/stylesheets/_grid_layout.scss
 * - https://github.com/alphagov/govuk_elements/blob/master/assets/sass/elements/_layout.scss
 */
import styled from 'styled-components';
import { GUTTER_HALF, MEDIA_QUERIES } from '@govuk-react/constants';
import { spacing } from '@govuk-react/lib';

/**
 * Grid Row, to be used as a parent component for GridCol.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/grid-row
 */
export const GridRow = styled('div')(
  {
    display: 'flex',
    flexDirection: 'column',
    margin: `0 -${GUTTER_HALF}`,
    [MEDIA_QUERIES.LARGESCREEN]: {
      flexDirection: 'row',
    },
  },
  spacing.withWhiteSpace()
);

GridRow.displayName = 'GridRow';

export default GridRow;
