import React from 'react';
import PropTypes from 'prop-types';
import { withDocs } from 'storybook-readme';

const PreviewComponent = ({ children }) =>
  navigator.userAgent.match(/Chromatic/) ? (
    children
  ) : (
    <div
      style={{
        display: 'none',
      }}
    >
      {children}
    </div>
  );

const readMeHidePreview = (readme = '') =>
  navigator.userAgent.match(/Chromatic/) ? storyFn => storyFn() : withDocs({ PreviewComponent })(readme);

PreviewComponent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default readMeHidePreview;
