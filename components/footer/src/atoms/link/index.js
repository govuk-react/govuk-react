import React from 'react';
import styled from 'styled-components';
import { FOOTER_LINK, FOOTER_LINK_HOVER } from 'govuk-colours';
<<<<<<< HEAD
import { LinkDocumented } from '@govuk-react/link';

const StyledFooterLink = styled(LinkDocumented)({
=======
import Link from '@govuk-react/link';

const StyledFooterLink = styled(Link)({
>>>>>>> Footer component (#651)
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
