import * as React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { clsx } from 'clsx';
import * as Primitives from '@govuk-react/primitives/autocomplete';

const name = 'govuk-react-search-box';
export type RootProps = ComponentProps<'div'> & {
  /** For use on dark backgrounds, such as a GOV.UK blue homepage banner. */
  inverse?: boolean;
  /** A larger input and button. */
  large?: boolean;
};

/** Wraps the search label, input and submit button. */
export function Root({ inverse, large, className, children, ...props }: RootProps) {
  return (
    <div className={clsx(name, inverse && `${name}--inverse`, large && `${name}--large`, className)} {...props}>
      {children}
    </div>
  );
}

export type LabelProps = ComponentProps<'label'> & {
  /** The label size, from govuk-frontend’s label sizes. */
  size?: 's' | 'm' | 'l' | 'xl';
  /** Hide the label visually. It’s still read by screen readers. */
  visuallyHidden?: boolean;
};

export function Label({ size, visuallyHidden, className, children, ...props }: LabelProps) {
  return (
    <label
      className={clsx(
        visuallyHidden ? 'govuk-visually-hidden' : ['govuk-label', size && `govuk-label--${size}`],
        `${name}__label`,
        className
      )}
      {...props}
    >
      {children}
    </label>
  );
}

export type WrapperProps = ComponentProps<'div'>;

/** Lays out the input and submit button side by side. */
export function Wrapper({ className, ...props }: WrapperProps) {
  return <div className={clsx(`${name}__wrapper`, className)} {...props} />;
}

export type InputProps = ComponentProps<'input'>;

export function Input({ className, type = 'search', ...props }: InputProps) {
  return (
    <input type={type} enterKeyHint="search" className={clsx('govuk-input', `${name}__input`, className)} {...props} />
  );
}

export type ButtonProps = ComponentProps<'button'>;

/** The submit button, with a search icon. Children are its accessible name, “Search” by default. */
export function Button({ className, children = 'Search', ...props }: ButtonProps) {
  return (
    <button type="submit" className={clsx(`${name}__button`, className)} {...props}>
      <svg
        className={`${name}__icon`}
        width="27"
        height="27"
        viewBox="0 0 27 27"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <circle cx="12.0161" cy="11.0161" r="8.51613" stroke="currentColor" strokeWidth="3" />
        <line x1="17.8668" y1="17.3587" x2="26.4475" y2="25.9393" stroke="currentColor" strokeWidth="3" />
      </svg>
      <span className="govuk-visually-hidden">{children}</span>
    </button>
  );
}

export type CompositeProps = Omit<InputProps, 'id'> &
  Pick<RootProps, 'inverse' | 'large'> & {
    /** The input’s id, which the label points to. */
    id: string;
    /** The label text. */
    label?: ReactNode;
    /** The label size, from govuk-frontend’s label sizes. */
    labelSize?: LabelProps['size'];
    /** Hide the label visually. It’s still read by screen readers. */
    labelVisuallyHidden?: boolean;
    /** The submit button’s visually hidden text. */
    buttonText?: ReactNode;
  };

/**
 * A search input with a label and an attached submit button, based on GOV.UK’s search component. Put it in your own `form`. Other props go on the input.
 *
 * @see https://components.publishing.service.gov.uk/component-guide/search
 */
export function Composite({
  id,
  label = 'Search on GOV.UK',
  labelSize,
  labelVisuallyHidden,
  buttonText,
  inverse,
  large,
  ...props
}: CompositeProps) {
  return (
    <Root inverse={inverse} large={large}>
      <Label htmlFor={id} size={labelSize} visuallyHidden={labelVisuallyHidden}>
        {label}
      </Label>
      <Wrapper>
        <Input id={id} {...props} />
        <Button>{buttonText}</Button>
      </Wrapper>
    </Root>
  );
}

export type AutocompleteProps = Primitives.RootProps;

/**
 * Suggests searches as the user types, around `Wrapper`, `Listbox`, `Status` and `AssistiveHint`.
 * Without JavaScript the search box works as usual. Based on GOV.UK’s search with autocomplete,
 * with behaviour from accessible-autocomplete.
 */
export function Autocomplete({ className, ...props }: AutocompleteProps) {
  return <Primitives.Root className={clsx(`${name}__autocomplete`, className)} {...props} />;
}

export type AutocompleteInputProps = InputProps;

/** `Input`, as the autocomplete’s combobox. */
export function AutocompleteInput(props: AutocompleteInputProps) {
  return (
    <Primitives.Input asChild>
      <Input {...props} />
    </Primitives.Input>
  );
}

export type ListboxProps = Primitives.ListboxProps;

/** The menu of suggestions, under the search box. Hidden until there are suggestions to show. */
export function Listbox({ className, ...props }: ListboxProps) {
  return <Primitives.Listbox className={clsx(`${name}__menu`, className)} {...props} />;
}

export type OptionProps = Primitives.OptionProps;

/** A suggestion, in `Listbox`. Children are its text, which can hold `Match`. */
export function Option({ className, children, ...props }: OptionProps) {
  return (
    <Primitives.Option className={clsx(`${name}__option`, className)} {...props}>
      <span className={`${name}__option-wrapper`}>
        <span className={`${name}__suggestion-icon`} aria-hidden="true" />
        <span className={`${name}__suggestion-text`}>{children}</span>
      </span>
    </Primitives.Option>
  );
}

export type MatchProps = ComponentProps<'mark'>;

/** The part of a suggestion that matches the query, in `Option`. */
export function Match({ className, ...props }: MatchProps) {
  return <mark className={clsx(`${name}__suggestion-highlight`, className)} {...props} />;
}

export type StatusProps = Primitives.StatusProps;

/** What screen readers hear about the suggestions. Visually hidden. */
export function Status({ className, ...props }: StatusProps) {
  return <Primitives.Status className={clsx('govuk-visually-hidden', className)} {...props} />;
}

export type AssistiveHintProps = Primitives.AssistiveHintProps;

/** How to use the suggestions, for screen readers. Never shown. */
export function AssistiveHint({
  children = 'When search suggestions are available use up and down arrows to review and enter to select. Touch device users, explore by touch or with swipe gestures.',
  ...props
}: AssistiveHintProps) {
  return <Primitives.AssistiveHint {...props}>{children}</Primitives.AssistiveHint>;
}

export type AutocompleteCompositeProps = CompositeProps &
  Pick<AutocompleteProps, 'minLength' | 'filter' | 'onQueryChange' | 'onConfirm'> & {
    /**
     * The suggestions for the query, such as from `onQueryChange`. Only those containing the query
     * show, unless `filter` is "none", such as for suggestions a server has already matched.
     * Children are an alternative.
     */
    suggestions?: string[];
    /** `Option`s, rather than `suggestions`, such as to highlight the query with `Match`. */
    children?: ReactNode;
  };

/**
 * A search box that suggests searches as the user types, based on GOV.UK’s search with
 * autocomplete. Choosing a suggestion submits the form. Put it in your own `form`. Other props go
 * on the input. Without JavaScript it’s `Composite`.
 *
 * @see https://components.publishing.service.gov.uk/component-guide/search_with_autocomplete
 */
export function AutocompleteComposite({
  id,
  label = 'Search on GOV.UK',
  labelSize,
  labelVisuallyHidden,
  buttonText,
  inverse,
  large,
  minLength = 3,
  filter,
  onQueryChange,
  onConfirm,
  suggestions,
  children,
  ...props
}: AutocompleteCompositeProps) {
  return (
    <Root inverse={inverse} large={large}>
      <Label htmlFor={id} size={labelSize} visuallyHidden={labelVisuallyHidden}>
        {label}
      </Label>
      <Autocomplete
        minLength={minLength}
        filter={filter}
        onQueryChange={onQueryChange}
        onConfirm={onConfirm}
        confirmOnBlur={false}
        submitOnConfirm
        statusNoResults="No search suggestions found"
        statusQueryTooShort="Type in %{count} or more characters for search suggestions"
        statusResults={{
          one: '%{count} search suggestion is available.',
          other: '%{count} search suggestions are available.',
        }}
      >
        <Wrapper>
          <AutocompleteInput id={id} {...props} />
          <Button>{buttonText}</Button>
        </Wrapper>
        <Listbox>
          {children ??
            suggestions?.map((suggestion) => (
              <Option key={suggestion} value={suggestion}>
                {suggestion}
              </Option>
            ))}
        </Listbox>
        <Status />
        <AssistiveHint />
      </Autocomplete>
    </Root>
  );
}
