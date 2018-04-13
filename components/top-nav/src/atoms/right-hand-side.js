import glamorous from 'glamorous';
import { WHITE } from 'govuk-colours';
import { MEDIA_QUERIES, SPACING } from '@govuk-react/constants';

const RightHandSide = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  marginTop: SPACING.SCALE_2,
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
  [MEDIA_QUERIES.LARGESCREEN]: {
    ' button': {
      display: 'none',
    },
    width: '66.66%',
    paddingLeft: SPACING.SCALE_3,
    marginTop: 0,
  },
});

export default RightHandSide;
