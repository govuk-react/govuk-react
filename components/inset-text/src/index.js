import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { BORDER_WIDTH_WIDE, SPACING_POINTS } from '@govuk-react/constants';
import { spacing, typography } from '@govuk-react/lib';
import { BORDER_COLOUR } from 'govuk-colours';

const InsetText = styled('div')(
  typography.font({ size: 19 }),
  typography.textColour,
  {
    padding: SPACING_POINTS[3],
  },
  spacing.withWhiteSpace({ margin: { size: 6, direction: ['top', 'bottom'] } }),
  {
    clear: 'both',
    borderLeft: `${BORDER_WIDTH_WIDE} solid ${BORDER_COLOUR}`,

    ':first-child': {
      marginTop: 0,
    },

    ':only-child,:last-child': {
      marginBottom: 0,
    },
  }
);

/**
 *
 * ### Usage
 *
 * ```jsx
 * <InsetText>
 *  Hello
 * </InsetText>
 * ```
 *
 * ### References
 * - https://design-system.service.gov.uk/components/inset-text/
 * - https://github.com/alphagov/govuk-frontend/blob/master/src/components/inset-text/_inset-text.scss
 */
const DocumentedInsetText = props => <InsetText {...props} />;

DocumentedInsetText.propTypes = {
  children: PropTypes.node.isRequired,
};

InsetText.propTypes = DocumentedInsetText.propTypes;

export { DocumentedInsetText };
export default InsetText;
