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
.${name}--loading>.${name}__overlay{visibility:visible;transition-delay:0s}
.${name}--loading>.${name}__overlay>.${name}__backdrop{opacity:var(--${name}-background-opacity);transition-duration:var(--${name}-time-in)}
.${name}--loading>.${name}__overlay>.${name}__spinner{opacity:1;transition-duration:var(--${name}-time-in);transition-delay:calc(var(--${name}-time-in) / 2)}

.${name}__text{display:none;position:absolute;z-index:1;margin:0;padding-top:20px}
@media (prefers-reduced-motion:reduce){.${name}__overlay,.${name}__backdrop,.${name}__spinner{transition:none}.${name}__spinner{display:none}.${name}__text{display:block}}
@keyframes ${name}-fade{0%{opacity:.250075}.01%{opacity:.25}.03%{opacity:1}100%{opacity:.250075}}
`;

export type LoadingBoxProps = Omit<ComponentProps<'div'>, 'title'> & {
  /** Content that the loading box overlays. */
  children?: ReactNode;
  /** Whether the content is loading. Shows the spinner and overlay, announces `statusText`, and sets `aria-busy` on the content. */
  loading?: boolean;
  /** Text announced to screen reader users while loading, and shown instead of the spinner when the user prefers reduced motion. Say what’s happening, such as “Sending your application”. */
  statusText?: ReactNode;
  /** Make the content inert while loading, so users can’t interact with it or move focus into it. Focus inside the content moves to the page body, so move focus yourself when loading ends. */
  inertWhileLoading?: boolean;
  /** Colour of the spinner, as any CSS colour. Defaults to the text colour. */
  spinnerColor?: string;
  /** Colour of the overlay, as any CSS colour. Defaults to the page background colour. */
  backgroundColor?: string;
  /** Opacity of the overlay, from 0 to 1. */
  backgroundColorOpacity?: number;
  /** Length of the fade-in, in milliseconds. */
  timeIn?: number;
  /** Length of the fade-out, in milliseconds. */
  timeOut?: number;
};

/**
 * Wraps content that loads asynchronously. While `loading` is `true`, a spinner and overlay cover the content and `statusText` is announced.
 *
 * - Say what’s happening in `statusText`, and keep it showing for at least a couple of seconds so it doesn’t flash and screen readers have time to announce it.
 * - Don’t disable buttons while loading: disabled buttons have poor contrast and can confuse some users. Prevent repeat submissions in your submit handler, and on the server.
 * - When loading ends, move focus to the result, or to the error summary if there are errors.
 * - If loading fails or times out, show an error and a way to continue. Don’t leave the spinner running.
 *
 * @see https://github.com/alphagov/govuk-design-system/discussions/6167
 */
export function LoadingBox({
  children,
  loading = false,
  statusText = 'Loading',
  inertWhileLoading = false,
  spinnerColor = 'var(--govuk-text-colour, #0b0c0c)',
  backgroundColor = 'var(--govuk-body-background-colour, #fff)',
  backgroundColorOpacity = 0.85,
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
    <div
      className={[name, loading && `${name}--loading`, className].filter(Boolean).join(' ')}
      style={variables}
      {...props}
    >
      <style href={name} precedence="default">
        {loadingBoxCss}
      </style>
      <div className={`${name}__overlay`} aria-hidden="true">
        <svg
          className={`${name}__spinner`}
          viewBox="-25 -25 50 50"
          preserveAspectRatio="xMidYMid meet"
          fill={spinnerColor}
          focusable="false"
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
        <p className={`govuk-body govuk-!-font-weight-bold ${name}__text`}>{statusText}</p>
        <div className={`${name}__backdrop`} />
      </div>
      <div className="govuk-visually-hidden" role="status">
        {loading ? statusText : null}
      </div>
      <div aria-busy={loading} inert={inertWhileLoading && loading}>
        {children}
      </div>
    </div>
  );
}
