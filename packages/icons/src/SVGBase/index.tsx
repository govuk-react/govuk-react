import React, { SVGProps as SVGPropsBase } from 'react';

export interface SVGProps extends SVGPropsBase<SVGSVGElement> {
  children?: React.ReactNode;
  title?: string;
  fill?: string;
  width?: string;
}

const SVG: React.FC<SVGProps> = ({ children, title, ...rest }: SVGProps) => (
  <svg version="1.1" height="100%" style={{ display: 'block' }} {...rest}>
    <title>{title}</title>
    {children}
  </svg>
);
SVG.defaultProps = {
  children: undefined,
  title: undefined,
  fill: 'currentColor',
  width: '100%',
};

export default SVG;
