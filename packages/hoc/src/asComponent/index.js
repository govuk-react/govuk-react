import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';

const asComponent = (Component) => {
  const RecomposedComponent = props => (
    <Component {...props} css={[props.className]}>{props.children}</Component>
  );

  RecomposedComponent.propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
      .isRequired,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
    className: PropTypes.string,
  };

  RecomposedComponent.defaultProps = {
    onClick: undefined,
    disabled: undefined,
    className: undefined,
  };

  const StyledHoc = glamorous(RecomposedComponent)({
    border: '2px dashed red',
  });

  return StyledHoc;
};

export default asComponent;
