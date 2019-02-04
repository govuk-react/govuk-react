import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled('div')({
  verticalAlign: 'baseline',
});
const IconContainer = styled('span')({
  width: '36px',
  maxHeight: '27px',
  display: 'inline-block',
  marginRight: '7px',
});
const TitleContainer = styled('span')({
  display: 'inline-block',
});

const IconTitle = ({ icon, children }) => (
  <Container>
    <IconContainer>{icon}</IconContainer>
    <TitleContainer>{children}</TitleContainer>
  </Container>
);

IconTitle.propTypes = {
  icon: PropTypes.node,
  children: PropTypes.node,
};
IconTitle.defaultProps = {
  icon: undefined,
  children: undefined,
};

export default IconTitle;
