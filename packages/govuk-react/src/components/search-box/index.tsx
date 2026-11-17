import * as React from 'react';
import type { ComponentProps, ReactNode } from 'react';
import { clsx } from 'clsx';

const name = 'govuk-react-search-box';
const brand = 'var(--govuk-brand-colour,#1d70b8)';

/** Styles govuk-frontend has no class for, hoisted and deduplicated by React. Based on GOV.UK’s search component. */
export const searchBoxCss = `
.${name}__wrapper{display:flex;background-color:#fff}
.${name}__input{margin:0;-webkit-appearance:none;appearance:none}
.${name}__input:focus{z-index:1}
.${name}__button{position:relative;flex:0 0 auto;width:2.5rem;height:2.5rem;margin:0;padding:0;border:0;border-radius:0;outline:2px solid transparent;outline-offset:0;cursor:pointer;background-color:${brand};color:#fff}
.${name}__button:hover{background-color:color-mix(in srgb,${brand} 75%,#000)}
.${name}__button:focus{z-index:1;outline:3px solid var(--govuk-focus-colour,#fd0);box-shadow:inset 0 0 0 4px #0b0c0c}
.${name}__icon{position:absolute;inset:0;width:100%;height:100%;transform:scale(.5);pointer-events:none}
.${name}:not(.${name}--inverse) .${name}__input{border-right-width:0}
.${name}:not(.${name}--inverse) .${name}__input:focus{border-right-width:2px}
.${name}--inverse .${name}__label{color:#fff}
.${name}--inverse .${name}__input{border-width:0}
.${name}--inverse .${name}__button{background-color:color-mix(in srgb,${brand} 20%,#fff);color:${brand}}
.${name}--inverse .${name}__button:hover{background-color:color-mix(in srgb,${brand} 5%,#fff)}
.${name}--large .${name}__input{height:3.125rem}
.${name}--large .${name}__button{width:3.125rem;height:3.125rem}
.${name}--large .${name}__icon{transform:scale(.4)}
`;

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
      <style href={name} precedence="default">
        {searchBoxCss}
      </style>
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
