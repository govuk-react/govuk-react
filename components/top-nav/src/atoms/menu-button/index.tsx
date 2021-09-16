import React, { MouseEventHandler } from 'react';
import styled from 'styled-components';
import { MEDIA_QUERIES } from '@govuk-react/constants';

// Label to be linked to checkbox in parent component
// in order to provide toggle function of mobile menu
// when javascript is not present.
const Button = styled('label')({
  display: 'flex',
  alignItems: 'center',
  [MEDIA_QUERIES.LARGESCREEN]: {
    display: 'none',
  },
});

const ButtonText = styled('div')({
  cursor: 'default',
  ':hover': {
    textDecoration: 'underline',
  },
});

const ButtonIcon = styled('div')<{ open: boolean }>(({ open }) => ({
  content: '""',
  display: 'inline-block',
  width: '0',
  height: '0',
  borderStyle: 'solid',
  borderColor: 'transparent',
  clipPath: open ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : 'polygon(0% 0%, 50% 100%, 100% 0%)',
  borderWidth: open ? '0 5px 8.66px 5px' : '8.66px 5px 0 5px',
  marginLeft: '5px',
  borderTopColor: 'inherit',
  borderBottomColor: 'inherit',
}));

const MenuButton: React.FC<MenuButtonProps> = ({ title, open, onClick }: MenuButtonProps) => (
  <Button onClick={onClick} htmlFor="govuk-react-menu-button">
    <ButtonText>{title}</ButtonText>
    <ButtonIcon open={open} />
  </Button>
);

interface MenuButtonProps {
  title?: string;
  open?: boolean;
  onClick?: MouseEventHandler<HTMLLabelElement>;
}

MenuButton.defaultProps = {
  title: 'Menu',
  open: false,
  onClick: () => null,
};

export default MenuButton;
