import styled from 'styled-components';
import { WHITE, YELLOW } from 'govuk-colours';

const TopNavAnchor = styled('a')({
  color: WHITE,
  textDecoration: 'none',
  textDecorationSkipInk: 'none',
  borderBottom: '1px solid transparent',
  fontWeight: 700,
  lineHeight: 1,
  ':hover': {
    borderBottomColor: WHITE,
  },
  ':focus': {
    outline: `3px solid ${YELLOW}`,
  },
});

TopNavAnchor.displayName = 'TopNav.Anchor';
export default TopNavAnchor;
