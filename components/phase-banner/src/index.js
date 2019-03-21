import React from 'react';
import PropTypes from 'prop-types';
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

  [Tag]: {
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
 * ```jsx
 * <PhaseBanner level="alpha">
 *    This part of GOV.UK is being rebuilt &#8211;{' '}
 *    <AnchorLink href="https://example.com">find out what that means</AnchorLink>
 *  </PhaseBanner>
 * ```
 *
 * Beta
 * ```jsx
 * <PhaseBanner level="beta">
 *    This part of GOV.UK is being rebuilt &#8211;{' '}
 *    <AnchorLink href="https://example.com">find out what that means</AnchorLink>
 *  </PhaseBanner>
 * ```
 *
 * ### References:
 * - https://github.com/alphagov/govuk-frontend/tree/master/src/components/phase-banner
 * - https://design-system.service.gov.uk/components/phase-banner/
 *
 */
const PhaseBanner = ({ level, children, ...props }) => (
  <StyledBanner {...props}>
    <BannerContent>
      <Tag>{level}</Tag>
      <BannerText>{children}</BannerText>
    </BannerContent>
  </StyledBanner>
);

PhaseBanner.propTypes = {
  /** Children text and links */
  children: PropTypes.node.isRequired,
  /** Alpha or beta banner */
  level: PropTypes.string.isRequired,
};

export default PhaseBanner;
