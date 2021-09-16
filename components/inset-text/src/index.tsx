import React from 'react';
import styled from 'styled-components';

import { BORDER_WIDTH_WIDE, SPACING_POINTS } from '@govuk-react/constants';
import { spacing, typography } from '@govuk-react/lib';
import { BORDER_COLOUR } from 'govuk-colours';

const InsetText = styled('div')<InsetTextProps>(
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
 * import { InsetText } from 'govuk-react'
 *
 * <InsetText>
 *  Hello
 * </InsetText>
 * ```
 *
 * ### References
 * - https://design-system.service.gov.uk/components/inset-text/
 * - https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/components/inset-text/_inset-text.scss
 */
const DocumentedInsetText: React.FC<InsetTextProps> = (props: InsetTextProps) => <InsetText {...props} />;

interface InsetTextProps {
  children: React.ReactNode;
}
export { DocumentedInsetText };
export default InsetText;
