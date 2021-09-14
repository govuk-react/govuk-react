import React from 'react';
import styled from 'styled-components';
import { FOOTER_LINK, FOOTER_LINK_HOVER } from 'govuk-colours';
// TODO: Why not Link?
import { LinkDocumented } from '@govuk-react/link';

const StyledFooterLink = styled(LinkDocumented)({
  ':link, :visited': {
    color: FOOTER_LINK,
  },
  ':hover': {
    color: FOOTER_LINK_HOVER,
  },
});

const FooterLink: React.FC<React.ComponentProps<typeof LinkDocumented>> = (props) => {
  return <StyledFooterLink {...props} />;
};

export default FooterLink;
