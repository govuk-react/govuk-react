import * as React from 'react';

import SVG, { SVGProps } from '../SVGBase/index';

interface ArrowLeftProps extends SVGProps {
  title?: string;
  fill?: string;
}

const ArrowLeft: React.FC<ArrowLeftProps> = ({ fill, title, ...rest }: ArrowLeftProps) => (
  <SVG viewBox="-0.2 0 17 14" title={title} fill={fill} {...rest}>
    <path d="m6.5938-0.0078125-6.7266 6.7266 6.7441 6.4062 1.377-1.449-4.1856-3.9768h12.896v-2h-12.984l4.2931-4.293-1.414-1.414z" />
  </SVG>
);

ArrowLeft.defaultProps = {
  title: 'arrow left',
  fill: 'currentColor',
};

export default ArrowLeft;
