import React from 'react';
import PropTypes from 'prop-types';
import { withDocs } from 'storybook-readme';

// Example taken from https://github.com/tuchk4/storybook-readme/blob/master/packages/example-react/stories/index.js
const PreviewComponent = ({ children }) => (
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

const WithDocsCustom = withDocs({
  PreviewComponent,
});

PreviewComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default WithDocsCustom;
