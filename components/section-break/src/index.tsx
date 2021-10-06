/**
 * ### References
 *
 * - https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/core/_section-break.scss
 */

import type { WithWhiteSpaceProps } from '@govuk-react/lib';

import styled from 'styled-components';
import { spacing } from '@govuk-react/lib';
import { BORDER_COLOUR } from 'govuk-colours';

const breakSizes = {
  XL: 8,
  XLARGE: 8,
  L: 6,
  LARGE: 6,
  M: 4,
  MEDIUM: 4,
};

/**
 * Create a thematic break between sections of content.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/section-break
 * - https://design-system.service.gov.uk/styles/typography/#section-break
 */

export const SectionBreak = styled('hr')<SectionBreakProps>(
  {
    margin: 0,
    border: 0,
  },
  ({ level }) => {
    const size = breakSizes[level];

    if (size) {
      return spacing.withWhiteSpace({
        margin: { size, direction: ['top', 'bottom'] },
      });
    }

    return spacing.withWhiteSpace();
  },
  ({ visible }) =>
    visible
      ? {
          borderBottom: `1px solid ${BORDER_COLOUR}`,
        }
      : undefined
);
export interface SectionBreakProps extends WithWhiteSpaceProps {
  level?: string;
  visible?: boolean;
}

SectionBreak.defaultProps = {
  visible: undefined,
};

SectionBreak.displayName = 'SectionBreak';

export default SectionBreak;
