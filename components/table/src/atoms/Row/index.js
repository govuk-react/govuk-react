// https://govuk-elements.herokuapp.com/data/

import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const RowInner = styled('tr')();

const Row = ({ children, ...props }) => (
  <RowInner {...props}>
    {children}
  </RowInner>
);

Row.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Row;
