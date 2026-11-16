import { MEDIA_QUERIES } from '../../../../constants';
import { spacing, typography } from '../../../../lib';
import React from 'react';
import styled, { StyledComponentProps } from 'styled-components';

const StyledTabsTitle = styled('h2')(typography.font({ size: 19 }), {
  marginBottom: spacing.simple(1),
  [MEDIA_QUERIES.TABLET]: {
    display: 'none',
  },
});

interface TabsTitleOwnProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children?: string | React.ReactNode;
}

type TabsTitleRefType = React.Ref<HTMLHeadingElement>;

export function TabsTitle(
  props: TabsTitlePropsWithoutAs & { ref?: TabsTitleRefType }
): React.ReactElement<TabsTitlePropsWithoutAs>;
export function TabsTitle<
  AsC extends string | React.ComponentType<TabsTitleOwnProps> = 'h2',
  FAsC extends string | React.ComponentType<TabsTitleOwnProps> = AsC,
>(
  props: TabsTitlePropsWithAs<AsC, FAsC> & { ref?: React.Ref<AsC> }
): React.ReactElement<TabsTitlePropsWithAs<AsC, FAsC>>;
export function TabsTitle({ children = 'Contents', ...props }: TabsTitleOwnProps & { ref?: TabsTitleRefType }) {
  return <StyledTabsTitle {...props}>{children}</StyledTabsTitle>;
}

export type TabsTitleType = typeof TabsTitle;

type TabsTitlePropsWithoutAs = StyledComponentProps<'h2', never, TabsTitleOwnProps, never> & {
  as?: never | undefined;
  forwardedAs?: never | undefined;
};

type TabsTitlePropsWithAs<
  AsC extends string | React.ComponentType<TabsTitleOwnProps>,
  FAsC extends string | React.ComponentType<TabsTitleOwnProps> = AsC,
> = StyledComponentProps<AsC, never, TabsTitleOwnProps, never, FAsC> & {
  as?: AsC | undefined;
  forwardedAs?: FAsC | undefined;
};

export default TabsTitle;
