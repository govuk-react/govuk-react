/**
 * ### References
 *
 * - https://github.com/alphagov/govuk-frontend/tree/main/src/govuk/components/skip-link
 */
import { SPACING_POINTS } from '@govuk-react/constants';
import { link, typography, visuallyHidden } from '@govuk-react/lib';
import React from 'react';
import styled, { StyledComponentProps } from 'styled-components';

/**
 *
 * Use the skip link component to help keyboard-only users skip to the main content on a page.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/skip-link
 * - https://design-system.service.gov.uk/components/skip-link/
 */
export const StyledSkipLink = styled('a')(
  visuallyHidden.focusable(),
  link.common(),
  link.styleText,
  typography.responsive(16),
  {
    display: 'block',
    padding: `${SPACING_POINTS[2]}px ${SPACING_POINTS[3]}px`,
    '@supports (padding:max(calc(0px)))': {
      paddingRight: `max(${SPACING_POINTS[3]}px, calc(${SPACING_POINTS[3]}px + env(safe-area-inset-right)))`,
      paddingLeft: `max(${SPACING_POINTS[3]}px, calc(${SPACING_POINTS[3]}px + env(safe-area-inset-left)))`,
    },
  }
);

interface SkipLinkOwnProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: string | React.ReactNode;
  href?: string;
}

type SkipLinkRefType = React.Ref<HTMLAnchorElement>;

export const SkipLink: SkipLinkType = React.forwardRef(
  ({ children = 'Skip to main content', href = '#content', ...props }: SkipLinkOwnProps, ref: SkipLinkRefType) => (
    <StyledSkipLink ref={ref} href={href} {...props}>
      {children}
    </StyledSkipLink>
  )
);

export interface SkipLinkType extends React.ForwardRefExoticComponent<SkipLinkOwnProps> {
  (props: SkipLinkPropsWithoutAs, ref?: SkipLinkRefType): React.ReactElement<SkipLinkPropsWithoutAs>;
  <
    AsC extends string | React.ComponentType<SkipLinkOwnProps> = 'a',
    FAsC extends string | React.ComponentType<SkipLinkOwnProps> = AsC
  >(
    props: SkipLinkPropsWithAs<AsC, FAsC>,
    ref?: React.Ref<AsC>
  ): React.ReactElement<SkipLinkPropsWithAs<AsC, FAsC>>;
}

type SkipLinkPropsWithoutAs = StyledComponentProps<'a', never, SkipLinkOwnProps, never> & {
  as?: never | undefined;
  forwardedAs?: never | undefined;
};

type SkipLinkPropsWithAs<
  AsC extends string | React.ComponentType<SkipLinkOwnProps>,
  FAsC extends string | React.ComponentType<SkipLinkOwnProps> = AsC
> = StyledComponentProps<AsC, never, SkipLinkOwnProps, never, FAsC> & {
  as?: AsC | undefined;
  forwardedAs?: FAsC | undefined;
};

SkipLink.displayName = 'SkipLink';

export default SkipLink;
