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
 * The GOV.UK header shows users that they are on GOV.UK and which service they are using.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/top-nav
 * - https://design-system.service.gov.uk/components/header/
 */
export class TopNav extends Component<TopNavProps, { navigationOpen: boolean }> {
  static IconTitle = IconTitle;

  static Anchor = TopNavAnchor;

  static NavLink = NavLinkAnchor;

  static displayName = 'TopNav';

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
                  <UnorderedList id="govuk-react-menu" serviceTitle={!!serviceTitle} open={navigationOpen}>
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
