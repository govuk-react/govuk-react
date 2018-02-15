// https://govuk-elements.herokuapp.com/typography/

import React from "react";
import PropTypes from "prop-types";
import glamorous from "glamorous";

import { BLUE, PURPLE, YELLOW } from "govuk-colours";

const AnchorStyle = glamorous.span({
  "> a": {
    border: "1px solid red"
  }
});

class Anchor extends React.Component {
  state = {
    hyperlink: this.props.hyperLink,
    target: this.props.target,
    component: this.props.component,
    label: this.props.label
  };

  render() {
    let cat = null;
    if (this.props.component) {
      cat = this.props.component;
    } else {
      cat = (
        <div>{`${this.props.children} (href: ${this.props.hyperLink}) (label: ${this.props.label}) (target: ${this.props.target})`}</div>
      );
    }
    return (
      <AnchorStyle>
        {cat}
        {/* {this.props.children(this.state)} */}
      </AnchorStyle>
    );
  }
}

// {anchor => (
//   <div>
//     <h1> this thing is {anchor.hyperlink}</h1>
//   </div>
// )}
// const AnchorInner = glamorous.span({
//   color: BLUE,
//   padding: "3px",
//   margin: "-3px",
//   outlineColor: "transparent",
//   display: "inline-block",
//   textDecoration: "underline",
//   ":focus": {
//     backgroundColor: YELLOW,
//     outline: `3px solid ${YELLOW}`
//   },
//   ":visited": {
//     color: PURPLE
//   }
// });

// const AnchorThing = glamorous.a({
//   border: "1px solid red"
// });

// const Anchor = ({ hyperLink, children, target, component }) => (
//   <AnchorInner>
//     {!component && (
//       <AnchorThing href={hyperLink} target={target}>
//         {children}
//       </AnchorThing>
//     )}
//     {component}
//   </AnchorInner>
// );

// Anchor.defaultProps = {
//   target: undefined,
//   component: undefined
// };

// Anchor.propTypes = {
//   children: PropTypes.node.isRequired,
//   hyperLink: PropTypes.string.isRequired,
//   target: PropTypes.string,
//   component: PropTypes.node
// };

export default Anchor;
