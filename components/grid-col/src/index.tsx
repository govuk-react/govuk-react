/**
 * ### References:
 *
 * - https://github.com/alphagov/govuk_frontend_toolkit/blob/master/stylesheets/_grid_layout.scss
 * - https://github.com/alphagov/govuk_elements/blob/master/assets/sass/elements/_layout.scss
 */

import * as React from 'react';
import styled from 'styled-components';
import { GUTTER_HALF, MEDIA_QUERIES } from '@govuk-react/constants';
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
  return { ...style, flexGrow: hasAutoWidth ? 1 : 0, flexShrink: hasAutoWidth ? 1 : 0 };
}

/**
 * Grid Column.
 *
 * Should always be wrapped by `GridRow`. Will always render a column at full width if
 * the browser width is below the `TABLET` breakpoint.
 *
 * NB our grid is based on flex-box, which differs from govuk-frontend, which instead uses
 * floats, however it is otherwise similar to use.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/grid-col
 *
 */
export const GridCol = styled('div')<GridColProps>(
  {
    boxSizing: 'border-box',
    paddingRight: GUTTER_HALF,
    paddingLeft: GUTTER_HALF,
  },
  (props) => {
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

    return { ...widthStyle, ...desktopWidthStyle };
  }
);
export interface GridColProps {
  /** GridCol content */
  children?: React.ReactNode;
  /** Dimension setting for the column (deprecated) */
  columnOneQuarter?: boolean;
  /** Dimension setting for the column (deprecated) */
  columnOneThird?: boolean;
  /** Dimension setting for the column (deprecated) */
  columnOneHalf?: boolean;
  /** Dimension setting for the column (deprecated) */
  columnTwoThirds?: boolean;
  /** Dimension setting for the column (deprecated) */
  columnThreeQuarters?: boolean;
  /** Dimension setting for the column (deprecated) */
  columnFull?: boolean;
  /**
   * Explicitly set column to width using value or descriptive string
   * (`one-quarter`, `one-third`, `one-half`, `two-thirds`, `three-quarters`, `full`)
   */
  setWidth?: number | string;
  /**
   * Explicitly set desktop column to width using value or descriptive string
   * (`one-quarter`, `one-third`, `one-half`, `two-thirds`, `three-quarters`, `full`)
   */
  setDesktopWidth?: number | string;
}

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

GridCol.displayName = 'GridCol';

export default GridCol;
