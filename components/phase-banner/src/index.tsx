import React from 'react';
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
 *
 * ### Usage
 *
 * Alpha
 *
 * ```jsx
 * import { PhaseBanner } from 'govuk-react'
 *
 * <PhaseBanner level="alpha">
 *    This part of GOV.UK is being rebuilt &#8211;{' '}
 *    <AnchorLink href="https://example.com">find out what that means</AnchorLink>
 * </PhaseBanner>
 * ```
 *
 * Beta
 *
 * ```jsx
 * <PhaseBanner level="beta">
 *    This part of GOV.UK is being rebuilt &#8211;{' '}
 *    <AnchorLink href="https://example.com">find out what that means</AnchorLink>
 * </PhaseBanner>
 * ```
 *
 * ### References:
 *
 * - https://github.com/alphagov/govuk-frontend/tree/main/src/govuk/components/phase-banner
 * - https://design-system.service.gov.uk/components/phase-banner/
 *
 */
export const PhaseBanner: React.FC<PhaseBannerProps> = ({ level, children, ...props }: PhaseBannerProps) => (
  <StyledBanner {...props}>
    <BannerContent>
      <Tag>{level}</Tag>
      <BannerText>{children}</BannerText>
    </BannerContent>
  </StyledBanner>
);

interface PhaseBannerProps {
  /** Children text and links */
  children: React.ReactNode;
  /** Alpha or beta banner */
  level: string;
}

export default PhaseBanner;
