import React from 'react';
import styled from 'styled-components';
import { FOOTER_LINK, FOOTER_LINK_HOVER } from 'govuk-colours';
// TODO: Why not Link?
import { LinkDocumented } from '@govuk-react/link';

const FooterLink = styled(LinkDocumented)<React.ComponentProps<typeof LinkDocumented>>({
  ':link, :visited': {
    color: FOOTER_LINK,
  },
  ':hover': {
    color: FOOTER_LINK_HOVER,
  },
});

export default FooterLink;
