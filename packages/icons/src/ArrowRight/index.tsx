import * as React from 'react';

import SVG, { SVGProps } from '../SVGBase/index';

interface ArrowRightProps extends SVGProps {
  title?: string;
  fill?: string;
}

const ArrowRight: React.FC<ArrowRightProps> = ({ fill, title, ...rest }: ArrowRightProps) => (
  <SVG viewBox="0 0 17 14" title={title} fill={fill} {...rest}>
    <path d="m10.107-0.0078125-1.4136 1.414 4.2926 4.293h-12.986v2h12.896l-4.1855 3.9766 1.377 1.4492 6.7441-6.4062-6.7246-6.7266z" />
  </SVG>
);

ArrowRight.defaultProps = {
  title: 'arrow right',
  fill: 'currentColor',
};

export default ArrowRight;
