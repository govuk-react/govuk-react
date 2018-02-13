// TODO INSERT A COMMENT REFERENCE TO EXTERNAL URL IF POSSIBLE

// import React from "react";
// import PropTypes from "prop-types";
import glamorous from "glamorous";
import { Link } from "react-router";

const StyledLink = glamorous(Link)({
  display: "inline-block",
  color: "red",
  marginRight: 20,
  marginBottom: 20,
  ".active": {
    color: "green",
    fontSize: "1.2em"
  }
});

// const StyledLink = ({ label, link }) => (
//   <StyledLinkInner to={link} label={label} />
// );
// StyledLink.propTypes = {
//   label: PropTypes.string.isRequired,
//   link: PropTypes.string.isRequired
// };

export default StyledLink;
