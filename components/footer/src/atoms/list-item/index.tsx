import styled from 'styled-components';
import { spacing } from '@govuk-react/lib';

const ListItem: React.FC<ListItemProps> = styled('li')(
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

interface ListItemProps {
  inline?: boolean;
}

ListItem.defaultProps = {
  inline: false,
};

export default ListItem;
