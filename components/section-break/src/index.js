import React from 'react';
import PropTypes from 'prop-types';
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

const SectionBreak = styled('hr')(
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
 * ```jsx
 * <SectionBreak>Example</SectionBreak>
 * ```
 *
 * ### References
 * - https://design-system.service.gov.uk/styles/typography/#section-break
 * - https://github.com/alphagov/govuk-frontend/blob/master/src/core/_section-break.scss
 */
const SectionBreakDocumented = props => <SectionBreak {...props} />;

SectionBreakDocumented.propTypes = {
  level: PropTypes.oneOf(['XL', 'XLARGE', 'L', 'LARGE', 'M', 'MEDIUM']),
  visible: PropTypes.bool,
};
SectionBreakDocumented.defaultProps = {
  visible: undefined,
};

SectionBreak.propTypes = SectionBreakDocumented.propTypes;
SectionBreak.defaultProps = SectionBreakDocumented.defaultProps;

export { SectionBreakDocumented };
export default SectionBreak;
