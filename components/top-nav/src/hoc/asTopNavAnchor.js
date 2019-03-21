import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { WHITE, YELLOW } from 'govuk-colours';

const asTopNavAnchor = AnchorType => {
  const Anchor = props => <AnchorType {...props}>{props.children}</AnchorType>;

  const StyledHoc = styled(Anchor)({
    color: WHITE, // TODO: active state, LIGHT_BLUE
    textDecoration: 'none',
    textDecorationSkipInk: 'none',
    borderBottom: '1px solid transparent',
    fontWeight: 700,
    lineHeight: 1,
    ':hover': {
      borderBottomColor: WHITE, // TODO: active state, LIGHT_BLUE
    },
    ':focus': {
      outline: `3px solid ${YELLOW}`,
    },
  });

  Anchor.propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  };

  return StyledHoc;
};

export default asTopNavAnchor;
