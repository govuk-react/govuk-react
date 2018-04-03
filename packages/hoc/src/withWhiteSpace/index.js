import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import { SPACING_MAP, MEDIA_QUERIES } from '@govuk-react/constants';

const withWhiteSpace = config => (Component) => {
  const Whitespace = props => <Component {...props}>{props.children}</Component>;

  Whitespace.propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
      .isRequired,
  };

  const StyledHoc = glamorous(Whitespace)({
    marginBottom: config && config.marginBottom ? SPACING_MAP[config.marginBottom].mobile : 0,
    [MEDIA_QUERIES.LARGESCREEN]: {
      marginBottom: config && config.marginBottom ? SPACING_MAP[config.marginBottom].tablet : 0,
    },
    ':last-of-type': {
      marginBottom: config && config.disableLastChildMargin ? 0 : undefined,
      [MEDIA_QUERIES.LARGESCREEN]: {
        marginBottom: config && config.disableLastChildMargin ? 0 : undefined,
      },
    },
  });

  return StyledHoc;
};

export default withWhiteSpace;
