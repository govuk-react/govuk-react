import styled from 'react-emotion';
import { MEDIA_QUERIES, SPACING } from '@govuk-react/constants';

const RightHandSide = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  marginTop: SPACING.SCALE_2,
  [MEDIA_QUERIES.LARGESCREEN]: {
    alignItems: 'flex-start',
    width: '66.66%',
    paddingLeft: SPACING.SCALE_3,
    marginTop: 0,
  },
});

export default RightHandSide;
