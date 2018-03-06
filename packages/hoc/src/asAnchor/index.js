import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import { BLUE, PURPLE, YELLOW } from 'govuk-colours';

const asAnchor = (AnchorType) => {
  const Anchor = props => (
    <AnchorType {...props}>{props.children}</AnchorType>
  );

  Anchor.propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
      .isRequired,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
  };

  Anchor.defaultProps = {
    onClick: undefined,
    disabled: undefined,
  };

  const StyledHoc = glamorous(Anchor)({
    color: BLUE,
    padding: '3px',
    margin: '-3px',
    outlineColor: 'transparent',
    display: 'inline-block',
    textDecoration: 'underline',
    ':focus': {
      backgroundColor: YELLOW,
      outline: `3px solid ${YELLOW}`,
    },
    ':visited': {
      color: PURPLE,
    },
  });

  return StyledHoc;
};

export default asAnchor;
