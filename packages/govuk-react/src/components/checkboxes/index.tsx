import * as React from 'react';
import { Children } from 'react';
import * as Primitives from '@govuk-react/primitives/choices';
import * as Markup from 'govuk-frontend-react/checkboxes';
import { joinIds } from '../../utils/join-ids.js';

/*
 * govuk-frontend-react's Checkboxes markup, with conditional reveals from @govuk-react/primitives.
 * Without JavaScript, a reveal shows only while its checkbox is checked, where the browser supports
 * `:has()`, and always where it doesn't, as in govuk-frontend.
 */

export {
  Item,
  Label,
  Hint,
  Divider,
  type ItemProps,
  type LabelProps,
  type HintProps,
  type DividerProps,
} from 'govuk-frontend-react/checkboxes';

/** The element and styles around the checkboxes, for `Root` and `Field`. */
function Behaviour({ children }: { children: React.ReactNode }) {
  return (
    <Primitives.Root
      upgradedClass="govuk-frontend-supported"
      hiddenConditionalClass="govuk-checkboxes__conditional--hidden"
    >
      {children}
    </Primitives.Root>
  );
}

export type RootProps = Markup.RootProps;

/**
 * Let users select one or more options by using the checkboxes component.
 *
 * Children are `Item`s, each with an `Input`, followed by a `Conditional` where it reveals one.
 *
 * @see https://design-system.service.gov.uk/components/checkboxes/
 */
export function Root(props: RootProps) {
  return (
    <Behaviour>
      <Markup.Root {...props} />
    </Behaviour>
  );
}

export type InputProps = Markup.InputProps & {
  /** The id of the `Conditional` this checkbox reveals. */
  controls?: string;
  /**
   * For an option such as "None of these": once JavaScript runs, checking it unchecks the other
   * checkboxes with its name, and checking one of them unchecks it.
   */
  exclusive?: boolean;
  /** govuk-frontend's way to make it exclusive: "exclusive". */
  'data-behaviour'?: string;
};

export function Input({ controls, exclusive, 'data-behaviour': behaviour, ...props }: InputProps) {
  return (
    // govuk-frontend's `data-behaviour="exclusive"` works too. It isn't rendered, so govuk-frontend's
    // own script doesn't handle it as well.
    <Primitives.Input asChild controls={controls} exclusive={exclusive ?? behaviour === 'exclusive'}>
      <Markup.Input {...props} />
    </Primitives.Input>
  );
}

export type ConditionalProps = Markup.ConditionalProps;

/** Content revealed while its checkbox is checked, straight after its `Item`. Pass the checkbox's `checked` or `defaultChecked` as `checked`. */
export function Conditional(props: ConditionalProps) {
  return (
    <Primitives.Conditional asChild>
      <Markup.Conditional {...props} />
    </Primitives.Conditional>
  );
}

export type ItemCompositeProps = Markup.ItemCompositeProps & Pick<InputProps, 'exclusive'>;

const isSet = (node: React.ReactNode) => node !== undefined && node !== null && node !== false && node !== '';

export function ItemComposite({
  id,
  label,
  hint,
  conditional,
  'aria-describedby': describedBy,
  ...props
}: ItemCompositeProps) {
  const hintId = isSet(hint) ? `${id}-item-hint` : undefined;
  const conditionalId = isSet(conditional) ? `conditional-${id}` : undefined;
  return (
    <>
      <Markup.Item>
        <Input id={id} controls={conditionalId} aria-describedby={joinIds(describedBy, hintId)} {...props} />
        <Markup.Label htmlFor={id}>{label}</Markup.Label>
        {hintId && <Markup.Hint id={hintId}>{hint}</Markup.Hint>}
      </Markup.Item>
      {conditionalId && (
        <Conditional id={conditionalId} checked={Boolean(props.checked ?? props.defaultChecked)}>
          {conditional}
        </Conditional>
      )}
    </>
  );
}

export type FieldProps = Omit<Markup.FieldProps, 'items' | 'children'> &
  (
    | { children?: React.ReactNode; items?: never }
    | {
        children?: never;
        /** Prefer children, which memoise and re-render better. */
        items: (ItemCompositeProps | { divider: React.ReactNode })[];
      }
  );

/**
 * Let users select one or more options by using the checkboxes component.
 *
 * Children are `ItemComposite`s and `Divider`s.
 *
 * @see https://design-system.service.gov.uk/components/checkboxes/
 */
export function Field({ items, children, ...props }: FieldProps) {
  return (
    <Behaviour>
      <Markup.Field {...props}>
        {items
          ? items.map((item, index) =>
              'divider' in item ? (
                <Markup.Divider key={index}>{item.divider}</Markup.Divider>
              ) : (
                <ItemComposite key={index} {...item} />
              )
            )
          : Children.toArray(children)}
      </Markup.Field>
    </Behaviour>
  );
}
