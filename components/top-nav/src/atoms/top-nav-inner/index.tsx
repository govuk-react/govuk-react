import styled from 'styled-components';
import { MEDIA_QUERIES, SPACING } from '@govuk-react/constants';

const TopNavInner = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  width: `calc(100% - ${SPACING.SCALE_5})`,
  maxWidth: '960px',
  padding: `calc(${SPACING.SCALE_2} * 0.8) ${SPACING.SCALE_3}`,
  boxSizing: 'border-box',
  [MEDIA_QUERIES.LARGESCREEN]: {
    padding: `calc(${SPACING.SCALE_2} * 0.8) 0`,
    flexDirection: 'row',
    width: `calc(100% - ${SPACING.SCALE_6})`,
  },
});

export default TopNavInner;
