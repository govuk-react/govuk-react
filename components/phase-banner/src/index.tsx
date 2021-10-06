/**
 * ### References:
 *
 * - https://github.com/alphagov/govuk-frontend/tree/main/src/govuk/components/phase-banner
 */
import type { WithWhiteSpaceProps } from '@govuk-react/lib';

import * as React from 'react';
import styled from 'styled-components';
import { BORDER_COLOUR } from 'govuk-colours';
import { SPACING_POINTS } from '@govuk-react/constants';
import { spacing, typography } from '@govuk-react/lib';
import Tag from '@govuk-react/tag';

const StyledBanner = styled('div')(
  {
    paddingTop: SPACING_POINTS[2],
    paddingBottom: SPACING_POINTS[2],

    borderBottom: `1px solid ${BORDER_COLOUR}`,
  },
  spacing.withWhiteSpace()
);

const BannerContent = styled('p')(typography.font({ size: 16 }), typography.textColour, {
  display: 'table',
  margin: 0,

  [String(Tag)]: {
    marginRight: SPACING_POINTS[2],
  },
});

const BannerText = styled('span')({
  display: 'table-cell',
  verticalAlign: 'baseline',
});

/**
 * Use the phase banner component to show users your service is still being worked on.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/phase-banner
 * - https://design-system.service.gov.uk/components/phase-banner/
 */
export const PhaseBanner: React.FC<PhaseBannerProps> = ({ level, children, ...props }: PhaseBannerProps) => (
  <StyledBanner {...props}>
    <BannerContent>
      <Tag>{level}</Tag>
      <BannerText>{children}</BannerText>
    </BannerContent>
  </StyledBanner>
);

export interface PhaseBannerProps extends WithWhiteSpaceProps {
  /** Children text and links */
  children: React.ReactNode;
  /** Alpha or beta banner */
  level: string;
}

PhaseBanner.displayName = 'PhaseBanner';

export default PhaseBanner;
