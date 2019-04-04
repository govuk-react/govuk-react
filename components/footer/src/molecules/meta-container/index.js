import React from 'react';
import PropTypes from 'prop-types';

import Meta from '../../atoms/meta';
import MetaItem from '../../atoms/meta-item';
import Licence from '../../atoms/licence';
import Copyright from '../../atoms/copyright';

const MetaContainer = ({ children }) => {
  return (
    <Meta>
      <MetaItem grow>
        {children}
        <Licence />
      </MetaItem>
      <MetaItem>
        <Copyright />
      </MetaItem>
    </Meta>
  );
};

MetaContainer.propTypes = {
  /**
   * Meta content
   * Usually <Footer.MetaLinks /> and or <Footer.MetaCustom />
   */
  children: PropTypes.node,
};

MetaContainer.defaultProps = {
  children: undefined,
};

export default MetaContainer;
