// Deprecation HOC care of:
// https://whawker.github.io/2016/07/15/deprecating-react-components-with-higher-order-components.html
import React, { useEffect } from 'react';

const deprecate =
  (InnerComponent, msg = '') =>
  (props) => {
    useEffect(() => {
      if (process.env.NODE_ENV !== 'production') {
        // eslint-disable-next-line no-console
        console.warn(`${InnerComponent.name} is deprecated`, msg);
      }
    }, []);

    // Render the wrapped component with the same props
    return <InnerComponent {...props} />;
  };

export default deprecate;
