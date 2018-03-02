import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

import {
  SPACING,
  MEDIA_QUERIES,
} from '../../constants/index';

const SectionInner = glamorous.div({
  boxSizing: 'border-box',
  padding: `0 ${SPACING.SCALE_2}`,
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '960px',
  margin: '0 auto',
  width: '100%',
  '> *': {
    margin: `${SPACING.SCALE_2} 0`,
  },
  [MEDIA_QUERIES.LARGESCREEN]: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: SPACING.SCALE_3,
  },
});

const Section = ({ children }) => (
  <SectionInner>{children}</SectionInner>
);

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Section;
