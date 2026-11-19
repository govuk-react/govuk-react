import * as React from 'react';
import * as AutoFocus from '@govuk-react/primitives/auto-focus';
import * as FocusLinks from '@govuk-react/primitives/focus-links';
import * as Markup from 'govuk-frontend-react/error-summary';

/*
 * govuk-frontend-react's ErrorSummary markup, with govuk-frontend's focus behaviour from
 * @govuk-react/primitives. The summary takes focus when it appears, and is rendered with
 * `autofocus`, so it takes focus when the page loads even without JavaScript. Its links move focus
 * to the field, with its label or legend in view.
 */

export {
  Alert,
  Title,
  Body,
  Description,
  List,
  ListItem,
  ListItemLink,
  ListItemComposite,
  type AlertProps,
  type TitleProps,
  type BodyProps,
  type DescriptionProps,
  type ListProps,
  type ListItemProps,
  type ListItemCompositeProps,
} from 'govuk-frontend-react/error-summary';

export type RootProps = Markup.RootProps;

/**
 * Use an error summary when there is a validation error.
 *
 * It takes focus when it appears. To move focus to it again, such as after another invalid submit,
 * give it a new `key`.
 *
 * @see https://design-system.service.gov.uk/components/error-summary/
 */
export function Root({ disableAutoFocus, ...props }: RootProps) {
  return (
    <FocusLinks.Root>
      <AutoFocus.Root disabled={disableAutoFocus}>
        <AutoFocus.Target asChild disabled={disableAutoFocus}>
          <Markup.Root disableAutoFocus={disableAutoFocus} {...props} />
        </AutoFocus.Target>
      </AutoFocus.Root>
    </FocusLinks.Root>
  );
}

export type CompositeProps = Markup.CompositeProps;

const hasContent = (node: React.ReactNode): boolean => {
  if (node === null || node === undefined || node === false || node === true || node === '') return false;
  if (Array.isArray(node)) return node.some(hasContent);
  return true;
};

/**
 * Use an error summary when there is a validation error.
 *
 * Children are `ListItemComposite`s.
 *
 * @see https://design-system.service.gov.uk/components/error-summary/
 */
export function Composite({ title, description, errors, children, ...props }: CompositeProps) {
  const list = errors ? errors.map((item, index) => <Markup.ListItemComposite key={index} {...item} />) : children;
  return (
    <Root {...props}>
      <Markup.Alert>
        <Markup.Title>{title}</Markup.Title>
        <Markup.Body>
          {hasContent(description) && <Markup.Description>{description}</Markup.Description>}
          {hasContent(list) && <Markup.List>{list}</Markup.List>}
        </Markup.Body>
      </Markup.Alert>
    </Root>
  );
}
