// tracking https://github.com/alphagov/govuk-frontend/blob/master/src/objects/_main-wrapper.scss
import styled from 'styled-components';
import { spacing } from '@govuk-react/lib';

// TODO: add support for govuk-main-wrapper--l
// which uses govuk-responsive-padding(8, "top");

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
