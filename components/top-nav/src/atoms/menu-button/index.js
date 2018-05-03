import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import { MEDIA_QUERIES } from '@govuk-react/constants';

const Label = glamorous.label({
  [MEDIA_QUERIES.LARGESCREEN]: {
    display: 'none',
  },
});

const Input = glamorous.input({
  position: 'absolute',
  top: '-999em',
  // This is reliant on HTML structure of parent component.
  // If we wanted to create a React Native version of this component,
  // we wouldn't be able to rely on HTML syntax for styles.
  // For React Native we would want to lift up state to
  // parent component and/or use context API.
  // However, using this technique, the navigation can be used when
  // server side rendered and with JavaScript disabled.
  // As we are in control of the HTML structure of the parent component,
  // and we do not plan to make a React Native version of this component at
  // the moment, this is ok.
  ':checked + ul': {
    display: 'flex',
  },
  [MEDIA_QUERIES.LARGESCREEN]: {
    display: 'none',
  },
});

const MenuButton = ({ title }) => (
  <React.Fragment>
    {/*
      We can't nest the Input inside the label as we are using the
      adjacent sibling selector to expand and collapse the nav.
      We need to use an ID, and can be fairly suer that there would
      only ever be one instance of this component on the page.
    */}
    <Label htmlFor="govuk-react-menu-button">
      {title} <span>&rsaquo;</span>
    </Label>
    <Input id="govuk-react-menu-button" type="checkbox" />
  </React.Fragment>
);

MenuButton.propTypes = {
  title: PropTypes.string,
};
MenuButton.defaultProps = {
  title: 'Menu',
};

export default MenuButton;
