import React from "react";
import PropTypes from "prop-types";
import glamorous from "glamorous";
import { BLUE, PURPLE, YELLOW } from "govuk-colours";

const AnchorWrapper = glamorous.span({
  "> a": {
    color: BLUE,
    padding: "3px",
    margin: "-3px",
    outlineColor: "transparent",
    display: "inline-block",
    textDecoration: "underline",
    ":focus": {
      backgroundColor: YELLOW,
      outline: `3px solid ${YELLOW}`
    },
    ":visited": {
      color: PURPLE
    }
  }
});

const asAnchor = AnchorType => {
  const component = props => (
    <AnchorWrapper>
      <AnchorType {...props}>{props.children}</AnchorType>
    </AnchorWrapper>
  );

  component.propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
      .isRequired,
    onClick: PropTypes.func,
    disabled: PropTypes.bool
  };

  component.defaultProps = {
    onClick: undefined,
    disabled: undefined
  };

  return component;
};

export default asAnchor;
