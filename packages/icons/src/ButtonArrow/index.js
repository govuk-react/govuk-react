import React from 'react';
import PropTypes from 'prop-types';

import SVG from '../SVGBase/index';

const ButtonArrow = ({ fill, title, ...rest }) => (
  <SVG viewBox="0 0 706 860" title={title} fill={fill} {...rest}>
    <g>
      <path d="M.152 0h252.993l452.108 430H452.261z" />
      <path fillOpacity="0.5" d="M0 860h252.993L705.1 430H452.108z" />
    </g>
  </SVG>
);

ButtonArrow.propTypes = {
  title: PropTypes.string,
  fill: PropTypes.string,
};

ButtonArrow.defaultProps = {
  title: 'ButtonArrow',
  fill: 'currentColor',
};

export default ButtonArrow;
