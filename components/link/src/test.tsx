import * as React from 'react';
import { mount } from 'enzyme';

import { Link } from '.';

describe('Link', () => {
  it('basic view matches snapshot', () => {
    expect(
      mount(
        <Link muted={false} textColour={false} noVisitedState={false} href="#">
          Link example
        </Link>
      )
    ).toMatchSnapshot('plain link');
  });

  it('all options view matches snapshot', () => {
    expect(
      mount(
        <Link muted textColour noVisitedState href="#">
          Link example
        </Link>
      )
    ).toMatchSnapshot('link with all options');
  });
});
