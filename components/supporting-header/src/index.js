import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import { SECONDARY_TEXT_COLOUR } from 'govuk-colours';
import { spacing, typography } from '@govuk-react/lib';
import { SPACING_POINTS } from '@govuk-react/constants';

// TODO this should be replaced with a `Caption` component
// and support sizes XL, L and M
// see https://github.com/alphagov/govuk-frontend/blob/master/src/core/_typography.scss

const StyledHeader = styled('span')(
  typography.font({ size: 27 }),
  {
    color: SECONDARY_TEXT_COLOUR,
    marginBottom: SPACING_POINTS[1],
  },
  spacing.withWhiteSpace(),
);

/**
 *
 * ### Usage
 *
 * Simple
 * ```jsx
 * <SupportingHeader>Heading text</SupportingHeader>
 * ```
 *
 * With another header
 * ```jsx
 * import { H1 } from '@govuk-react/heading';
 *
 * <SupportingHeader>Supporting header text</SupportingHeader>
 * <H1>Main header text</H1>
 * ```
 *
 * ### References
 * - https://govuk-elements.herokuapp.com/typography/
 */
const SupportingHeader = props => <StyledHeader {...props} />;

SupportingHeader.propTypes = {
  /** Text to be rendered as a supporting header */
  children: PropTypes.string.isRequired,
};

export default SupportingHeader;
