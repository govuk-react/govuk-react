import React from 'react';
import PropTypes from 'prop-types';
import { withDocs } from 'storybook-readme';

// Example taken from https://github.com/tuchk4/storybook-readme/blob/master/packages/example-react/stories/index.js
const PreviewComponent = ({ children }) =>
  navigator.userAgent.match(/Chromatic/) ? (
    children
  ) : (
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

const withDocsCustom = (readme = '', ...rest) =>
  navigator.userAgent.match(/Chromatic/) ? rest.children : withDocs({ PreviewComponent })(readme, ...rest);

PreviewComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default withDocsCustom;
