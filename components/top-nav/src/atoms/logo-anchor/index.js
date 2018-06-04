import styled from 'react-emotion';
import React from 'react';
import PropTypes from 'prop-types';
import { WHITE, YELLOW, BLACK } from 'govuk-colours';

const LogoAnchor = ({ anchorType, ...props }) => {
  const StyledLogoAnchor = styled(anchorType)({
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
      outline: `3px solid ${YELLOW}`,
    },
    ':visited': {
      color: WHITE, // TODO: active state, LIGHT_BLUE
      borderBottomColor: WHITE, // TODO: active state, LIGHT_BLUE
    },
  });

  return <StyledLogoAnchor {...props} />;
};

LogoAnchor.defaultProps = {
  anchorType: 'a',
};

LogoAnchor.propTypes = {
  anchorType: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

export default LogoAnchor;
