import * as React from 'react';

import SVG, { SVGProps } from '../SVGBase/index';

interface IconImportantProps extends SVGProps {
  title?: string;
  fill?: string;
}

const IconImportant: React.FC<IconImportantProps> = ({ fill, title, ...rest }: IconImportantProps) => (
  <SVG viewBox="0 0 35.000000 35.000000" preserveAspectRatio="xMidYMid meet" title={title} fill={fill} {...rest}>
    <g transform="translate(0.000000,35.000000) scale(0.100000,-0.100000)">
      <path
        d="M100 332 c-87 -48 -125 -155 -82 -232 48 -87 155 -125 232 -82 87 48
125 155 82 232 -48 87 -155 125 -232 82z m100 -122 c0 -53 -2 -60 -20 -60 -18
0 -20 7 -20 60 0 53 2 60 20 60 18 0 20 -7 20 -60z m0 -111 c0 -12 -7 -19 -20
-19 -19 0 -28 28 -14 43 11 11 34 -5 34 -24z"
      />
    </g>
  </SVG>
);

IconImportant.defaultProps = {
  title: 'icon important',
  fill: 'currentColor',
};

export default IconImportant;
