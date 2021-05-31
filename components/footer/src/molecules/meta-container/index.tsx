import React from 'react';
import PropTypes from 'prop-types';

import Meta from '../../atoms/meta';
import MetaItem from '../../atoms/meta-item';
import Licence from '../../atoms/licence';
import Copyright from '../../atoms/copyright';

const MetaContainer = ({ children, copyright }) => {
  return (
    <Meta>
      <MetaItem grow>
        {children}
        <Licence />
      </MetaItem>
      {copyright && (
        <MetaItem>
          <Copyright {...copyright} />
        </MetaItem>
      )}
    </Meta>
  );
};

MetaContainer.propTypes = {
  /**
   * Meta content
   * Usually <Footer.MetaLinks /> and/or <Footer.MetaCustom />
   */
  children: PropTypes.node,
  /**
   * Footer copyright
   */
  copyright: PropTypes.shape({
    text: PropTypes.string,
    image: PropTypes.shape({
      src: PropTypes.string.isRequired,
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
    }),
    link: PropTypes.string,
  }),
};

MetaContainer.defaultProps = {
  children: undefined,
  copyright: undefined,
};

export default MetaContainer;
