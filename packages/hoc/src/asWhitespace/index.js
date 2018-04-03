import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import { BLUE } from 'govuk-colours';

const asWhitespace = (Component, marginBottom) => {
  const Whitespace = props => (
    <Component marginBottom={marginBottom} {...props}>{props.children}</Component>
  );

  Whitespace.propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
      .isRequired,
  };

  const StyledHoc = glamorous(Whitespace)({
    border: `1px solid ${BLUE}`,
    marginBottom: marginBottom || 0,
  });

  return StyledHoc;
};

export default asWhitespace;
