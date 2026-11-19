import * as React from 'react';
import type { ComponentProps } from 'react';
import accordion from 'inline:accordion';
import autoFocus from 'inline:auto-focus';
import button from 'inline:button';
import characterCount from 'inline:character-count';
import choices from 'inline:choices';
import disclosure from 'inline:disclosure';
import fileUpload from 'inline:file-upload';
import focusLinks from 'inline:focus-links';
import modal from 'inline:modal';
import passwordInput from 'inline:password-input';
import tabs from 'inline:tabs';

/*
 * The elements' scripts, to inline in the page, so the markup is interactive as soon as it loads,
 * before React. Once React loads, its parts pick up where the elements are, and each element is
 * defined only once, whichever script runs first.
 *
 * Each script is a string, so a bundler includes only the ones you import.
 */

export {
  accordion,
  autoFocus,
  button,
  characterCount,
  choices,
  disclosure,
  fileUpload,
  focusLinks,
  modal,
  passwordInput,
  tabs,
};

export type InlineScriptProps = Omit<ComponentProps<'script'>, 'children' | 'dangerouslySetInnerHTML' | 'src'> & {
  /** One of this module's scripts, such as `tabs`. */
  script: string;
};

/**
 * Renders an element's script inline, such as `<InlineScript script={tabs} />` in the page's
 * `head`. Pass `nonce` for a Content Security Policy. Rendered on the server: a script that React
 * adds in the browser doesn't run, and isn't needed, since React's parts define their elements.
 */
export function InlineScript({ script, ...props }: InlineScriptProps) {
  return <script {...props} dangerouslySetInnerHTML={{ __html: script }} />;
}
