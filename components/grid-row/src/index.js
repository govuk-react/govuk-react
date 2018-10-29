import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { GUTTER_HALF, MEDIA_QUERIES, SPACING } from '@govuk-react/constants';

const StyledRow = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  margin: `0 -${GUTTER_HALF} ${SPACING.SCALE_3}`,
  [MEDIA_QUERIES.LARGESCREEN]: {
    flexDirection: 'row',
    marginBottom: SPACING.SCALE_5,
  },
});

/**
 *
 * ### Usage
 *
 * Example
 * * https://codesandbox.io/s/x917knwm4z
 *
 * Simple
 * ```jsx
 * import GridRow from '@govuk-react/grid-row';
 * import GridCol from '@govuk-react/grid-col';
 *
 * <Fragment>
 *   <GridRow>
 *     <GridCol>
 *       ...
 *     </GridCol>
 *   </GridRow>
 * </Fragment>
 * ```
 *
 * ### References:
 * - https://github.com/alphagov/govuk_frontend_toolkit/blob/master/stylesheets/_grid_layout.scss
 * - https://github.com/alphagov/govuk_elements/blob/master/assets/sass/elements/_layout.scss
 *
 */
const GridRow = props => <StyledRow {...props} />;

GridRow.propTypes = {
  /**
   * One or more GridCol nodes
   */
  children: PropTypes.node.isRequired,
};

export default GridRow;
