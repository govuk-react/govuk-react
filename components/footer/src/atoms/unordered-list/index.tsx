import styled from 'styled-components';
import { GUTTER, MEDIA_QUERIES } from '@govuk-react/constants';
import { spacing } from '@govuk-react/lib';

const UnorderedList = styled('ul')<UnorderedListProps>(
  ({ inline }) =>
    inline
      ? {
          marginTop: 0,
          marginBottom: spacing.simple(3),
          padding: 0,
        }
      : {
          margin: 0,
          padding: 0,
          listStyle: 'none',
          columnGap: `${GUTTER}`,
        },
  ({ columns }) =>
    columns && {
      [MEDIA_QUERIES.DESKTOP]: {
        // 2 or 3 columns only
        columnCount: columns,
      },
    }
);

interface UnorderedListProps {
  columns?: number;
  inline?: boolean;
}

UnorderedList.defaultProps = {
  columns: undefined,
  inline: false,
};

export default UnorderedList;
