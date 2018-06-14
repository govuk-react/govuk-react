import styled from 'react-emotion';
import { YELLOW, BLACK } from 'govuk-colours';
import { asTopNavAnchor } from '../';

const asNavLinkAnchor = (AnchorType) => {
  const Anchor = asTopNavAnchor(AnchorType);

  const StyledNavLinkAnchor = styled(Anchor)({
    ':focus': {
      color: BLACK,
      backgroundColor: YELLOW,
      outline: `3px solid ${YELLOW}`,
      ':hover': {
        borderBottomColor: BLACK,
      },
    },
  });
  return StyledNavLinkAnchor;
};

export default asNavLinkAnchor;
