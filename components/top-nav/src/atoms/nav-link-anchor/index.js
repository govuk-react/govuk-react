import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import { WHITE, YELLOW, BLACK } from 'govuk-colours';

const NavLinkAnchor = ({ anchorType, ...props }) => {
  const StyledNavLinkAnchor = styled(anchorType)({
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
      color: BLACK,
      backgroundColor: YELLOW,
      outline: `3px solid ${YELLOW}`,
      ':hover': {
        borderBottomColor: BLACK,
      },
    },
  });

  return <StyledNavLinkAnchor {...props} />;
};

NavLinkAnchor.defaultProps = {
  anchorType: 'a',
};

NavLinkAnchor.propTypes = {
  anchorType: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

export default NavLinkAnchor;

