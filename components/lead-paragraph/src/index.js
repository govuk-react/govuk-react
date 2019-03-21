import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { spacing, typography } from '@govuk-react/lib';

const StyledParagraph = styled('p')(
  typography.textColour,
  typography.font({ size: 24 }),
  { marginTop: 0 },
  spacing.withWhiteSpace({ marginBottom: 6 })
);

/**
 *
 * ### Usage
 *
 *
 * Simple
 * ```jsx
 * <LeadParagraph>LeadParagraph example</LeadParagraph>
 * ```
 *
 * ### References
 * - https://design-system.service.gov.uk/styles/typography/#paragraphs
 */
const LeadParagraph = props => <StyledParagraph {...props} />;

LeadParagraph.propTypes = {
  /** Text in the Lead paragraph */
  children: PropTypes.node.isRequired,
};

export default LeadParagraph;
