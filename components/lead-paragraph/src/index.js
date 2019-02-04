import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import { withWhiteSpace } from '@govuk-react/hoc';
import { typography } from '@govuk-react/lib';

const StyledParagraph = styled('p')(
  typography.textColour,
  typography.font({ size: 24 }),
  { marginTop: 0 },
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

export default withWhiteSpace({ marginBottom: 6 })(LeadParagraph);
