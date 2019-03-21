import React from 'react';
import { boolean, text } from '@storybook/addon-knobs/react';

import { BrowserRouter, Link as RLink, Route } from 'react-router-dom';

import Link, { LinkDocumented } from '.';

export default () => (
  // eslint-disable-next-line jsx-a11y/anchor-is-valid
  <LinkDocumented
    muted={boolean('muted', false)}
    textColour={boolean('textColour', false)}
    noVisitedState={boolean('noVisitedState', false)}
    href="#"
  >
    {text('Link content', 'Link example')}
  </LinkDocumented>
);

export const LinkWithAllOptionsOn = () => (
  // eslint-disable-next-line jsx-a11y/anchor-is-valid
  <LinkDocumented muted textColour noVisitedState href="#">
    {text('Link content', 'Link example')}
  </LinkDocumented>
);

export const LinkWithRouter = () => (
  <BrowserRouter>
    <div>
      <Link as={RLink} to="/first">
        First link
      </Link>
      <br />
      <Link as={RLink} to="/second">
        Second link
      </Link>
      <br />
      <div>
        <Route path="/first" render={() => 'First route'} />
        <Route path="/second" render={() => 'Second route'} />
      </div>
    </div>
  </BrowserRouter>
);
