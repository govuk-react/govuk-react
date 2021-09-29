import React, { SVGProps as SVGPropsBase } from 'react';

export interface SVGProps extends SVGPropsBase<SVGSVGElement> {
  children?: React.ReactNode;
  title?: string;
  fill?: string;
  width?: string;
}

const SVG = ({ children = undefined, fill = 'currentColor', title = undefined, ...rest }: SVGProps) => (
  <svg version="1.1" fill={fill} width="100%" height="100%" style={{ display: 'block' }} {...rest}>
    <title>{title}</title>
    {children}
  </svg>
);

export default SVG;
