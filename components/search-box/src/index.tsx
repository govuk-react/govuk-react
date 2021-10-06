// https://components.publishing.service.gov.uk/component-guide/search
import type { WithWhiteSpaceProps } from '@govuk-react/lib';

import * as React from 'react';
import styled from 'styled-components';
import { LIGHT_BLUE, GREY_2, WHITE, YELLOW } from 'govuk-colours';
import { NTA_LIGHT } from '@govuk-react/constants';

import { Search } from '@govuk-react/icons';
import { spacing } from '@govuk-react/lib';

// css normalize is hiding the input:search clear SearchButton
const Input = styled('input')({
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

Input.defaultProps = {
  type: 'search',
};

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

const Button = (props) => (
  <SearchButton title="Search" {...props}>
    <Search fill={WHITE} />
  </SearchButton>
);

const StyledSearchBox = styled('div')(
  {
    boxSizing: 'border-box',
    display: 'flex',
    width: '100%',
    background: WHITE,
  },
  spacing.withWhiteSpace({ marginBottom: 0 })
);

/**
 * A search box with attached submit button.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/search-box
 * - https://components.publishing.service.gov.uk/component-guide/search
 */
export const SearchBox: SearchBoxType = React.forwardRef<HTMLDivElement, SearchBoxProps>((props, ref) => (
  <StyledSearchBox {...props} ref={ref} />
));

interface SearchBoxProps extends React.HTMLAttributes<HTMLDivElement>, WithWhiteSpaceProps {}

export interface SearchBoxType<T = HTMLDivElement>
  extends React.ForwardRefExoticComponent<SearchBoxProps & React.RefAttributes<T>> {
  Input?: React.ElementType;
  Button?: React.ElementType;
}

SearchBox.Input = Input;
SearchBox.Button = Button;

SearchBox.displayName = 'SearchBox';
SearchBox.Input.displayName = 'SearchBox.Input';
SearchBox.Button.displayName = 'SearchBox.Button';

export default SearchBox;
