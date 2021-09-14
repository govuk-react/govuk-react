import React, { Component } from 'react';
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
import TopNavAnchor from './atoms/top-nav-anchor';
import NavLinkAnchor from './atoms/nav-link-anchor';

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

interface TopNavProps {
  // TODO: prop names should mirror nunjucks macro options at https://design-system.service.gov.uk/components/header/
  /** Top nav background color */
  bgColor?: string;
  /** Top nav text color */
  color?: string;
  /** Is the mobile navigation open by default? */
  defaultOpen?: boolean;
  /** Company component e.g. GOV UK */
  company?: React.ReactNode;
  /** Service title component e.g. Food Standards Authority */
  serviceTitle?: React.ReactNode;
  /** Search component */
  search?: React.ReactNode;
  /** List Navigation items with anchor tags e.g. NavAnchor components */
  children?: React.ReactNode;
}

/**
 *
 * ### Usage
 *
 * TopNav with logo, service title and navigation items
 *
 * ```jsx
 * import { SearchBox, TopNav } from 'govuk-react';
 * import CrownIcon from '@govuk-react/icon-crown';
 *
 * const link = 'https://example.com?=1';
 *
 * const Company = (
 *   <TopNav.Anchor href={link} target="new">
 *     <TopNav.IconTitle icon={<CrownIcon width="36" height="32" />}>GOV.UK</TopNav.IconTitle>
 *   </TopNav.Anchor>
 * );
 *
 * const ServiceTitle = (
 *   <TopNav.NavLink href={link} target="new">
 *     Service Title
 *   </TopNav.NavLink>
 * );
 *
 * const Search = (
 *   <SearchBox>
 *     <SearchBox.Input placeholder="Search GOV.UK" />
 *     <SearchBox.Button />
 *   </SearchBox>
 * );
 *
 * <TopNav company={Company} serviceTitle={ServiceTitle} search={Search} active={0}>
 *   <TopNav.NavLink href="https://example.com?q=catdog" target="new">Navigation item #1</TopNav.NavLink>
 *   <TopNav.NavLink href="https://example.com?q=dogcat" target="new">Navigation item #2</TopNav.NavLink>
 * </TopNav>
 * ```
 *
 * With React Router
 *
 * ```jsx
 * import { BrowserRouter, Link } from 'react-router-dom';
 * import { TopNav } from 'govuk-react';
 * import CrownIcon from '@govuk-react/icon-crown';
 *
 * const reactRouterLink = '/section';
 * const CompanyLink = (
 *   <TopNav.Anchor as={Link} to={reactRouterLink}>
 *     <TopNav.IconTitle icon={<CrownIcon width="36" height="32" />}>GOV.UK</TopNav.IconTitle>
 *   </TopNav.Anchor>
 * );
 *
 * const ServiceTitleLink = (
 *   <TopNav.NavLink as={Link} to={reactRouterLink}>
 *     Service Title
 *   </TopNav.NavLink>
 * );
 *
 * <BrowserRouter>
 *   <TopNav company={CompanyLink} serviceTitle={ServiceTitleLink} />
 * </BrowserRouter>
 * ```
 *
 * ### References:
 *
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
class TopNav extends Component<TopNavProps, { navigationOpen: boolean }> {
  static IconTitle = IconTitle;

  static Anchor = TopNavAnchor;

  static NavLink = NavLinkAnchor;

  static defaultProps = {
    bgColor: BLACK,
    color: WHITE,
    company: <IconTitle icon={<CrownIcon width="36" height="32" />}>GOV.UK</IconTitle>,
    serviceTitle: undefined,
    search: false,
    children: undefined,
    defaultOpen: false,
  };

  constructor(props: TopNavProps) {
    super(props);
    const { defaultOpen } = this.props;
    this.state = {
      navigationOpen: defaultOpen,
    };
  }

  toggleNavigationOpen: () => void = () => {
    this.setState((prevState) => ({
      navigationOpen: !prevState.navigationOpen,
    }));
  };

  render(): JSX.Element {
    const { bgColor, color, company, serviceTitle, search, children, ...props } = this.props;
    const { navigationOpen } = this.state;
    return (
      <>
        <TopNavWrapper bgColor={bgColor} color={color} {...props}>
          <TopNavInner>
            <LogoSearchWrapper>
              <Company>{company}</Company>
              {search && <SearchWrapper>{search}</SearchWrapper>}
            </LogoSearchWrapper>
            <RightHandSide>
              <ServiceTitleWrapper>{serviceTitle}</ServiceTitleWrapper>
              {children && (
                <>
                  <MenuButtonWrapper>
                    <MenuButton open={navigationOpen} />
                  </MenuButtonWrapper>
                  {/* Referenced in MenuButton */}
                  <Input
                    id="govuk-react-menu-button"
                    type="checkbox"
                    checked={navigationOpen}
                    onChange={this.toggleNavigationOpen}
                  />
                  <UnorderedList id="govuk-react-menu" serviceTitle={serviceTitle} open={navigationOpen}>
                    {/* TODO: #205 use context api and/or render props here for `active` */}
                    {Array.isArray(children) ? (
                      React.Children.map(children, (child) => (child ? <ListItem>{child}</ListItem> : null))
                    ) : (
                      <ListItem>{children}</ListItem>
                    )}
                  </UnorderedList>
                </>
              )}
            </RightHandSide>
          </TopNavInner>
        </TopNavWrapper>
        <BottomNavWrapper />
      </>
    );
  }
}

export default TopNav;
