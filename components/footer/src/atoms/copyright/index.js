import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from '@govuk-react/link';
import { FOOTER_LINK, FOOTER_LINK_HOVER } from 'govuk-colours';

const StyledCopyright = styled(Link)(
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
      backgroundImage: `url(${image.source})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '50% 0%',
      backgroundSize: `${image.width}px ${image.height}px`,
    }
);

const Copyright = ({ text, image, link }) => {
  return (
    <StyledCopyright href={link} image={image}>
      © {text}
    </StyledCopyright>
  );
};

Copyright.propTypes = {
  text: PropTypes.string,
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }),
  link: PropTypes.string,
};

Copyright.defaultProps = {
  text: undefined,
  image: undefined,
  link: undefined,
};

export default Copyright;
