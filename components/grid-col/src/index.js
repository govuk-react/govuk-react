// https://github.com/alphagov/govuk_frontend_toolkit/blob/master/stylesheets/_grid_layout.scss
// https://github.com/alphagov/govuk_elements/blob/master/assets/sass/elements/_layout.scss

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { GUTTER_HALF, MEDIA_QUERIES, SPACING } from '@govuk-react/constants';

const StyledColumn = styled('div')(
  {
    backgroundColor: 'transparent',
    backgroundImage: 'none',
    margin: 0,
    marginBottom: SPACING.SCALE_3,
    textIndent: '0',
    boxSizing: 'border-box',
    [MEDIA_QUERIES.LARGESCREEN]: {
      width: '100%',
      margin: `0 ${GUTTER_HALF}`,
      ':first-child': {
        marginLeft: 0,
      },
      ':last-child': {
        marginRight: 0,
      },
    },
  },
  ({ hideContent }) => ({
    textIndent: hideContent ? '-999em' : undefined,
    backgroundColor: hideContent ? '#7DADD3' : undefined,
    backgroundImage: hideContent
      ? 'repeating-linear-gradient(180deg, #7DADD3, #7DADD3 15px, #B7CFE1 15px, #B7CFE1 30px)'
      : undefined,
  }),
  ({ columnOneThird }) => ({
    [MEDIA_QUERIES.LARGESCREEN]: {
      width: columnOneThird ? '33.3333%' : undefined,
    },
  }),
  ({ columnTwoThirds }) => ({
    [MEDIA_QUERIES.LARGESCREEN]: {
      width: columnTwoThirds ? '66.6667%' : undefined,
    },
  }),
  ({ columnOneQuarter }) => ({
    [MEDIA_QUERIES.LARGESCREEN]: {
      width: columnOneQuarter ? '50%' : undefined,
    },
  }),
);

const GridCol = props => <StyledColumn {...props} />;

GridCol.defaultProps = {
  children: undefined,
};

GridCol.propTypes = {
  children: PropTypes.node,
};

export default GridCol;
