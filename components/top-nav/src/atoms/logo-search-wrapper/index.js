import styled from 'styled-components';
import { MEDIA_QUERIES, SPACING } from '@govuk-react/constants';

const LogoSearchWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  [MEDIA_QUERIES.LARGESCREEN]: {
    display: 'block',
    paddingRight: SPACING.SCALE_3,
    width: '33.33%',
  },
});

export default LogoSearchWrapper;
