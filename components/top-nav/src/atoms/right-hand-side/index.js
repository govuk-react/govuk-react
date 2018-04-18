import glamorous from 'glamorous';
import { WHITE } from 'govuk-colours';
import { MEDIA_QUERIES, SPACING } from '@govuk-react/constants';

const RightHandSide = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  marginTop: SPACING.SCALE_2,
  [MEDIA_QUERIES.LARGESCREEN]: {
    alignItems: 'flex-start',
    width: '66.66%',
    paddingLeft: SPACING.SCALE_3,
    marginTop: 0,
    ' button': {
      display: 'none',
    },
  },
  ' a': {
    color: WHITE,
    border: 0,
    textDecoration: 'none',
    borderBottom: '1px solid transparent',
    marginBottom: 0,
    paddingBottom: 0,
    ':hover': {
      borderBottom: `1px solid ${WHITE}`,
    },
  },
});

export default RightHandSide;
