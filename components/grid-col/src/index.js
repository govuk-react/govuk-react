import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import { GUTTER_HALF, MEDIA_QUERIES, SPACING } from '@govuk-react/constants';

const colValues = {
  columnOneThird: '33.3333%',
  columnTwoThirds: '66.6667%',
  columnOneQuarter: '25%',
  columnOneHalf: '50%',
};

const StyledColumn = styled('div')(
  {
    marginBottom: SPACING.SCALE_3,
    boxSizing: 'border-box',
    [MEDIA_QUERIES.LARGESCREEN]: {
      marginRight: GUTTER_HALF,
      marginLeft: GUTTER_HALF,
      ':first-child': {
        marginLeft: 0,
      },
      ':last-child': {
        marginRight: 0,
      },
    },
  },
  ({ hideContent }) => {
    if (!hideContent) { return false; }
    return ({
      textIndent: '-999em',
      backgroundColor: '#7DADD3',
      backgroundImage: 'repeating-linear-gradient(180deg, #7DADD3, #7DADD3 15px, #B7CFE1 15px, #B7CFE1 30px)',
    });
  },
  (props) => {
    let widthValue = 'auto';
    let hasRequestedWidth = false;

    Object.entries(props).forEach(([key, value]) => {
      if (colValues[key] && value === true) {
        widthValue = colValues[key];
        hasRequestedWidth = true;
      }
    });
    return ({
      [MEDIA_QUERIES.LARGESCREEN]: {
        flexGrow: hasRequestedWidth ? 0 : 1,
        width: widthValue,
      },
    });
  },
);

/**
 *
 * Should always be wrapped by `GridRow`. Will always render a column at 100% width if
 * the browser width is below the `LARGESCREEN` breakpoint.
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
 *   <GridRow>
 *     <GridCol columnOneHalf>
 *       ...
 *     </GridCol>
 *     <GridCol columnOneQuarter>
 *       ...
 *     </GridCol>
 *     <GridCol columnOneQuarter>
 *       ...
 *     </GridCol>
 *   <GridRow>
 *     <GridCol columnOneThird>
 *       ...
 *     </GridCol>
 *     <GridCol columnTwoThirds>
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
const GridCol = ({
  columnOneThird,
  columnTwoThirds,
  columnOneQuarter,
  columnOneHalf,
  ...props
}) => (
  <StyledColumn
    columnOneThird={columnOneThird}
    columnTwoThirds={columnTwoThirds}
    columnOneQuarter={columnOneQuarter}
    columnOneHalf={columnOneHalf}
    {...props}
  />
);

GridCol.propTypes = {
  /** GridCol content */
  children: PropTypes.node,
  /** Dimension setting for the column */
  columnOneThird: PropTypes.bool,
  /** Dimension setting for the column */
  columnTwoThirds: PropTypes.bool,
  /** Dimension setting for the column */
  columnOneQuarter: PropTypes.bool,
  /** Dimension setting for the column */
  columnOneHalf: PropTypes.bool,
};

GridCol.defaultProps = {
  children: undefined,
  columnOneThird: false,
  columnTwoThirds: false,
  columnOneQuarter: false,
  columnOneHalf: false,
};

export default GridCol;
