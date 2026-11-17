import * as React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { clsx } from 'clsx';

const name = 'govuk-react-search-box';

/** Styles govuk-frontend has no class for, hoisted and deduplicated by React. */
export const searchBoxCss = `
.${name}{display:flex}
.${name}__input{margin:0;border-right-width:0}
.${name}__input:focus{z-index:1}
.${name}__button{position:relative;flex:0 0 auto;width:2.5rem;height:2.5rem;margin:0;padding:0;border:0;border-radius:0;background-color:var(--govuk-brand-colour,#1d70b8);color:var(--govuk-inverse-text-colour,#fff);cursor:pointer}
.${name}__button:hover{background-color:color-mix(in srgb,var(--govuk-brand-colour,#1d70b8),#000 20%)}
.${name}__button:focus{outline:3px solid transparent;background-color:var(--govuk-focus-colour,#fd0);color:var(--govuk-focus-text-colour,#0b0c0c);box-shadow:inset 0 0 0 4px var(--govuk-focus-text-colour,#0b0c0c)}
.${name}__icon{display:block;width:1.25rem;height:1.25rem;margin:auto;fill:currentcolor}
`;

export type RootProps = ComponentProps<'div'>;

/** Lays out a search input and its submit button side by side. */
export function Root({ className, children, ...props }: RootProps) {
  return (
    <div className={clsx(name, className)} {...props}>
      <style href={name} precedence="default">
        {searchBoxCss}
      </style>
      {children}
    </div>
  );
}

export type LabelProps = ComponentProps<'label'>;

/** The label for the search input. Visually hidden. */
export function Label({ className, children, ...props }: LabelProps) {
  return (
    <label className={clsx('govuk-visually-hidden', className)} {...props}>
      {children}
    </label>
  );
}

export type InputProps = ComponentProps<'input'>;

export function Input({ className, type = 'search', ...props }: InputProps) {
  return <input type={type} className={clsx('govuk-input', `${name}__input`, className)} {...props} />;
}

export type ButtonProps = ComponentProps<'button'>;

/** The submit button, with a search icon. Children are its accessible name, “Search” by default. */
export function Button({ className, children = 'Search', ...props }: ButtonProps) {
  return (
    <button type="submit" className={clsx(`${name}__button`, className)} {...props}>
      <svg className={`${name}__icon`} viewBox="0 0 57 57" aria-hidden="true" focusable="false">
        <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23 s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92 c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17 s-17-7.626-17-17S14.61,6,23.984,6z" />
      </svg>
      <span className="govuk-visually-hidden">{children}</span>
    </button>
  );
}

export type CompositeProps = Omit<InputProps, 'id'> & {
  /** The input’s id, which the label points to. */
  id: string;
  /** The visually hidden label. */
  label?: ReactNode;
  /** The submit button’s visually hidden text. */
  buttonText?: ReactNode;
};

/**
 * A search input with a visually hidden label and an attached submit button. Put it in your own `form`. Other props go on the input.
 */
export function Composite({ id, label = 'Search', buttonText, ...props }: CompositeProps) {
  return (
    <Root>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} {...props} />
      <Button>{buttonText}</Button>
    </Root>
  );
}
