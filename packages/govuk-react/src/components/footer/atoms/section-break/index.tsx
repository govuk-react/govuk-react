import styled from 'styled-components';
import { BORDER_COLOUR } from 'govuk-colours';
import { spacing } from '../../../../lib';

const SectionBreak = styled('hr')(
  {
    margin: 0,
    border: 0,
    borderBottom: `1px solid ${BORDER_COLOUR}`,
  },
  spacing.withWhiteSpace({ marginBottom: 8 })
);

export default SectionBreak;
