import React from 'react';
import glamorous from 'glamorous';
import { MEDIA_QUERIES } from '@govuk-react/constants';

const ControlledLabel = glamorous.label({
  [MEDIA_QUERIES.LARGESCREEN]: {
    display: 'none',
  },
});

const ControlledInput = glamorous.input({
  position: 'absolute',
  top: '-999em',
  ':checked + ul': {
    display: 'flex',
  },
  [MEDIA_QUERIES.LARGESCREEN]: {
    display: 'none',
  },
});

const MenuButton = () => (
  <React.Fragment>
    <ControlledLabel htmlFor="dingus">
      Menu <span>&rsaquo;</span>
    </ControlledLabel>
    <ControlledInput id="dingus" type="checkbox" />
  </React.Fragment>
);

export default MenuButton;
