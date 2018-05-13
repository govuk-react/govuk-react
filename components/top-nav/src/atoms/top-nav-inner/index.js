import styled from 'react-emotion';
import {
  MEDIA_QUERIES,
  SPACING,
} from '@govuk-react/constants';

const TopNavInner = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  width: `calc(100% - ${SPACING.SCALE_3})`,
  maxWidth: '990px',
  padding: `${SPACING.SCALE_2} ${SPACING.SCALE_3}`,
  boxSizing: 'border-box',
  [MEDIA_QUERIES.LARGESCREEN]: {
    padding: `${SPACING.SCALE_2} 0`,
    flexDirection: 'row',
    width: `calc(100% - ${SPACING.SCALE_6})`,
  },
});

export default TopNavInner;
