import styled from 'styled-components';
import { MEDIA_QUERIES, SPACING } from '@govuk-react/constants';

const Ul = styled('ul').withConfig<{ serviceTitle?: boolean; open?: boolean }>({
  shouldForwardProp: (prop) => !['serviceTitle', 'open'].includes(String(prop)),
})<{ serviceTitle?: boolean; open?: boolean }>(({ serviceTitle, open }) => ({
  display: open ? 'flex' : 'none',
  flexWrap: 'wrap',
  margin: 0,
  padding: 0,
  marginTop: SPACING.SCALE_1,
  width: '100%',
  [MEDIA_QUERIES.LARGESCREEN]: {
    display: 'flex',
    paddingTop: serviceTitle ? 0 : SPACING.SCALE_5,
    width: 'auto',
  },
}));

export default Ul;
