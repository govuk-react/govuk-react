import styled from 'styled-components';
import { YELLOW, BLACK } from 'govuk-colours';
import { asTopNavAnchor } from '../';

const asNavLinkAnchor = (AnchorType) => {
  const Anchor = asTopNavAnchor(AnchorType);

  const StyledNavLinkAnchor = styled(Anchor)(
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
  return StyledNavLinkAnchor;
};

export default asNavLinkAnchor;
