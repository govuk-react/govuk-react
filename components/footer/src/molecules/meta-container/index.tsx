import * as React from 'react';

import Meta from '../../atoms/meta';
import MetaItem from '../../atoms/meta-item';
import Licence from '../../atoms/licence';
import Copyright from '../../atoms/copyright';

const MetaContainer: React.FC<MetaContainerProps> = ({ children, copyright, licence }: MetaContainerProps) => {
  return (
    <Meta>
      <MetaItem grow>
        {children}
        {licence}
      </MetaItem>
      {copyright && (
        <MetaItem>
          <Copyright {...copyright} />
        </MetaItem>
      )}
    </Meta>
  );
};

interface MetaContainerProps {
  /**
   * Meta content
   * Usually <Footer.MetaLinks /> and/or <Footer.MetaCustom />
   */
  children?: React.ReactNode;
  /**
   * Footer copyright
   */
  copyright?: {
    text?: string;
    image?: {
      src: string;
      width: number;
      height: number;
    };
    link?: string;
  };
  /**
   * Licence content
   */
  licence?: false | string | React.ReactNode;
}

MetaContainer.defaultProps = {
  children: undefined,
  copyright: undefined,
  licence: <Licence />,
};

export default MetaContainer;
