import styled from 'styled-components';
import { GUTTER, GUTTER_HALF, MEDIA_QUERIES } from '@govuk-react/constants';

const Section = styled('div')({
  display: 'inline-block',
  marginRight: GUTTER_HALF,
  marginBottom: GUTTER,
  marginLeft: GUTTER_HALF,
  verticalAlign: 'top',

  // Ensure columns take up equal width (typically one-half:one-half)
  flexGrow: 1,
  flexShrink: 1,

  // Make sure columns do not drop below 200px in width
  // Will typically result in wrapping, and end up in a single column on smaller screens.
  flexBasis: '200px',

  [MEDIA_QUERIES.DESKTOP]: {
    flexBasis: 'auto',

    '&:first-of-type': {
      flexGrow: 2,
    },
  },
});

export default Section;
