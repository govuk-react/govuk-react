import React from 'react';
import glamorous from 'glamorous';

const Container = glamorous.div({
  // display: 'flex',
  // alignItems: 'center',
  verticalAlign: 'baseline',
});
const IconContainer = glamorous.span({
  width: '36px',
  maxHeight: '27px',
  display: 'inline-block',
  marginRight: '7px',
});
const TitleContainer = glamorous.span({
  display: 'inline-block',
});

const IconTitle = ({ icon, children }) => (
  <Container>
    <IconContainer>{icon}</IconContainer>
    <TitleContainer>{children}</TitleContainer>
  </Container>
);

export default IconTitle;
