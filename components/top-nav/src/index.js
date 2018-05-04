// http://alphagov.github.io/govuk_template/example-proposition-menu.html
// TODO: this component is a work in progress and needs to more closely match existing examples
import React from 'react';
import PropTypes from 'prop-types';
import { BLACK, WHITE } from 'govuk-colours';

import TopNavWrapper from './atoms/top-nav-wrapper';
import TopNavInner from './atoms/top-nav-inner';
import BottomNavWrapper from './atoms/bottom-nav-wrapper';
import Company from './atoms/company';
import LogoSearchWrapper from './atoms/logo-search-wrapper';
import RightHandSide from './atoms/right-hand-side';
import SearchWrapper from './atoms/search-wrapper';
import UnorderedList from './atoms/unordered-list';
import ListItem from './atoms/list-item';
import MenuButton from './atoms/menu-button/';

const TopNav = ({
  active,
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
            {/* TODO fix the position and design of this button */}
            <MenuButton />
            <UnorderedList serviceTitle={serviceTitle}>
              {/* TODO #205 use context api and/or render props here for `active` */}
              {children.length && children.map ? (
                children.map((child, i) => (
                  child && (child.length || child.props)
                    ? <ListItem key={child.key || i}>{child}</ListItem>
                    : null
                ))
              ) : (
                <ListItem>{children}</ListItem>
              )}
            </UnorderedList>
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

export asAnchor from './asAnchor';

export IconTitle from './atoms/icon-title';
