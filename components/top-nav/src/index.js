// http://alphagov.github.io/govuk_template/example-proposition-menu.html

import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import Button from '@govuk-react/button';
import UnorderedList from '@govuk-react/unordered-list';
import { Search } from '@govuk-react/icons';
import { H3 } from '@govuk-react/header';
// import ListItem from '@govuk-react/list-item';
import SearchBox from '@govuk-react/search-box';
import { BLUE } from 'govuk-colours';
import {
  FONT_SIZE,
  LINE_HEIGHT,
  MEDIA_QUERIES,
  SPACING,
  NTA_LIGHT,
} from '@govuk-react/constants';

const TopNavWrapper = glamorous.div(({
  bgColor,
  color,
}) => ({
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: bgColor,
  color,
  fontFamily: NTA_LIGHT,
  fontWeight: 400,
  fontSize: FONT_SIZE.SIZE_14,
  lineHeight: LINE_HEIGHT.SIZE_14,
  [MEDIA_QUERIES.LARGESCREEN]: {
    fontSize: FONT_SIZE.SIZE_16,
    lineHeight: LINE_HEIGHT.SIZE_16,
  },
}));

const BottomNavWrapper = glamorous.div({
  borderBottom: `10px solid ${BLUE}`,
  maxWidth: '990px',
  margin: '0 auto',
  width: 'calc(100% - 30px)',
  [MEDIA_QUERIES.LARGESCREEN]: {
    width: 'calc(100% - 60px)',
  },
});

const TopNavInner = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '990px',
  padding: `${SPACING.SCALE_2} ${SPACING.SCALE_3}`,
  boxSizing: 'border-box',
  [MEDIA_QUERIES.LARGESCREEN]: {
    padding: `${SPACING.SCALE_2} ${SPACING.SCALE_5}`,
    flexDirection: 'row',
  },
});

const Company = glamorous.div({
  display: 'flex',
  fontWeight: 800,
  alignItems: 'center',
  justifyContent: 'flex-start',
  fontSize: '30px',
});

const LogoSearchWrapper = glamorous.div({
  display: 'flex',
  justifyContent: 'space-between',
  [MEDIA_QUERIES.LARGESCREEN]: {
    display: 'block',
    paddingRight: SPACING.SCALE_3,
    width: '33.33%',
  },
});

const RightHandSide = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  marginTop: SPACING.SCALE_2,
  [MEDIA_QUERIES.LARGESCREEN]: {
    ' button': {
      display: 'none',
    },
    width: '66.66%',
    paddingLeft: SPACING.SCALE_3,
    marginTop: 0,
  },
});

// const SearchWrapper = glamorous.div({
//   width: '50%',
//   [MEDIA_QUERIES.LARGESCREEN]: {
//     width: '100%',
//   },
// });

const Ul = glamorous.ul(({
  serviceTitle,
}) => ({
  display: 'flex',
  flexWrap: 'wrap',
  margin: 0,
  padding: 0,
  [MEDIA_QUERIES.LARGESCREEN]: {
    paddingTop: serviceTitle ? 0 : '28px',
  },
}));

const Li = glamorous.li(({
  active,
}) => ({
  flex: '1 0 50%',
  width: '100%',
  listStyleType: 'none',
  margin: 0,
  padding: '3px 0',
  borderBottom: '1px solid #2e3133',
  [MEDIA_QUERIES.LARGESCREEN]: {
    borderBottom: 0,
    flex: 'none',
    width: 'auto',
    paddingRight: SPACING.SCALE_3,
  },
  ' a': {
    color: active ? '#1d8feb' : '#fff',
    textDecoration: 'none',
  },
}));

const TopNav = ({
  active,
  bgColor,
  color,
  logo,
  companyTitle,
  serviceTitle,
  search,
  children,
  searchPlaceholder,
  ...props
}) => (
  <React.Fragment>
    <TopNavWrapper active={active} bgColor={bgColor} color={color} {...props}>
      <TopNavInner>
        <LogoSearchWrapper>
          <Company>{logo} {companyTitle}</Company>
          {/*
            search &&
            <SearchWrapper>
              <SearchBox placeholder={searchPlaceholder}>hi</SearchBox>
            </SearchWrapper>
          */}
        </LogoSearchWrapper>
        <RightHandSide>
          {serviceTitle && <H3>{serviceTitle}</H3>}
          {children &&
          <React.Fragment>
            <Button mb={0}>menu</Button>
            <Ul serviceTitle={serviceTitle}>
              {children.length && children.map ? (
                children.map((child, i) => (
                  child && (child.length || child.props)
                    ? <Li key={child.key || i}>{child}</Li>
                    : null
                ))
              ) : (
                <Li>{children}</Li>
              )}
            </Ul>
          </React.Fragment>
          }
        </RightHandSide>
      </TopNavInner>
    </TopNavWrapper>
    <BottomNavWrapper />
  </React.Fragment>
);

TopNav.defaultProps = {
  active: undefined,
  bgColor: '#000',
  color: '#fff',
  logo: undefined,
  companyTitle: undefined,
  serviceTitle: undefined,
  searchPlaceholder: undefined,
  search: false,
  children: undefined,
};

TopNav.propTypes = {
  active: PropTypes.string,
  bgColor: PropTypes.string,
  color: PropTypes.string,
  logo: PropTypes.node,
  companyTitle: PropTypes.string,
  serviceTitle: PropTypes.string,
  searchPlaceholder: PropTypes.string,
  search: PropTypes.bool,
  children: PropTypes.node,
};

export default TopNav;
