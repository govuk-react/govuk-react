import React, { SVGProps as SVGPropsBase } from 'react';
import styled from 'styled-components';

export interface SVGProps extends SVGPropsBase<SVGSVGElement> {
  children?: React.ReactNode;
  title?: string;
  fill?: string;
  width?: string;
}

const StyledSvg = styled('svg')<any>({
  display: 'block',
});

const SVG: React.FC<SVGProps> = ({ children, title, ...rest }: SVGProps) => (
  <StyledSvg version="1.1" height="100%" {...rest}>
    <title>{title}</title>
    {children}
  </StyledSvg>
);
SVG.defaultProps = {
  children: undefined,
  title: undefined,
  fill: 'currentColor',
  width: '100%',
};

export default SVG;
