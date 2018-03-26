// TODO INSERT A COMMENT REFERENCE TO EXTERNAL URL IF POSSIBLE

import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import { Spinner } from '@govuk-react/icons';
import { GREY_1 } from 'govuk-colours';
import hexRgb from 'hex-rgb';

const LoadingBoxInner = glamorous.div(({ backgroundColor }) => ({
  position: 'absolute',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  overflow: 'hidden',
  height: '100%',
  width: '100%',
  backgroundColor,
}));

const LoadingBox = ({
  children,
  backgroundColor,
  backgroundColorOpacity,
  loading,
  timeIn,
  timeOut,
}) => (
  <LoadingBoxInner
    backgroundColor={`rgba(${hexRgb(backgroundColor).red},${hexRgb(backgroundColor).green},${hexRgb(backgroundColor).blue},${backgroundColorOpacity})`}
    loading={loading}
    timeIn={timeIn}
    timeOut={timeOut}
  >
    {children}
  </LoadingBoxInner>
);

LoadingBox.defaultProps = {
  backgroundColor: GREY_1,
  backgroundColorOpacity: 0.8,
  loading: true,
  timeIn: 500,
  timeOut: 500,
};

LoadingBox.propTypes = {
  children: PropTypes.node.isRequired,
  // hex colour 3 or 6 characters with or without hash
  backgroundColor: PropTypes.string,
  backgroundColorOpacity: PropTypes.number,
  loading: PropTypes.bool,
  // number in milliseconds
  timeIn: PropTypes.number,
  timeOut: PropTypes.number,
};

export default LoadingBox;
