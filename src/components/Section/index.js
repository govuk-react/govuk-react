import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

import {
  SPACING,
  MEDIA_QUERIES,
} from '../../constants/index';

const SectionInner = glamorous.div({
  boxSizing: 'border-box',
  padding: SPACING.SCALE_3,
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  [MEDIA_QUERIES.LARGESCREEN]: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

const Section = ({ children }) => (
  <SectionInner>{children}</SectionInner>
);

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Section;
