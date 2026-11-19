import * as React from 'react';
import * as AutoFocus from '@govuk-react/primitives/auto-focus';
import * as Markup from 'govuk-frontend-react/notification-banner';

/*
 * govuk-frontend-react's NotificationBanner markup, with govuk-frontend's focus behaviour from
 * @govuk-react/primitives. A success banner, or one with `role="alert"`, takes focus when it
 * appears, and is rendered with `autofocus`, so it takes focus when the page loads even without
 * JavaScript.
 */

export {
  Header,
  Title,
  Content,
  Heading,
  Link,
  type HeaderProps,
  type TitleProps,
  type ContentProps,
  type HeadingProps,
  type LinkProps,
} from 'govuk-frontend-react/notification-banner';

export type RootProps = Markup.RootProps;

/**
 * Use a notification banner to tell the user about something they need to know about, but that’s not directly related to the page content.
 *
 * @see https://design-system.service.gov.uk/components/notification-banner/
 */
export function Root({ disableAutoFocus, ...props }: RootProps) {
  // As govuk-frontend: only an alert takes focus.
  const disabled = Boolean(disableAutoFocus) || (props.role ?? (props.success ? 'alert' : 'region')) !== 'alert';
  return (
    <AutoFocus.Root disabled={disabled}>
      <AutoFocus.Target asChild disabled={disabled}>
        <Markup.Root disableAutoFocus={disableAutoFocus} {...props} />
      </AutoFocus.Target>
    </AutoFocus.Root>
  );
}

export type CompositeProps = Markup.CompositeProps;

const hasContent = (node: React.ReactNode): boolean => {
  if (node === null || node === undefined || node === false || node === true || node === '') return false;
  if (Array.isArray(node)) return node.some(hasContent);
  return true;
};

/**
 * Use a notification banner to tell the user about something they need to know about, but that’s not directly related to the page content.
 *
 * @see https://design-system.service.gov.uk/components/notification-banner/
 */
export function Composite({ title, titleId, titleHeadingLevel, heading, success, children, ...props }: CompositeProps) {
  return (
    <Root success={success} {...(titleId && { 'aria-labelledby': titleId })} {...props}>
      <Markup.Header>
        <Markup.Title headingLevel={titleHeadingLevel} {...(titleId && { id: titleId })}>
          {hasContent(title) ? title : success ? 'Success' : undefined}
        </Markup.Title>
      </Markup.Header>
      <Markup.Content>
        {hasContent(heading) && <Markup.Heading>{heading}</Markup.Heading>}
        {children}
      </Markup.Content>
    </Root>
  );
}
