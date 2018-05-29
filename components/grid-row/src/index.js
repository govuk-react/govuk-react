// https://github.com/alphagov/govuk_frontend_toolkit/blob/master/stylesheets/_grid_layout.scss
// https://github.com/alphagov/govuk_elements/blob/master/assets/sass/elements/_layout.scss

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { MEDIA_QUERIES, SPACING } from '@govuk-react/constants';

const StyledRow = styled('div')({
  width: '100%',
  clear: 'left',
  margin: `0 0 ${SPACING.SCALE_3}`,
  [MEDIA_QUERIES.LARGESCREEN]: {
    display: 'flex',
    marginBottom: SPACING.SCALE_5,
  },
});

const GridRow = ({ children }) => <StyledRow>{children}</StyledRow>;

GridRow.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GridRow;
