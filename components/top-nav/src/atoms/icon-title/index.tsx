import * as React from 'react';
import styled from 'styled-components';

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
  fontWeight: 700,
});

const IconTitle: React.FC<IconTitleProps> = ({ icon, children }: IconTitleProps) => (
  <Container>
    <IconContainer>{icon}</IconContainer>
    <TitleContainer>{children}</TitleContainer>
  </Container>
);

export interface IconTitleProps {
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

IconTitle.displayName = 'TopNav.IconTitle';

export default IconTitle;
