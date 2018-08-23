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

const ReadMeHidePreview = withDocs({
  PreviewComponent,
});

PreviewComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ReadMeHidePreview;
