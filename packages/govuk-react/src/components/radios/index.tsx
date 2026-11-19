import * as React from 'react';
import { Children } from 'react';
import * as Primitives from '@govuk-react/primitives/choices';
import * as Markup from 'govuk-frontend-react/radios';
import { joinIds } from '../../utils/join-ids.js';

/*
 * govuk-frontend-react's Radios markup, with conditional reveals from @govuk-react/primitives.
 * Without JavaScript, a reveal shows only while its radio is checked, where the browser supports
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
} from 'govuk-frontend-react/radios';

/** Shows a reveal only while its radio is checked, before or without JavaScript. */
export const radiosCss = [
  // Hides a reveal whose radio isn't checked.
  '.govuk-radios__item:has(>.govuk-radios__input:not(:checked))+.govuk-radios__conditional{display:none}',
  // Shows one whose radio is, over govuk-frontend's hidden class, until the element upgrades.
  '.govuk-radios__item:has(>.govuk-radios__input:checked)+.govuk-radios__conditional{display:block}',
].join('');

/** The element and styles around the radios, for `Root` and `Field`. */
function Behaviour({ children }: { children: React.ReactNode }) {
  return (
    <Primitives.Root
      upgradedClass="govuk-frontend-supported"
      hiddenConditionalClass="govuk-radios__conditional--hidden"
    >
      <style href="govuk-react-radios" precedence="default">
        {radiosCss}
      </style>
      {children}
    </Primitives.Root>
  );
}

export type RootProps = Markup.RootProps;

/**
 * Let users select a single option from a list using the radios component.
 *
 * Children are `Item`s, each with an `Input`, followed by a `Conditional` where it reveals one.
 *
 * @see https://design-system.service.gov.uk/components/radios/
 */
export function Root(props: RootProps) {
  return (
    <Behaviour>
      <Markup.Root {...props} />
    </Behaviour>
  );
}

export type InputProps = Markup.InputProps & {
  /** The id of the `Conditional` this radio reveals. */
  controls?: string;
};

export function Input({ controls, ...props }: InputProps) {
  return (
    <Primitives.Input asChild controls={controls}>
      <Markup.Input {...props} />
    </Primitives.Input>
  );
}

export type ConditionalProps = Markup.ConditionalProps;

/** Content revealed while its radio is checked, straight after its `Item`. Pass the radio's `checked` or `defaultChecked` as `checked`. */
export function Conditional(props: ConditionalProps) {
  return (
    <Primitives.Conditional asChild>
      <Markup.Conditional {...props} />
    </Primitives.Conditional>
  );
}

export type ItemCompositeProps = Markup.ItemCompositeProps;

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

export type FieldProps = Markup.FieldProps;

/**
 * Let users select a single option from a list using the radios component.
 *
 * Children are `ItemComposite`s and `Divider`s.
 *
 * @see https://design-system.service.gov.uk/components/radios/
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
