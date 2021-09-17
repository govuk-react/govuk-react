// https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/components/table/_table.scss

import styled from 'styled-components';
import { FONT_WEIGHTS } from '@govuk-react/constants';

const Caption = styled('caption')({
  fontWeight: Number(FONT_WEIGHTS.bold),
  display: 'table-caption',
  textAlign: 'left',
});

export default Caption;
