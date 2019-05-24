import styled from 'styled-components';
import PropTypes from 'prop-types';
import { spacing } from '@govuk-react/lib';

const ListItem = styled('li')(
  ({ inline }) =>
    inline
      ? {
          display: 'inline-block',
          marginRight: spacing.simple(3),
          marginBottom: spacing.simple(1),
        }
      : spacing.withWhiteSpace({ marginBottom: 4 }),
  {
    '&:last-child': {
      marginBottom: 0,
    },
  }
);

ListItem.propTypes = {
  inline: PropTypes.bool,
};

ListItem.defaultProps = {
  inline: false,
};

export default ListItem;
