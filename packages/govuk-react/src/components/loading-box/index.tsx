import * as React from 'react';
import type { CSSProperties, ComponentProps, ReactNode } from 'react';

const name = 'govuk-react-loading-box';

/** Static styles, hoisted and deduplicated by React. Dynamic values come in through custom properties. */
export const loadingBoxCss = `
.${name}{position:relative;padding-bottom:2px;min-height:10px}
.${name}__overlay{position:absolute;inset:0;z-index:100;display:flex;justify-content:center;visibility:hidden;transition:visibility 0s linear var(--${name}-time-out)}
.${name}__backdrop{position:absolute;inset:0;background-color:var(--${name}-background-colour);opacity:0;transition:opacity var(--${name}-time-out) ease-in-out}
.${name}__spinner{position:absolute;z-index:1;display:block;width:50px;height:100%;max-height:calc(50vh + 100px);opacity:0;transition:opacity var(--${name}-time-out) ease-in-out}
.${name}__spinner rect{animation:${name}-fade 1s infinite linear}
.${name}[aria-busy=true]>.${name}__overlay{visibility:visible;transition-delay:0s}
.${name}[aria-busy=true]>.${name}__overlay>.${name}__backdrop{opacity:var(--${name}-background-opacity);transition-duration:var(--${name}-time-in)}
.${name}[aria-busy=true]>.${name}__overlay>.${name}__spinner{opacity:1;transition-duration:var(--${name}-time-in);transition-delay:calc(var(--${name}-time-in) / 2)}
@keyframes ${name}-fade{0%{opacity:.250075}.01%{opacity:.25}.03%{opacity:1}100%{opacity:.250075}}
`;

export type LoadingBoxProps = ComponentProps<'div'> & {
  /** Content that the loading box overlays. */
  children?: ReactNode;
  /** Whether the content is loading. Shows the spinner and overlay, and sets `aria-busy`. */
  loading?: boolean;
  /** Colour of the spinner, as any CSS colour. Defaults to the text colour. */
  spinnerColor?: string;
  /** Colour of the overlay, as any CSS colour. Defaults to the page background colour. */
  backgroundColor?: string;
  /** Opacity of the overlay, from 0 to 1. */
  backgroundColorOpacity?: number;
  /** Text alternative for the spinner. */
  title?: string;
  /** Length of the fade-in, in milliseconds. */
  timeIn?: number;
  /** Length of the fade-out, in milliseconds. */
  timeOut?: number;
};

/**
 * Wraps content that loads asynchronously. While `loading` is `true`, a spinner and overlay cover the content.
 */
export function LoadingBox({
  children,
  loading = false,
  spinnerColor = 'var(--govuk-text-colour, #0b0c0c)',
  backgroundColor = 'var(--govuk-body-background-colour, #fff)',
  backgroundColorOpacity = 0.85,
  title = 'Loading',
  timeIn = 800,
  timeOut = 200,
  className,
  style,
  ...props
}: LoadingBoxProps) {
  const variables: CSSProperties & Record<`--${string}`, string> = {
    [`--${name}-background-colour`]: backgroundColor,
    [`--${name}-background-opacity`]: String(backgroundColorOpacity),
    [`--${name}-time-in`]: `${timeIn}ms`,
    [`--${name}-time-out`]: `${timeOut}ms`,
    ...style,
  };
  return (
    <div className={className ? `${name} ${className}` : name} aria-busy={loading} style={variables} {...props}>
      <style href={name} precedence="default">
        {loadingBoxCss}
      </style>
      <div className={`${name}__overlay`}>
        <svg
          className={`${name}__spinner`}
          viewBox="-25 -25 50 50"
          preserveAspectRatio="xMidYMid meet"
          fill={spinnerColor}
          role="img"
          aria-label={title}
        >
          {Array.from({ length: 12 }, (_, i) => (
            <rect
              key={i}
              width="12"
              height="5"
              rx="2.5"
              ry="2.5"
              opacity="0"
              transform={`rotate(${i * 30}, 0, 2) translate(10 0)`}
              style={{ animationDelay: `${i * 83}ms` }}
            />
          ))}
        </svg>
        <div className={`${name}__backdrop`} />
      </div>
      {children}
    </div>
  );
}
