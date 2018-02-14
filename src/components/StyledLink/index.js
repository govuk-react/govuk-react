// TODO INSERT A COMMENT REFERENCE TO EXTERNAL URL IF POSSIBLE

import React from "react";
import glamorous from "glamorous";
// import { BrowserRouter, Link } from "react-router";
import PhaseBadge from "../PhaseBadge/index";

const StyledLink = glamorous(PhaseBadge)({
  backgroundColor: "red"
});

// const StyledLink = () => (
//   <BrowserRouter>
//     <div>
//       <StyledLinkItem exact to="/">
//         Home
//       </StyledLinkItem>
//       <StyledLinkItem exact to="/somewhere">
//         Somewhere
//       </StyledLinkItem>
//     </div>
//   </BrowserRouter>
// );

export default StyledLink;
