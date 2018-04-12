// http://alphagov.github.io/govuk_template/example-proposition-menu.html

import React from 'react';
import PropTypes from 'prop-types';
import glamorous from 'glamorous';
import Button from '@govuk-react/button';
import { Search } from '@govuk-react/icons';
// import ListItem from '@govuk-react/list-item';
import SearchBox from '@govuk-react/search-box';
import { BLUE, LIGHT_BLUE, BLACK, WHITE, PROPOSITION_BORDER } from 'govuk-colours';
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
  width: `calc(100% - ${SPACING.SCALE_3})`,
  [MEDIA_QUERIES.LARGESCREEN]: {
    width: `calc(100% - ${SPACING.SCALE_6})`,
  },
});

const TopNavInner = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
  width: `calc(100% - ${SPACING.SCALE_3})`,
  maxWidth: '990px',
  padding: `${SPACING.SCALE_2} ${SPACING.SCALE_3}`,
  boxSizing: 'border-box',
  [MEDIA_QUERIES.LARGESCREEN]: {
    padding: `${SPACING.SCALE_2} 0`,
    flexDirection: 'row',
    width: `calc(100% - ${SPACING.SCALE_6})`,
  },
});

const Company = glamorous.div({
  display: 'flex',
  fontWeight: 800,
  alignItems: 'center',
  justifyContent: 'flex-start',
  fontSize: '30px',
  ' a': {
    display: 'flex',
    color: WHITE,
    textDecoration: 'none',
    marginBottom: 0,
    paddingBottom: 0,
    borderBottom: '1px solid transparent',
    ':hover': {
      borderBottom: `1px solid ${WHITE}`,
    },
  },
  ' h1': {
    fontSize: '30px',
  },
  ' svg': {
    marginRight: SPACING.SCALE_2,
  },
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
  ' a': {
    border: 0,
    textDecoration: 'none',
    borderBottom: '1px solid transparent',
    marginBottom: 0,
    paddingBottom: 0,
    ':hover': {
      borderBottom: `1px solid ${WHITE}`,
    },
  },
  [MEDIA_QUERIES.LARGESCREEN]: {
    ' button': {
      display: 'none',
    },
    width: '66.66%',
    paddingLeft: SPACING.SCALE_3,
    marginTop: 0,
  },
});

const SearchWrapper = glamorous.div({
  marginTop: SPACING.SCALE_1,
  width: '50%',
  [MEDIA_QUERIES.LARGESCREEN]: {
    width: '100%',
  },
});

const Ul = glamorous.ul(({
  serviceTitle,
}) => ({
  display: 'flex',
  flexWrap: 'wrap',
  margin: 0,
  padding: 0,
  marginTop: SPACING.SCALE_1,
  width: '100%',
  [MEDIA_QUERIES.LARGESCREEN]: {
    paddingTop: serviceTitle ? 0 : SPACING.SCALE_5,
    width: 'auto',
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
  borderBottom: `1px solid ${PROPOSITION_BORDER}`,
  [MEDIA_QUERIES.LARGESCREEN]: {
    borderBottom: 0,
    flex: 'none',
    width: 'auto',
    paddingRight: SPACING.SCALE_3,
  },
  ' a': {
    color: active ? LIGHT_BLUE : WHITE,
    textDecoration: 'none',
    borderBottom: '1px solid transparent',
    ':hover': {
      borderBottom: `1px solid ${WHITE}`,
    },
  },
}));

const TopNav = ({
  bgColor,
  color,
  company,
  serviceTitle,
  search,
  children,
  ...props
}) => (
  <React.Fragment>
    <TopNavWrapper bgColor={bgColor} color={color} {...props}>
      <TopNavInner>
        <LogoSearchWrapper>
          <Company>
            {company}
          </Company>
          {search &&
            <SearchWrapper>
              {search}
            </SearchWrapper>
          }
        </LogoSearchWrapper>
        <RightHandSide>
          {serviceTitle}
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
  bgColor: BLACK,
  color: WHITE,
  company: undefined,
  serviceTitle: undefined,
  search: false,
  children: undefined,
};

TopNav.propTypes = {
  active: PropTypes.number,
  bgColor: PropTypes.string,
  color: PropTypes.string,
  company: PropTypes.node,
  serviceTitle: PropTypes.node,
  search: PropTypes.node,
  children: PropTypes.node,
};

export default TopNav;
