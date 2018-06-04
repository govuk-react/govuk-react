import styled from 'react-emotion';
import { YELLOW } from 'govuk-colours';
import { asTopNavAnchor } from '../..';

const asLogoAnchor = (AnchorType) => {
  const Anchor = asTopNavAnchor(AnchorType);

  const StyledLogoAnchor = styled(Anchor)({
    ':focus': {
      outline: `3px solid ${YELLOW}`,
    },
  });
  return StyledLogoAnchor;
};

export default asLogoAnchor;
