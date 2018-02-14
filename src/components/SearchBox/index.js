// https://govuk-static.herokuapp.com/component-guide/search

import React from "react";
import PropTypes from "prop-types";
import glamorous from "glamorous";

import { LIGHT_BLUE, WHITE, YELLOW } from "govuk-colours";

const SearchBoxWrapper = glamorous.div({
  boxSizing: "border-box",
  display: "flex",
  width: "100%",
  background: WHITE
});

// css normalize is hiding the input:search clear SearchButton
const InputSearchBox = glamorous.input({
  width: "100%",
  height: "40px",
  padding: "6px",
  margin: 0,
  border: "solid 1px #bfc1c3",
  borderRight: 0,
  boxSizing: "border-box",
  fontFamily: "'nta', Arial, sans-serif",
  fontWeight: 400,
  textTransform: "none",
  fontSize: "16px",
  lineHeight: "1.75",
  background: "#fff",
  borderRadius: 0,
  WebkitAppearance: "none",
  ":focus": {
    marginRight: "3px",
    outline: `3px solid ${YELLOW}`,
    outlineOffset: 0,
    " ~ button": {
      width: "46px"
    }
  }
});

const SearchButton = glamorous.button({
  backgroundColor: LIGHT_BLUE,
  border: 0,
  display: "block",
  color: "#fff",
  position: "relative",
  padding: "0",
  width: "45px",
  height: "40px",
  backgroundImage:
    "url(https://govuk-static.herokuapp.com/static/search-button-ca89b2a79f944909ceb7370d3f0b78811d32b96e883348fcd8886f63dd619585.png)",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "2px 50%",
  textIndent: "-5000px",
  overflow: "hidden",
  ":focus": {
    outline: `3px solid ${YELLOW}`,
    outlineOffset: 0
  }
});

const SearchBox = ({ placeholder }) => (
  <SearchBoxWrapper>
    <InputSearchBox type="search" placeholder={placeholder} />
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
