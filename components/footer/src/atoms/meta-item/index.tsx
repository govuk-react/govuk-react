import styled from 'styled-components';
import { GUTTER_HALF, MEDIA_QUERIES } from '@govuk-react/constants';
import { spacing } from '@govuk-react/lib';

const MetaItem = styled('div')<MetaItemProps>(
  {
    marginRight: GUTTER_HALF,
    marginBottom: spacing.simple(5),
    marginLeft: GUTTER_HALF,
  },
  ({ grow = false }) =>
    grow && {
      flex: 1,
      flexBasis: '320px',
      [MEDIA_QUERIES.DESKTOP]: {
        flexBasis: 0,
      },
    }
);

interface MetaItemProps {
  grow?: boolean;
}

export default MetaItem;
