import styled from 'styled-components';
import { YELLOW, BLACK } from 'govuk-colours';

const NavLinkAnchor = styled('a')(
  {
    display: 'inline-block',
    ':focus': {
      color: BLACK,
      backgroundColor: YELLOW,
      outline: `3px solid ${YELLOW}`,
      ':hover': {
        borderBottomColor: BLACK,
      },
    },
  },
  ({ active }) => (active && {
    color: '#1d8feb',
  }),

);
export default NavLinkAnchor;
