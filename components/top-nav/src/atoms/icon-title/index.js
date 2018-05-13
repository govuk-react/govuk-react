import React from 'react';
import styled from 'react-emotion';

const Container = styled('div')({
  // display: 'flex',
  // alignItems: 'center',
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

export default IconTitle;
