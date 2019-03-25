import React from 'react';
import { mount } from 'enzyme';

import Link from '.';

describe('Breadcrumb Link', () => {
  // Disable console warn, as this is deprecated
  // eslint-disable-next-line no-console
  const nativeWarn = console.warn;
  beforeEach(() => {
    jest.resetModules();
    // eslint-disable-next-line no-console
    console.warn = () => {};
  });

  afterEach(() => {
    // eslint-disable-next-line no-console
    console.warn = nativeWarn;
  });

  it('renders without crashing', () => {
    mount(<Link href="#id">Example</Link>);
  });
});
