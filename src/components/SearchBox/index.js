// https://govuk-static.herokuapp.com/component-guide/search

import React from "react";
import PropTypes from "prop-types";
import glamorous from "glamorous";

import { WHITE } from "govuk-colours";

const SearchBoxWrapper = glamorous.div({
  boxSizing: "border-box",
  display: "table",
  width: "100%",
  background: WHITE
});

const InputSearchBox = glamorous.input({
  color: "blue"
});

const SearchButton = glamorous.button({
  color: "red"
});

const SearchBox = ({ placeholder }) => (
  <SearchBoxWrapper>
    <InputSearchBox placeholder={placeholder} />
    <SearchButton>Search</SearchButton>
  </SearchBoxWrapper>
);

SearchBox.defaultProps = {
  placeholder: undefined
};

SearchBox.propTypes = {
  placeholder: PropTypes.string
};

export default SearchBox;
