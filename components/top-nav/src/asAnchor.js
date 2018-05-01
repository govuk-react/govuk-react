import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import { WHITE, YELLOW } from 'govuk-colours';

const asAnchor = (AnchorType) => {
  const Anchor = props => (
    <AnchorType {...props}>{props.children}</AnchorType>
  );

  Anchor.propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
      .isRequired,
  };

  const StyledHoc = glamorous(Anchor)({
    color: WHITE, // TODO: active state, LIGHT_BLUE
    textDecoration: 'none',
    borderBottom: '1px solid transparent',
    fontWeight: 700,
    ':hover': {
      borderBottomColor: WHITE, // TODO: active state, LIGHT_BLUE
    },
    ':focus': {
      backgroundColor: YELLOW,
      outline: `3px solid ${YELLOW}`,
    },
    ':visited': {
      color: WHITE, // TODO: active state, LIGHT_BLUE
      borderBottomColor: WHITE, // TODO: active state, LIGHT_BLUE
    },
  });

  return StyledHoc;
};

export default asAnchor;
