// https://govuk-elements.herokuapp.com/data/

import styled from '@emotion/styled';
import {
  FONT_SIZE,
  LINE_HEIGHT,
  MEDIA_QUERIES,
  NTA_LIGHT,
} from '@govuk-react/constants';

const Caption = styled('caption')({
  fontFamily: NTA_LIGHT,
  fontWeight: 700,
  fontSize: FONT_SIZE.SIZE_16,
  lineHeight: LINE_HEIGHT.SIZE_16,
  textAlign: 'left',
  textTransform: 'none',
  width: '100%',
  [MEDIA_QUERIES.LARGESCREEN]: {
    fontSize: FONT_SIZE.SIZE_19,
    lineHeight: LINE_HEIGHT.SIZE_19,
  },
});

export default Caption;
