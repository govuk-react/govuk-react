import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import { BLUE } from 'govuk-colours';
import {
  RESPONSIVE_0,
  RESPONSIVE_1,
  RESPONSIVE_2,
  RESPONSIVE_3,
  RESPONSIVE_4,
  RESPONSIVE_5,
  RESPONSIVE_6,
  RESPONSIVE_7,
  RESPONSIVE_8,
  RESPONSIVE_9,
  MEDIA_QUERIES,
} from '@govuk-react/constants';

const spacingMap = [
  RESPONSIVE_0,
  RESPONSIVE_1,
  RESPONSIVE_2,
  RESPONSIVE_3,
  RESPONSIVE_4,
  RESPONSIVE_5,
  RESPONSIVE_6,
  RESPONSIVE_7,
  RESPONSIVE_8,
  RESPONSIVE_9,
];

const asWhitespace = (Component, marginBottom) => {
  const Whitespace = props => (
    <Component marginBottom={marginBottom} {...props}>{props.children}</Component>
  );

  Whitespace.propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
      .isRequired,
  };

  const StyledHoc = glamorous(Whitespace)({
    border: `1px solid ${BLUE}`,
    marginBottom: spacingMap[marginBottom].mobile || 0,
    [MEDIA_QUERIES.LARGESCREEN]: {
      marginBottom: spacingMap[marginBottom].tablet || 0,
    },
  });

  return StyledHoc;
};

export default asWhitespace;
