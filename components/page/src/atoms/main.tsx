// tracking https://github.com/alphagov/govuk-frontend/blob/main/src/govuk/objects/_main-wrapper.scss
import styled from 'styled-components';
import { spacing } from '@govuk-react/lib';

const Main = styled('main')(
  spacing.withWhiteSpace({
    padding: {
      size: 6,
      direction: ['top', 'bottom'],
    },
  }),
  { display: 'block' }
);

export default Main;
