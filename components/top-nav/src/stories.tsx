import type { Story } from '@storybook/react';

import * as React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

import CrownIcon from '@govuk-react/icon-crown';
import { Search as SearchIcon } from '@govuk-react/icons';
import SearchBox from '@govuk-react/search-box';

import { TopNav } from '.';

export default {
  title: 'Page & Layout/Top nav',
  id: 'top-nav',
  component: TopNav,
};

const reactRouterLink = '/section';
// TODO: vertical alignment here needs some work, perhaps should be its own component,
// TODO: Icon should be lined up with font baseline, e.g. vertical-align: baseline

const Template: Story<React.ComponentProps<typeof TopNav>> = (args) => <TopNav {...args} />;

export const Default = Template.bind({});
Default.args = {
  company: (
    <TopNav.Anchor href="https://example.com" target="new">
      <TopNav.IconTitle icon={<CrownIcon width="36" height="32" />}>GOV.UK</TopNav.IconTitle>
    </TopNav.Anchor>
  ),
};

export const CustomLogo = Template.bind({});
CustomLogo.args = {
  company: (
    <TopNav.NavLink href="https://example.com" target="new">
      <TopNav.IconTitle icon={<SearchIcon width="32px" />}>Custom Title</TopNav.IconTitle>
    </TopNav.NavLink>
  ),
};

export const WithServiceTitle = Template.bind({});
WithServiceTitle.args = {
  ...Default.args,
  serviceTitle: (
    <TopNav.NavLink href="https://example.com" target="new">
      Service Title
    </TopNav.NavLink>
  ),
};

export const LogoAndServiceTitleWithReactRouterLink = Template.bind({});
LogoAndServiceTitleWithReactRouterLink.args = {
  company: (
    <TopNav.Anchor as={Link} to={reactRouterLink}>
      <TopNav.IconTitle icon={<CrownIcon width="36" height="32" />}>GOV.UK</TopNav.IconTitle>
    </TopNav.Anchor>
  ),
  serviceTitle: (
    <TopNav.NavLink as={Link} to={reactRouterLink}>
      Service Title
    </TopNav.NavLink>
  ),
};
LogoAndServiceTitleWithReactRouterLink.decorators = [
  (storyFn) => {
    return <BrowserRouter>{storyFn()}</BrowserRouter>;
  },
];

export const WithSearch = Template.bind({});
WithSearch.args = {
  ...WithServiceTitle.args,
  search: (
    <SearchBox>
      <SearchBox.Input placeholder="Search" />
      <SearchBox.Button />
    </SearchBox>
  ),
};

export const Children = Template.bind({});
Children.args = {
  ...WithServiceTitle.args,
  children: [
    <TopNav.NavLink href="https://example.com?q=catdog">Navigation item #1</TopNav.NavLink>,
    <TopNav.NavLink href="https://example.com?q=dogcat">Navigation item #2</TopNav.NavLink>,
  ],
};

export const EverythingButServiceTitle = Template.bind({});
EverythingButServiceTitle.args = {
  ...WithSearch.args,
  ...Children.args,
  serviceTitle: undefined,
};

export const Everything = Template.bind({});
Everything.args = {
  ...WithSearch.args,
  children: [
    <TopNav.NavLink href="https://example.com?q=catdog" target="new">
      Navigation item
    </TopNav.NavLink>,
    <TopNav.NavLink href="https://example.com?q=dogcat" target="new">
      Navigation item
    </TopNav.NavLink>,
    <TopNav.NavLink href="https://example.com?q=dogcat" target="new">
      Navigation item
    </TopNav.NavLink>,
    <TopNav.NavLink href="https://example.com?q=dogcat" target="new">
      Navigation item
    </TopNav.NavLink>,
    <TopNav.NavLink href="https://example.com?q=dogcat" target="new">
      Navigation item
    </TopNav.NavLink>,
    <TopNav.NavLink href="https://example.com?q=dogcat" target="new">
      Navigation item
    </TopNav.NavLink>,
  ],
};

export const EverythingWith9NavItems = Template.bind({});
EverythingWith9NavItems.args = {
  ...Everything.args,
  children: [
    <TopNav.NavLink href="https://example.com?q=catdog" target="new">
      Navigation item
    </TopNav.NavLink>,
    <TopNav.NavLink href="https://example.com?q=dogcat" target="new">
      Navigation item
    </TopNav.NavLink>,
    <TopNav.NavLink href="https://example.com?q=dogcat" target="new">
      Navigation item
    </TopNav.NavLink>,
    <TopNav.NavLink href="https://example.com?q=dogcat" target="new">
      Navigation item
    </TopNav.NavLink>,
    <TopNav.NavLink href="https://example.com?q=dogcat" target="new">
      Navigation item
    </TopNav.NavLink>,
    <TopNav.NavLink href="https://example.com?q=dogcat" target="new">
      Navigation item
    </TopNav.NavLink>,
    <TopNav.NavLink href="https://example.com?q=dogcat" target="new">
      Navigation item
    </TopNav.NavLink>,
    <TopNav.NavLink href="https://example.com?q=dogcat" target="new">
      Navigation item
    </TopNav.NavLink>,
    <TopNav.NavLink href="https://example.com?q=dogcat" target="new">
      Navigation item
    </TopNav.NavLink>,
  ],
};
