import React from 'react';
import PropTypes from 'prop-types';
import { withDocs } from 'storybook-readme';

const WithDocsCustom = withDocs({
  PreviewComponent: ({ children }) => (
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
  ),
});

WithDocsCustom.propTypes = {
  children: PropTypes.node.isRequired,
};

export default WithDocsCustom;
