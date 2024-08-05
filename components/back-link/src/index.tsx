/**
 * ### References:
 *
 * - https://github.com/alphagov/govuk-frontend/tree/main/src/govuk/components/back-link
 */
import { SPACING_POINTS } from '@govuk-react/constants';
import { WithWhiteSpaceProps, link, shape, spacing, typography } from '@govuk-react/lib';
import { BLACK } from 'govuk-colours';
import React from 'react';
import styled, { StyledComponentProps } from 'styled-components';

/**
 * Use the back link component to help users go back to the previous page in a multi-page transaction.
 *
 * - https://govuk-react.github.io/govuk-react/?path=/docs/back-link
 * - https://design-system.service.gov.uk/components/back-link/
 */
export const StyledBackLink = styled('a')(
  typography.font({ size: 16 }),
  link.common(),
  link.styleText,
  {
    display: 'inline-block',
    position: 'relative',
    // margins here are not responsive, hence why they're not specified using withWhiteSpace
    marginTop: SPACING_POINTS[3],
    marginBottom: SPACING_POINTS[3],
    paddingLeft: '14px',
    textDecoration: 'none',
    '&[href]': {
      borderBottom: `1px solid ${BLACK}`,
    },
    '::before': {
      ...shape.arrow({ direction: 'left', base: 10, height: 6 }),

      content: "''",
      position: 'absolute',
      top: '-1px',
      bottom: '1px',
      left: 0,
      margin: 'auto',
    },
  },
  spacing.withWhiteSpace()
);

interface BackLinkOwnProps extends WithWhiteSpaceProps, React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: string | React.ReactNode;
}

type BackLinkRefType = React.Ref<HTMLAnchorElement>;

export const BackLink: BackLinkType = React.forwardRef(
  ({ children = 'Back', ...props }: BackLinkOwnProps, ref: BackLinkRefType) => (
    <StyledBackLink ref={ref} href={props?.href} {...props}>
      {children}
    </StyledBackLink>
  )
);

export interface BackLinkType extends React.ForwardRefExoticComponent<BackLinkOwnProps> {
  (props: BackLinkPropsWithoutAs, ref?: BackLinkRefType): React.ReactElement<BackLinkPropsWithoutAs>;
  <
    AsC extends string | React.ComponentType<BackLinkOwnProps> = 'a',
    FAsC extends string | React.ComponentType<BackLinkOwnProps> = AsC
  >(
    props: BackLinkPropsWithAs<AsC, FAsC>,
    ref?: React.Ref<AsC>
  ): React.ReactElement<BackLinkPropsWithAs<AsC, FAsC>>;
}

type BackLinkPropsWithoutAs = StyledComponentProps<'a', never, BackLinkOwnProps, never> & {
  as?: never | undefined;
  forwardedAs?: never | undefined;
};

type BackLinkPropsWithAs<
  AsC extends string | React.ComponentType<BackLinkOwnProps>,
  FAsC extends string | React.ComponentType<BackLinkOwnProps> = AsC
> = StyledComponentProps<AsC, never, BackLinkOwnProps, never, FAsC> & {
  as?: AsC | undefined;
  forwardedAs?: FAsC | undefined;
};

BackLink.displayName = 'BackLink';

export default BackLink;
