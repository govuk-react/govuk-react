import React, { SVGProps as SVGPropsBase } from 'react';
import styled from 'styled-components';

export interface SVGProps extends SVGPropsBase<SVGSVGElement> {
  children?: React.ReactNode;
  title?: string;
  fill?: string;
  width?: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const StyledSvg = styled('svg')<any>({
  display: 'block',
});

const SVG: React.FC<SVGProps> = ({ children, title, fill = 'currentColor', width = '100%', ...rest }: SVGProps) => (
  <StyledSvg version="1.1" height="100%" fill={fill} width={width} {...rest}>
    <title>{title}</title>
    {children}
  </StyledSvg>
);

export default SVG;
