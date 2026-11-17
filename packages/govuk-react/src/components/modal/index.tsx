import * as React from 'react';
import type { ReactNode } from 'react';
import { clsx } from 'clsx';
import * as Primitives from '@govuk-react/primitives/modal';
import * as Button from 'govuk-frontend-react/button';

/*
 * A modal dialog on GOV.UK styles, with the behaviour from @govuk-react/primitives. govuk-frontend
 * has no modal, so its look follows the dialogs that GOV.UK services already use, such as the
 * HMRC timeout warning. Where the browser supports invoker commands, it is a true modal without
 * JavaScript.
 */

const name = 'govuk-react-modal';

/** Styles govuk-frontend has no class for, hoisted and deduplicated by React. */
export const modalCss = `
.${name}{box-sizing:border-box;width:calc(100% - 30px);max-width:640px;max-height:calc(100% - 30px);padding:30px;border:5px solid var(--govuk-text-colour,#0b0c0c);background:var(--govuk-body-background-colour,#fff);color:var(--govuk-text-colour,#0b0c0c)}
.${name}:focus{outline:3px solid var(--govuk-focus-colour,#fd0);outline-offset:0}
.${name}::backdrop{background:rgb(11 12 12 / .8)}
.${name}>:last-child{margin-bottom:0}
@media (max-width:40.0525em){.${name}{padding:15px}}
`;

export type RootProps = Primitives.RootProps;

/** Holds the modal and the buttons that open and close it. */
export function Root({ children, ...props }: RootProps) {
  return (
    <Primitives.Root {...props}>
      <style href={name} precedence="default">
        {modalCss}
      </style>
      {children}
    </Primitives.Root>
  );
}

export type TriggerProps = Omit<Button.RootProps, 'as' | 'href' | 'type'> & Pick<Primitives.TriggerProps, 'dialogId'>;

/** A button that opens the modal. */
export function Trigger({ dialogId, ...props }: TriggerProps) {
  return (
    <Primitives.Trigger dialogId={dialogId} asChild>
      <Button.Root type="button" {...props} />
    </Primitives.Trigger>
  );
}

export type CloseProps = TriggerProps;

/** A button that closes the modal. A secondary button, unless you pass another `variant`, or `undefined` for a primary one. */
export function Close({ dialogId, ...props }: CloseProps) {
  return (
    <Primitives.Close dialogId={dialogId} asChild>
      <Button.Root type="button" variant="secondary" {...props} />
    </Primitives.Close>
  );
}

export type ContentProps = Omit<Primitives.ContentProps, 'asChild'>;

/** The modal dialog. Give it a Title. */
export function Content({ className, ...props }: ContentProps) {
  return <Primitives.Content className={clsx(name, className)} {...props} />;
}

export type TitleProps = Omit<Primitives.TitleProps, 'asChild'>;

/** The modal's heading, which names it. */
export function Title({ className, ...props }: TitleProps) {
  return <Primitives.Title className={clsx('govuk-heading-m', className)} {...props} />;
}

export type CompositeProps = Omit<RootProps, 'title'> & {
  /** The text of the button that opens the modal. */
  triggerText: ReactNode;
  /** The modal's heading. */
  title: ReactNode;
  /** The text of the button that closes the modal. Defaults to "Cancel". */
  closeText?: ReactNode;
  /** Other actions, such as a button that confirms, shown before the close button. */
  actions?: ReactNode;
};

/** A button that opens a modal with a title, content and actions. */
export function Composite({ triggerText, title, closeText = 'Cancel', actions, children, ...props }: CompositeProps) {
  return (
    <Root {...props}>
      <Trigger>{triggerText}</Trigger>
      <Content>
        <Title>{title}</Title>
        {children}
        <div className="govuk-button-group">
          {actions}
          <Close>{closeText}</Close>
        </div>
      </Content>
    </Root>
  );
}
