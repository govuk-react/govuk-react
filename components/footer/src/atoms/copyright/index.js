import React from 'react';
import styled from 'styled-components';
import Link from '@govuk-react/link';
import { FOOTER_LINK, FOOTER_LINK_HOVER } from 'govuk-colours';

const crestImageWidth2x = 250;
const crestImageHeight2x = 204;
const crestImageWidth = crestImageWidth2x / 2;
const crestImageHeight = crestImageHeight2x / 2;

const StyledCopyright = styled(Link)({
  display: 'inline-block',
  minWidth: crestImageWidth,
  paddingTop: crestImageHeight + 10,
  backgroundImage: "url('https://design-system.service.gov.uk/assets/images/govuk-crest.png')", // Needs changing
  '@media only screen and (-webkit-min-device-pixel-ratio: 2), not all, not all, only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx)': {
    backgroundImage: "url('https://design-system.service.gov.uk/assets/images/govuk-crest-2x.png')", // Needs changing
  },
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '50% 0%',
  backgroundSize: `${crestImageWidth}px ${crestImageHeight}px`,
  textAlign: 'center',
  textDecoration: 'none',
  whiteSpace: 'nowrap',
  ':link, :visited': {
    color: FOOTER_LINK,
  },
  ':hover': {
    color: FOOTER_LINK_HOVER,
  },
});

const Copyright = () => {
  return (
    <StyledCopyright href="https://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/uk-government-licensing-framework/crown-copyright/">
      © Crown copyright
    </StyledCopyright>
  );
};

export default Copyright;
