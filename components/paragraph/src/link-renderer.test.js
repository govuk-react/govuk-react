import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';

import LinkRenderer from './link-renderer';

describe(LinkRenderer, () => {
  it('returns a react-router `Link` with a relative href path', () => {
    const wrapper = document.createElement('div');
    const testRender = mount(
      <MemoryRouter>
        { LinkRenderer({ href: '/relative-path', children: 'Link text' }) }
      </MemoryRouter>,
      wrapper,
    );

    expect(testRender.find('Link')).toHaveLength(1);
  });

  it('does not render a react-router `Link` node when an external path is provided ', () => {
    const wrapper = document.createElement('div');
    const testRender = mount(
      <MemoryRouter>
        { LinkRenderer({ href: 'https://google.com', children: 'Link text' }) }
      </MemoryRouter>,
      wrapper,
    );

    expect(testRender.find('Link')).toHaveLength(0);
  });

  it('does not render a react-router `Link` node when an `#anchor` path is provided ', () => {
    const wrapper = document.createElement('div');
    const testRender = mount(
      <MemoryRouter>
        { LinkRenderer({ href: '#anchor', children: 'Link text' }) }
      </MemoryRouter>,
      wrapper,
    );

    expect(testRender.find('a[href="#anchor"]')).toHaveLength(1);
  });
});
