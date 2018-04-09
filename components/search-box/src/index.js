// https://govuk-static.herokuapp.com/component-guide/search

import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import { LIGHT_BLUE, WHITE, YELLOW } from 'govuk-colours';

import { Search } from '@govuk-react/icons';
import { withWhiteSpace } from '@govuk-react/hoc';

const SearchBoxWrapper = glamorous.div({
  boxSizing: 'border-box',
  display: 'flex',
  width: '100%',
  background: WHITE,
});

// css normalize is hiding the input:search clear SearchButton
const InputSearchBox = glamorous.input({
  width: '100%',
  height: '40px',
  padding: '6px',
  margin: 0,
  border: 'solid 1px #bfc1c3',
  borderRight: 0,
  boxSizing: 'border-box',
  fontFamily: "'nta', Arial, sans-serif",
  fontWeight: 400,
  textTransform: 'none',
  fontSize: '16px',
  lineHeight: '1.75',
  background: '#fff',
  borderRadius: 0,
  WebkitAppearance: 'none',
  ':focus': {
    marginRight: '3px',
    outline: `3px solid ${YELLOW}`,
    outlineOffset: 0,
    ' ~ button': {
      width: '46px',
    },
  },
});

const SearchButton = glamorous.button({
  backgroundColor: LIGHT_BLUE,
  border: 0,
  display: 'block',
  color: '#fff',
  position: 'relative',
  padding: '10px',
  width: '45px',
  height: '40px',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '2px 50%',
  textIndent: '-5000px',
  overflow: 'hidden',
  ':focus': {
    outline: `3px solid ${YELLOW}`,
    outlineOffset: 0,
  },
});

const SearchBox = ({ placeholder, className }) => (
  <SearchBoxWrapper className={className}>
    <InputSearchBox type="search" placeholder={placeholder} />
    <SearchButton title="Search">
      <Search colour="#fff" />
    </SearchButton>
  </SearchBoxWrapper>
);

SearchBox.defaultProps = {
  placeholder: undefined,
  className: undefined,
};

SearchBox.propTypes = {
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

export default withWhiteSpace({ marginBottom: 0 })(SearchBox);
