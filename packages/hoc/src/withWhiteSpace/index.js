import styled from 'styled-components';
import { spacing } from '@govuk-react/lib';

import deprecated from '../deprecated';

// NB withWhiteSpace HOC is DEPRECATED
// Please use `spacing.withWhiteSpace(config)` instead in styled components

const withWhiteSpace = config => (Component) => {
  const StyledHoc = styled(deprecated(
    Component,
    '(use of withWhiteSpace HOC - Please use `spacing.withWhiteSpace(config)` instead in styled components)',
  ))(spacing.withWhiteSpace(config));

  StyledHoc.propTypes = {
    ...spacing.withWhiteSpace.propTypes,
  };

  return StyledHoc;
};

export default withWhiteSpace;
