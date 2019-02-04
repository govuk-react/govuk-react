import styled from 'styled-components';
import { spacing } from '@govuk-react/lib';

// NB withWhiteSpace HOC is DEPRECATED
// Please use `spacing.withWhiteSpace(config)` instead in styled components

const withWhiteSpace = config => (Component) => {
  const StyledHoc = styled(Component)(spacing.withWhiteSpace(config));

  StyledHoc.propTypes = {
    ...spacing.withWhiteSpace.propTypes,
  };

  return StyledHoc;
};

export default withWhiteSpace;
