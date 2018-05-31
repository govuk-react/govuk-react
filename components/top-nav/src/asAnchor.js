import React from 'react';
import PropTypes from 'prop-types';

const asAnchor = (AnchorType) => {
  const Anchor = props => (
    <AnchorType {...props}>{props.children}</AnchorType>
  );

  Anchor.propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
      .isRequired,
  };

  return Anchor;
};

export default asAnchor;
