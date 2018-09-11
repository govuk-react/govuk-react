import React from 'react';
import PropTypes from 'prop-types';
import { withDocs } from 'storybook-readme';

const PreviewComponent = ({ children }) => (
  navigator.userAgent.match(/Chromatic/) ? children :
  <div
    style={{
      display: 'none',
    }}
  >
    {children}
  </div>
);

const ReadMeHidePreview = (readme, ...rest) => withDocs({ PreviewComponent })(navigator.userAgent.match(/Chromatic/) ? '' : readme, ...rest);

PreviewComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ReadMeHidePreview;
