import styled from 'styled-components';
import { YELLOW, WHITE } from 'govuk-colours';
import PropTypes from 'prop-types';

const NavLinkAnchor = styled('a')({
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

NavLinkAnchor.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
};

export default NavLinkAnchor;
