import glamorous from 'glamorous';
import { WHITE } from 'govuk-colours';
import { SPACING } from '@govuk-react/constants';

const Company = glamorous.div({
  display: 'flex',
  fontWeight: 800,
  alignItems: 'center',
  justifyContent: 'flex-start',
  fontSize: '30px',
  ' a': {
    display: 'flex',
    color: WHITE,
    textDecoration: 'none',
    marginBottom: 0,
    paddingBottom: 0,
    borderBottom: '1px solid transparent',
    ':hover': {
      borderBottom: `1px solid ${WHITE}`,
    },
  },
  ' h1': {
    fontSize: '30px',
  },
  ' svg': {
    marginRight: SPACING.SCALE_2,
  },
});

export default Company;
