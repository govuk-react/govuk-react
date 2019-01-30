import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { SPACING } from '@govuk-react/constants';
import { withWhiteSpace } from '@govuk-react/hoc';
import { BORDER_COLOUR } from 'govuk-colours';

const StyledInsetText = styled('div')(props => ({
  boxSizing: 'border-box',
  borderLeftStyle: 'solid',
  borderLeftWidth: props.isNarrow ? '5px' : '10px',
  borderColor: BORDER_COLOUR,
  padding: SPACING.SCALE_3,
}));

/**
 *
 * ### Usage
 *
 *
 * Simple
 * ```jsx
 * import Paragraph from '@govuk-react/paragraph';
 *
 * <InsetText>
 *  <Paragraph mb={0}>Hello</Paragraph>
 * </InsetText>
 * ```
 *
 * Narrow border
 * ```jsx
 * import Paragraph from '@govuk-react/paragraph';
 *
 * <InsetText isNarrow>
 *  <Paragraph mb={0}>Hello</Paragraph>
 * </InsetText>
 * ```
 *
 * ### References
 * - https://govuk-elements.herokuapp.com/typography/#typography-inset-text
 * - https://github.com/alphagov/govuk-frontend/blob/master/src/components/inset-text/_inset-text.scss
 * - https://github.com/alphagov/govuk_elements/blob/master/packages/govuk-elements-sass/public/sass/elements/_panels.scss
 */
const InsetText = props => <StyledInsetText {...props} />;

InsetText.defaultProps = {
  isNarrow: false,
};

InsetText.propTypes = {
  /**
   * Renders a narrow border following GDS guides if set to true
   */
  isNarrow: PropTypes.bool,
};

export default withWhiteSpace({ marginBottom: 6 })(InsetText);
