import styled from 'react-emotion';
import {
  MEDIA_QUERIES,
  SPACING,
} from '@govuk-react/constants';

const TopNavInner = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  width: `calc(100% - ${SPACING.SCALE_3})`,
  maxWidth: '960px',
  padding: `8px ${SPACING.SCALE_3}`,
  boxSizing: 'border-box',
  [MEDIA_QUERIES.LARGESCREEN]: {
    padding: '8px 0',
    flexDirection: 'row',
    width: `calc(100% - ${SPACING.SCALE_6})`,
  },
});

export default TopNavInner;
