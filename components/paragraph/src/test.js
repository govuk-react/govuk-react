import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';

import Paragraph from './';
import LinkRenderer from './link-renderer';

describe(Paragraph, () => {
  const example = 'A 19px body copy paragraph. This includes even more text to give a good representation of a more average length paragraph. That way you can see more than one line wrapping.';
  const wrapper = <Paragraph>{example}</Paragraph>;

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Paragraph>Lorem ipsum</Paragraph>, div);
  });

  it('matches wrapper snapshot', () => {
    expect(mount(wrapper)).toMatchSnapshot('wrapper mount');
  });
});

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
