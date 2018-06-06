import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

import { SPACING } from '@govuk-react/constants';
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

/** Component is not exported withWhitespace because StyledInsetText is based on a Paragraph,
 *  which is also exported withWhitespace and therefore takes precedence.
 * 'mb' is used as a prop instead to override this functionality.
 */
export default InsetText;
