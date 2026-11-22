import type { ComponentProps } from 'react';

/** The React logo, as the govuk-react site's header has. */
export function ReactLogo(props: ComponentProps<'svg'>) {
  return (
    <svg viewBox="-11.5 -10.23 23 20.46" fill="none" stroke="currentColor" strokeWidth="1.2" {...props}>
      <circle r="2.05" fill="currentColor" stroke="none" />
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </svg>
  );
}
