import React from 'react';
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

const SectionBreak = styled('hr')<SectionBreakProps>(
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

/**
 *
 * ### Usage
 *
 * Simple
 *
 * ```jsx
 * import { SectionBreak } from 'govuk-react'
 *
 * <SectionBreak>Example</SectionBreak>
 * ```
 *
 * ### References
 * - https://design-system.service.gov.uk/styles/typography/#section-break
 * - https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/core/_section-break.scss
 */
const SectionBreakDocumented: React.FC<SectionBreakProps> = (props: SectionBreakProps) => <SectionBreak {...props} />;

interface SectionBreakProps {
  level?: string;
  visible?: boolean;
}

SectionBreakDocumented.defaultProps = {
  visible: undefined,
};

SectionBreak.defaultProps = SectionBreakDocumented.defaultProps;

export { SectionBreakDocumented };
export default SectionBreak;
