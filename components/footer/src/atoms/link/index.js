import React from 'react';
import styled from 'styled-components';
import { FOOTER_LINK, FOOTER_LINK_HOVER } from 'govuk-colours';
import Link from '@govuk-react/link';

const StyledFooterLink = styled(Link)({
  ':link, :visited': {
    color: FOOTER_LINK,
  },
  ':hover': {
    color: FOOTER_LINK_HOVER,
  },
});

const FooterLink = props => {
  return <StyledFooterLink {...props} />;
};

export default FooterLink;
