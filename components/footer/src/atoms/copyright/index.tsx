import * as React from 'react';
import styled from 'styled-components';
import Link from '@govuk-react/link';
import { FOOTER_LINK, FOOTER_LINK_HOVER } from 'govuk-colours';

const StyledCopyright = styled(Link)<CopyrightProps>(
  {
    display: 'inline-block',
    textAlign: 'center',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    ':link, :visited': {
      color: FOOTER_LINK,
    },
    ':hover': {
      color: FOOTER_LINK_HOVER,
    },
  },
  ({ image }) =>
    image && {
      minWidth: image.width,
      paddingTop: image.height + 10,
      backgroundImage: `url(${image.src})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 0%',
      backgroundSize: `${image.width}px ${image.height}px`,
    }
);

const Copyright: React.FC<CopyrightProps> = ({ text, image, link }: CopyrightProps) => {
  return (
    <StyledCopyright href={link} image={image}>
      © {text}
    </StyledCopyright>
  );
};

export interface CopyrightProps {
  text?: string;
  image?: {
    src: string;
    width: number;
    height: number;
  };
  link?: string;
}
Copyright.defaultProps = {
  text: undefined,
  image: undefined,
  link: undefined,
};

export default Copyright;
