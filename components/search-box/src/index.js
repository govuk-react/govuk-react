// https://govuk-static.herokuapp.com/component-guide/search

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { LIGHT_BLUE, GREY_2, WHITE, YELLOW } from 'govuk-colours';
import { NTA_LIGHT } from '@govuk-react/constants';

import { Search } from '@govuk-react/icons';
import { spacing } from '@govuk-react/lib';

const SearchBoxWrapper = styled('div')(
  {
    boxSizing: 'border-box',
    display: 'flex',
    width: '100%',
    background: WHITE,
  },
  spacing.withWhiteSpace({ marginBottom: 0 })
);

// css normalize is hiding the input:search clear SearchButton
const InputSearchBox = styled('input')({
  width: '100%',
  height: '40px',
  padding: '6px',
  margin: 0,
  border: `solid 1px ${GREY_2}`,
  borderRight: 0,
  boxSizing: 'border-box',
  fontFamily: NTA_LIGHT,
  fontWeight: 400,
  textTransform: 'none',
  fontSize: '16px',
  lineHeight: '1.75',
  background: WHITE,
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

const SearchButton = styled('button')({
  backgroundColor: LIGHT_BLUE,
  border: 0,
  display: 'block',
  color: WHITE,
  position: 'relative',
  padding: '10px',
  width: '45px',
  height: '40px',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '2px 50%',
  textIndent: '-999em',
  overflow: 'hidden',
  ':focus': {
    outline: `3px solid ${YELLOW}`,
    outlineOffset: 0,
  },
});

/**
 *
 * ### Usage
 *
 * Simple
 * ```jsx
 * import Layout from '@govuk-react/layout';
 * import GridRow from '@govuk-react/grid-row';
 * import GridCol from '@govuk-react/grid-col';
 *
 * <Layout>
 *    <GridRow>
 *      <GridCol>
 *        <SearchBox placeholder="Search GOV.UK">SearchBox example</SearchBox>
 *      </GridCol>
 *    </GridRow>
 *  </Layout>
 * ```
 *
 * ### References:
 * - https://govuk-static.herokuapp.com/component-guide/search
 *
 */
const SearchBox = ({ placeholder, ...props }) => (
  <SearchBoxWrapper {...props}>
    <InputSearchBox type="search" placeholder={placeholder} />
    <SearchButton title="Search">
      <Search fill={WHITE} />
    </SearchButton>
  </SearchBoxWrapper>
);

SearchBox.defaultProps = {
  placeholder: undefined,
};

SearchBox.propTypes = {
  placeholder: PropTypes.string,
};

export default SearchBox;
