// https://github.com/alphagov/govuk-frontend/blob/master/src/components/input/_input.scss
// https://github.com/alphagov/govuk_elements/blob/master/assets/sass/elements/_forms.scss

import React from "react";
import PropTypes from "prop-types";

import Label from "../Label/index";
import LabelText from "../LabelText/index";
import ErrorText from "../ErrorText/index";
import HintText from "../HintText/index";
import Input from "../Input/index";

// const InputField = ({ children, errorText, hintText, onChange }) => (

class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { value: "" };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
    // console.log(this.state);
  }

  render() {
    const value = this.state.value;
    return (
      <Label errorText={this.props.errorText}>
        <LabelText errorText={this.props.errorText}>
          {this.props.children}
        </LabelText>
        {this.props.hintText ? (
          <HintText>{this.props.hintText}</HintText>
        ) : (
          <span />
        )}
        {this.props.errorText ? (
          <ErrorText errorText={this.props.errorText}>
            {this.props.errorText}
          </ErrorText>
        ) : (
          <span />
        )}
        <Input
          type="text"
          value={this.state.value}
          errorText={this.props.errorText}
          onChange={this.props.onChange}
        />
      </Label>
    );
  }
}

InputField.defaultProps = {
  hintText: null,
  errorText: null,
  onChange: undefined
};

InputField.propTypes = {
  children: PropTypes.node.isRequired,
  hintText: PropTypes.string,
  errorText: PropTypes.string,
  onChange: PropTypes.func
};

export default InputField;
