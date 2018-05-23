import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Support react-router links
// https://github.com/rexxars/react-markdown/issues/29#issuecomment-231556543
function LinkRenderer({ href, children }) {
  return (
    href.match(/^\//)
      ? <Link to={href}>{children}</Link>
      : <a href={href}>{children}</a>
  );
}

LinkRenderer.propTypes = {
  href: PropTypes.string,
  children: PropTypes.string,
};

LinkRenderer.defaultProps = {
  href: '',
  children: '',
};

export default LinkRenderer;
