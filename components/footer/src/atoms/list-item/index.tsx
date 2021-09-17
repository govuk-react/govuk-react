import type { WithWhiteSpaceProps } from '@govuk-react/lib';

import styled from 'styled-components';
import { spacing } from '@govuk-react/lib';

export const ListItem = styled('li')<ListItemProps>(
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

interface ListItemProps extends WithWhiteSpaceProps {
  inline?: boolean;
}

ListItem.defaultProps = {
  inline: false,
};

export default ListItem;
