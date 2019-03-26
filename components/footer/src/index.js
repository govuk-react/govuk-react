import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { spacing, typography } from '@govuk-react/lib';

const Footer = styled('div')(
  typography.font({ size: 16 }),
  spacing.withWhiteSpace(),
);

/**
 *
 * ### Usage
 *
 * Simple
 * ```jsx
 * <Footer>Example</Footer>
 * ```
 *
 * ### References
 * - TODO: INSERT A REFERENCE TO EXTERNAL URL IF POSSIBLE
 */
const FooterDocumented = props => <Footer {...props} />;

FooterDocumented.propTypes = {
  children: PropTypes.node.isRequired,
};

Footer.propTypes = FooterDocumented.propTypes;

export { FooterDocumented };
export default Footer;
