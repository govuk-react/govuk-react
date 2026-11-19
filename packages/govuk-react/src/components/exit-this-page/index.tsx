import * as React from 'react';
import { clsx } from 'clsx';
import * as Primitives from '@govuk-react/primitives/exit-this-page';
import * as Markup from 'govuk-frontend-react/exit-this-page';
import { SkipLink as MarkupSkipLink, type SkipLinkProps as MarkupSkipLinkProps } from 'govuk-frontend-react/skip-link';
import { VisuallyHidden } from 'govuk-frontend-react/visually-hidden';

/*
 * govuk-frontend-react's ExitThisPage markup, with the behaviour from @govuk-react/primitives, as
 * govuk-frontend's script has. Without JavaScript the button is a link to a safe page.
 */

const defaultHref = 'https://www.bbc.co.uk/weather';

export type RootProps = Markup.RootProps;

/**
 * Give users a way to quickly and safely exit a service, website or application.
 *
 * Once JavaScript runs, the button, a `SkipLink`, or pressing Shift 3 times hides the page and
 * goes to the button's `href`, as in govuk-frontend.
 *
 * @see https://design-system.service.gov.uk/components/exit-this-page/
 */
export function Root({ children, ...props }: RootProps) {
  return (
    <Primitives.Root
      activatedText={props.activatedText}
      timedOutText={props.timedOutText}
      pressTwoMoreTimesText={props.pressTwoMoreTimesText}
      pressOneMoreTimeText={props.pressOneMoreTimeText}
      indicatorVisibleClass="govuk-exit-this-page__indicator--visible"
      lightOnClass="govuk-exit-this-page__indicator-light--on"
      hideContentClass="govuk-exit-this-page-hide-content"
      overlayClass="govuk-exit-this-page-overlay"
      // Leaves the sticky button's containing block as it is in govuk-frontend.
      style={{ display: 'contents' }}
    >
      <Markup.Root {...props}>
        {children}
        <Status />
      </Markup.Root>
    </Primitives.Root>
  );
}

export type ButtonProps = Markup.ButtonProps;

/** The link to a safe page. Shows how many times Shift has been pressed. */
export function Button({ children, ...props }: ButtonProps) {
  return (
    <Primitives.Button asChild>
      <Markup.Button {...props}>
        {children}
        <Indicator />
      </Markup.Button>
    </Primitives.Button>
  );
}

/** Shows how many times Shift has been pressed. Button renders it. */
export function Indicator() {
  return (
    <Primitives.Indicator className="govuk-exit-this-page__indicator">
      <Primitives.Light className="govuk-exit-this-page__indicator-light" />
      <Primitives.Light className="govuk-exit-this-page__indicator-light" />
      <Primitives.Light className="govuk-exit-this-page__indicator-light" />
    </Primitives.Indicator>
  );
}

/** Tells screen readers how many more presses are needed. Root renders it. */
export function Status() {
  return <Primitives.Status className="govuk-visually-hidden" />;
}

export type SkipLinkProps = MarkupSkipLinkProps;

/** A skip link that exits the page too, for the top of the page. */
export function SkipLink({ href, className, ...props }: SkipLinkProps) {
  return (
    <Primitives.SkipLink asChild>
      <MarkupSkipLink
        href={href || defaultHref}
        className={clsx('govuk-js-exit-this-page-skiplink', className)}
        rel="nofollow noreferrer"
        {...props}
      />
    </Primitives.SkipLink>
  );
}

export type CompositeProps = Markup.CompositeProps;

/**
 * Give users a way to quickly and safely exit a service, website or application.
 *
 * Once JavaScript runs, the button, a `SkipLink`, or pressing Shift 3 times hides the page and
 * goes to the button's `href`, as in govuk-frontend.
 *
 * @see https://design-system.service.gov.uk/components/exit-this-page/
 */
export function Composite({ href, children, ...props }: CompositeProps) {
  const hasChildren = children !== undefined && children !== null && children !== '';
  return (
    <Root {...props}>
      <Button href={href}>
        {hasChildren ? (
          children
        ) : (
          <>
            <VisuallyHidden>Emergency</VisuallyHidden> Exit this page
          </>
        )}
      </Button>
    </Root>
  );
}
