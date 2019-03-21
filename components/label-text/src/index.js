import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';
import { spacing, typography } from '@govuk-react/lib';

// TODO should `LabelText` and `Label` be consolidated?
// TODO add support for differing font sizes, as per govuk-frontend - see:
// https://github.com/alphagov/govuk-frontend/blob/master/src/components/label/_label.scss

const StyledLabelText = styled('span')(
  typography.font({ size: 19 }),
  typography.textColour,
  {
    display: 'block',
    clear: 'none',
    paddingBottom: '2px',
  },
  ({ error }) => ({
    fontWeight: error ? 700 : undefined,
  }),
  spacing.withWhiteSpace({ marginBottom: 0 })
);

/**
 *
 * ### Usage
 *
 * Simple
 * ```jsx
 * <LabelText>Example</LabelText>
 * ```
 *
 * ### References:
 * - https://github.com/alphagov/govuk-frontend/tree/master/src/components/
 *
 */
const LabelText = props => <StyledLabelText {...props} />;

LabelText.propTypes = {
  /** Text for the label */
  children: PropTypes.node.isRequired,
};

export default LabelText;
