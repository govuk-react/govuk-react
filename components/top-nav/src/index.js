import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BLACK, WHITE } from 'govuk-colours';
import { MEDIA_QUERIES } from '@govuk-react/constants';
import { typography } from '@govuk-react/lib';
import CrownIcon from '@govuk-react/icon-crown';

import styled from 'styled-components';

import TopNavWrapper from './atoms/top-nav-wrapper';
import TopNavInner from './atoms/top-nav-inner';
import BottomNavWrapper from './atoms/bottom-nav-wrapper';
import Company from './atoms/company';
import LogoSearchWrapper from './atoms/logo-search-wrapper';
import RightHandSide from './atoms/right-hand-side';
import SearchWrapper from './atoms/search-wrapper';
import UnorderedList from './atoms/unordered-list';
import ListItem from './atoms/list-item';
import MenuButton from './atoms/menu-button';

import IconTitle from './atoms/icon-title';

// Layout/position of ServiceTitle
const ServiceTitleWrapper = styled('div')(typography.font({ size: 24 }), {
  width: '50%',
  [MEDIA_QUERIES.LARGESCREEN]: {
    width: 'auto',
  },
});

// Layout/position of MenuButtonWrapper
const MenuButtonWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'flex-end',
  width: '50%',
  [MEDIA_QUERIES.LARGESCREEN]: {
    width: 'auto',
  },
});

// Provides a fallback for the mobile menu toggle
// functionality when javascrcipt is unavailable
const Input = styled('input')({
  position: 'absolute',
  top: '-999em',
  ':checked + ul': {
    display: 'flex',
  },
  [MEDIA_QUERIES.LARGESCREEN]: {
    display: 'none',
  },
});

/**
 *
 * ### Usage
 *
 * TopNav with logo, service title and navigation items
 * ```jsx
 * import CrownIcon from '@govuk-react/icon-crown';
 * import SearchBox from '@govuk-react/search-box';
 * import TopNav, { asNavLinkAnchor, asTopNavAnchor } from '@govuk-react/top-nav';
 *
 * const LogoAnchor = asTopNavAnchor('a');
 * const NavAnchor = asNavLinkAnchor('a');
 *
 * const link = 'https://example.com?=1';
 *
 * const Company = (
 *   <LogoAnchor href={link} target="new">
 *     <TopNav.IconTitle icon={<CrownIcon width="36" height="32" />}>GOV.UK</TopNav.IconTitle>
 *   </LogoAnchor>
 * );
 *
 * const ServiceTitle = (
 *   <NavAnchor href={link} target="new">
 *     Service Title
 *   </NavAnchor>
 * );
 *
 * const Search = (
 *   <SearchBox placeholder="Search">hi</SearchBox>
 * );
 *
 * <TopNav company={Company} serviceTitle={ServiceTitle} search={Search} active={0}>
 *   <NavAnchor href="https://example.com?q=catdog" target="new">Navigation item #1</NavAnchor>
 *   <NavAnchor href="https://example.com?q=dogcat" target="new">Navigation item #2</NavAnchor>
 * </TopNav>
 * ```
 *
 * ```jsx
 * import { BrowserRouter, Link } from 'react-router-dom';
 * import CrownIcon from '@govuk-react/icon-crown';
 * import TopNav, { asLogoAnchor, asNavLinkAnchor } from '@govuk-react/top-nav';
 *
 * const LogoLink = asTopNavAnchor(Link);
 * const NavLink= asNavLinkAnchor(Link);
 *
 * const reactRouterLink = '/section';
 * const CompanyLink = (
 *   <LogoLink to={reactRouterLink}>
 *     <TopNav.IconTitle icon={<CrownIcon width="36" height="32" />}>GOV.UK</TopNav.IconTitle>
 *   </LogoLink>
 * );
 *
 * const ServiceTitleLink = (
 *   <NavLink to={reactRouterLink}>
 *     Service Title
 *   </NavLink>
 * );
 *
 * <BrowserRouter>
 *   <TopNav company={CompanyLink} serviceTitle={ServiceTitleLink} />
 * </BrowserRouter>
 * ```
 *
 * ### References:
 * - http://alphagov.github.io/govuk_template/example-proposition-menu.html
 * - https://design-system.service.gov.uk/components/header/
 *
 * ### TODO:
 * - TODO: this component is a work in progress and needs to more closely match existing examples
 * - TODO: is TopNav the right name? What's it called in other GDS styles/patterns?
 * - TODO: (The name Header is ambiguous)
 * - TODO: #205 Use context api and/or render props for `active` navigation items
 * - TODO: Vertical alignment here needs some work, perhaps should be its own component
 * - TODO: Icon should be lined up with font baseline, e.g. vertical-align: baseline
 */
class TopNav extends Component {
  state = {
    navigationOpen: this.props.defaultOpen,
  };

  toggleNavigationOpen = () => {
    this.setState(prevState => ({
      navigationOpen: !prevState.navigationOpen,
    }));
  };

  render() {
    const { bgColor, color, company, serviceTitle, search, children, ...props } = this.props;

    return (
      <React.Fragment>
        <TopNavWrapper bgColor={bgColor} color={color} {...props}>
          <TopNavInner>
            <LogoSearchWrapper>
              <Company>{company}</Company>
              {search && <SearchWrapper>{search}</SearchWrapper>}
            </LogoSearchWrapper>
            <RightHandSide>
              <ServiceTitleWrapper>{serviceTitle}</ServiceTitleWrapper>
              {children && (
                <React.Fragment>
                  <MenuButtonWrapper>
                    <MenuButton open={this.state.navigationOpen} onClick={this.toggleNavigationOpen} />
                  </MenuButtonWrapper>
                  {/* Referenced in MenuButton */}
                  <Input id="govuk-react-menu-button" type="checkbox" checked={this.state.navigationOpen} />
                  <UnorderedList id="govuk-react-menu" serviceTitle={serviceTitle} open={this.state.navigationOpen}>
                    {/* TODO: #205 use context api and/or render props here for `active` */}
                    {children.length && children.map ? (
                      children.map((child, i) =>
                        child && (child.length || child.props) ? (
                          <ListItem key={child.key || i}>{child}</ListItem>
                        ) : null
                      )
                    ) : (
                      <ListItem>{children}</ListItem>
                    )}
                  </UnorderedList>
                </React.Fragment>
              )}
            </RightHandSide>
          </TopNavInner>
        </TopNavWrapper>
        <BottomNavWrapper />
      </React.Fragment>
    );
  }
}

TopNav.defaultProps = {
  bgColor: BLACK,
  color: WHITE,
  company: <IconTitle icon={<CrownIcon width="36" height="32" />}>GOV.UK</IconTitle>,
  serviceTitle: undefined,
  search: false,
  children: undefined,
  defaultOpen: false,
};

// TODO: prop names should mirror nunjucks macro options at https://design-system.service.gov.uk/components/header/
TopNav.propTypes = {
  /** Top nav background color */
  bgColor: PropTypes.string,
  /** Top nav text color */
  color: PropTypes.string,
  /** Is the mobile navigation open by default? */
  defaultOpen: PropTypes.bool,
  /** Company component e.g. GOV UK */
  company: PropTypes.node,
  /** Service title component e.g. Food Standards Authority */
  serviceTitle: PropTypes.node,
  /** Search component */
  search: PropTypes.node,
  /** List Navigation items with anchor tags e.g. NavAnchor components */
  children: PropTypes.node,
};

TopNav.IconTitle = IconTitle;

export default TopNav;

export asTopNavAnchor from './hoc/asTopNavAnchor';
export asNavLinkAnchor from './hoc/asNavLinkAnchor';
