import styled from 'styled-components';
import { WHITE, YELLOW } from 'govuk-colours';

const asTopNavAnchor = (AnchorType) => {
  const StyledHoc = styled(AnchorType)({
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

  return StyledHoc;
};

export default asTopNavAnchor;
