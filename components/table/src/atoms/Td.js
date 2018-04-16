import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import {
  FONT_SIZE,
  LINE_HEIGHT,
  MEDIA_QUERIES,
  NTA_LIGHT,
} from '@govuk-react/constants';

import { GREY_2 } from 'govuk-colours';

const TdInner = glamorous.td(({
  alignRight,
}) => ({
  border: 0,
  borderBottom: `1px solid ${GREY_2}`,
  fontFamily: NTA_LIGHT,
  fontWeight: 400,
  fontSize: FONT_SIZE.SIZE_16,
  lineHeight: LINE_HEIGHT.SIZE_16,
  padding: '0.63158em 1.05263em 0.47368em 0',
  textAlign: alignRight ? 'right' : 'left',
  textTransform: 'none',
  ':last-child': {
    paddingRight: 0,
  },
  [MEDIA_QUERIES.LARGESCREEN]: {
    fontSize: FONT_SIZE.SIZE_19,
    lineHeight: LINE_HEIGHT.SIZE_19,
  },
}));

const Td = ({ children, ...props }) => (
  <TdInner {...props}>
    {children}
  </TdInner>
);

Td.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Td;
