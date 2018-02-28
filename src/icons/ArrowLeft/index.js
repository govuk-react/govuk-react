import React from "react";
import PropTypes from "prop-types";

const ArrowLeft = ({ colour, title }) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="17"
    height="13"
    style={{ display: "block" }}
    fill={colour}
    viewBox="0 0 17 13"
  >
    <title>{title}</title>
    <path d="m6.5938-0.0078125-6.7266 6.7266 6.7441 6.4062 1.377-1.449-4.1856-3.9768h12.896v-2h-12.984l4.2931-4.293-1.414-1.414z" />
  </svg>
);

ArrowLeft.propTypes = {
  colour: PropTypes.string,
  title: PropTypes.string
};

ArrowLeft.defaultProps = {
  colour: "inherit",
  title: "arrow left"
};

export default ArrowLeft;
