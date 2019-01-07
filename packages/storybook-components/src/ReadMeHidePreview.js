import React from 'react';
import PropTypes from 'prop-types';
import { withDocs } from 'storybook-readme';

const PreviewComponent = ({ children }) => (
  <div
    style={{
      display: 'none',
    }}
  >
    {children}
  </div>
);

const ReadMeHidePreview = (readme, ...rest) => withDocs({ PreviewComponent })(readme, ...rest);

PreviewComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ReadMeHidePreview;
