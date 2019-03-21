// Deprecation HOC care of:
// https://whawker.github.io/2016/07/15/deprecating-react-components-with-higher-order-components.html
import React, { Component } from 'react';

const deprecate = (InnerComponent, msg = '') =>
  class extends Component {
    componentWillMount() {
      if (process.env.NODE_ENV !== 'production') {
        // eslint-disable-next-line no-console
        console.warn(`${InnerComponent.name} is deprecated`, msg);
      }
    }

    render() {
      // Render the wrapped component with the same props
      return <InnerComponent {...this.props} />;
    }
  };

export default deprecate;
