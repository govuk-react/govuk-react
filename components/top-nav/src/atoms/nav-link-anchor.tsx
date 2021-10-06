import styled from 'styled-components';
import { YELLOW, BLACK } from 'govuk-colours';
import TopNavAnchor from './top-nav-anchor';

const NavLinkAnchor = styled(TopNavAnchor)({
  display: 'inline-block',
  ':focus': {
    color: BLACK,
    backgroundColor: YELLOW,
    outline: `3px solid ${YELLOW}`,
    ':hover': {
      borderBottomColor: BLACK,
    },
  },
});

NavLinkAnchor.displayName = 'TopNav.NavLink';

export default NavLinkAnchor;
