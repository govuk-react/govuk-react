import styled from '@emotion/styled';
import { LINK_COLOUR, LINK_HOVER_COLOUR, LINK_VISITED_COLOUR } from 'govuk-colours';

const Anchor = styled('a')({
  color: LINK_COLOUR,
  ':hover': {
    color: LINK_HOVER_COLOUR,
  },
  ':visited': {
    color: LINK_VISITED_COLOUR,
  },
});

export default Anchor;
