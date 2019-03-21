import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { GUTTER_HALF, MEDIA_QUERIES, WIDTHS } from '@govuk-react/constants';
import { spacing } from '@govuk-react/lib';

const colValues = {
  columnOneQuarter: '25%',
  columnOneThird: '33.3333%',
  columnOneHalf: '50%',
  columnTwoThirds: '66.6667%',
  columnThreeQuarters: '75%',
  columnFull: '100%',
};

const widthFromProps = spacing.withWidth({ noDefault: true });
const desktopWidthFromProps = spacing.withWidth({
  mediaQuery: MEDIA_QUERIES.DESKTOP,
  noDefault: true,
});

function setGrowShrink(style) {
  const hasAutoWidth = [undefined, 'auto'].includes(style.width);

  // No explicit width means auto, so grow/shrink should be set
  return Object.assign({}, style, {
    flexGrow: hasAutoWidth ? 1 : 0,
    flexShrink: hasAutoWidth ? 1 : 0,
  });
}

const StyledColumn = styled('div')(
  {
    boxSizing: 'border-box',
    paddingRight: GUTTER_HALF,
    paddingLeft: GUTTER_HALF,
  },
  props => {
    // if setWidth is set, then columnOneQuarter etc props will be ignored
    let widthStyle = widthFromProps(props);

    if (!widthStyle) {
      let widthValue;

      Object.entries(props).forEach(([key, value]) => {
        if (colValues[key] && value === true) {
          if (process.env.NODE_ENV !== 'production') {
            const newKey = key
              .replace('column', '')
              .replace(/^([A-Z][a-z]+)([A-Z])/, '$1-$2')
              .toLocaleLowerCase();
            // eslint-disable-next-line no-console
            console.warn(`deprecated prop ${key} used in GridCol, please replace with setWidth="${newKey}"`);
          }
          widthValue = colValues[key];
        }
      });
      widthStyle = {
        [MEDIA_QUERIES.TABLET]: {
          width: widthValue,
        },
      };
    }
    widthStyle[MEDIA_QUERIES.TABLET] = setGrowShrink(widthStyle[MEDIA_QUERIES.TABLET]);

    const desktopWidthStyle = desktopWidthFromProps({
      setWidth: props.setDesktopWidth,
    });

    if (desktopWidthStyle) {
      desktopWidthStyle[MEDIA_QUERIES.DESKTOP] = setGrowShrink(desktopWidthStyle[MEDIA_QUERIES.DESKTOP]);
    }

    return Object.assign({}, widthStyle, desktopWidthStyle);
  }
);

/**
 *
 * Should always be wrapped by `GridRow`. Will always render a column at full width if
 * the browser width is below the `TABLET` breakpoint.
 *
 * NB our grid is based on flex-box, which differs from govuk-frontend, which instead uses
 * floats, however it is otherwise similar to use.
 *
 * ### Usage
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
 *     <GridCol setWidth="one-half">
 *       ...
 *     </GridCol>
 *     <GridCol setWidth="one-quarter">
 *       ...
 *     </GridCol>
 *     <GridCol setWidth="one-quarter">
 *       ...
 *     </GridCol>
 *   <GridRow>
 *     <GridCol setWidth="one-third">
 *       ...
 *     </GridCol>
 *     <GridCol setWidth="two-thirds">
 *       ...
 *     </GridCol>
 *   </GridRow>
 *   <GridRow>
 *     <GridCol setWidth="one-third" setDesktopWidth="one-quarter">
 *       ...
 *     </GridCol>
 *     <GridCol setWidth="two-thirds" setDesktopWidth="auto">
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
const GridCol = props => <StyledColumn {...props} />;

GridCol.propTypes = {
  /** GridCol content */
  children: PropTypes.node,
  /** Dimension setting for the column (deprecated) */
  columnOneQuarter: PropTypes.bool,
  /** Dimension setting for the column (deprecated) */
  columnOneThird: PropTypes.bool,
  /** Dimension setting for the column (deprecated) */
  columnOneHalf: PropTypes.bool,
  /** Dimension setting for the column (deprecated) */
  columnTwoThirds: PropTypes.bool,
  /** Dimension setting for the column (deprecated) */
  columnThreeQuarters: PropTypes.bool,
  /** Dimension setting for the column (deprecated) */
  columnFull: PropTypes.bool,
  /**
   * Explicitly set column to width using value or descriptive string
   * (`one-quarter`, `one-third`, `one-half`, `two-thirds`, `three-quarters`, `full`)
   */
  setWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.oneOf(Object.keys(WIDTHS))]),
  /**
   * Explicitly set desktop column to width using value or descriptive string
   * (`one-quarter`, `one-third`, `one-half`, `two-thirds`, `three-quarters`, `full`)
   */
  setDesktopWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.oneOf([...Object.keys(WIDTHS)])]),
};

GridCol.defaultProps = {
  children: undefined,
  columnOneQuarter: false,
  columnOneThird: false,
  columnOneHalf: false,
  columnTwoThirds: false,
  columnThreeQuarters: false,
  columnFull: false,
  setWidth: undefined,
  setDesktopWidth: undefined,
};

export default GridCol;
