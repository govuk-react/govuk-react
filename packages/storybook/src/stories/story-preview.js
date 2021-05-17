import React from 'react';
import PropTypes from 'prop-types';

const StoryPreview = ({ children }) => (
  <div
    style={{
      textAlign: 'left',
      padding: '25px',
      margin: '25px 0',
      boxShadow: '0 0 40px rgba(0, 0, 0, 0.1)',
    }}
  >
    {children}
  </div>
);

StoryPreview.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StoryPreview;
