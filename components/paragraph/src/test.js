import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount } from 'enzyme';

import Paragraph, { exampleText, exampleCodeBlock } from './fixtures';

describe(Paragraph, () => {
  const examplePlain = 'Some basic text';
  const exampleInlineCode = '`Some inline code example`';
  const exampleEmphasis = '*Some emphasis example*';
  const exampleStrong = '**Some strong/bold example**';
  const exampleInternalLink = '[link text](/some_link)';
  const exampleExternalLink = '[link text](http://google.com)';
  let wrapper;

  it('renders a paragraph element', () => {
    wrapper = mount(<Paragraph>{examplePlain}</Paragraph>);
    expect(wrapper.find('p')).toHaveLength(1);
  });

  it('renders a inline code block', () => {
    wrapper = mount(<Paragraph>{exampleInlineCode}</Paragraph>);
    expect(wrapper.find('code')).toHaveLength(1);
  });

  it('renders a code block', () => {
    wrapper = mount(<Paragraph>{exampleCodeBlock}</Paragraph>);
    expect(wrapper.find('pre')).toHaveLength(1);
  });

  it('renders emphasis text', () => {
    wrapper = mount(<Paragraph>{exampleEmphasis}</Paragraph>);
    expect(wrapper.find('em')).toHaveLength(1);
  });

  it('renders strong text', () => {
    wrapper = mount(<Paragraph>{exampleStrong}</Paragraph>);
    expect(wrapper.find('strong')).toHaveLength(1);
  });

  it('renders internal links', () => {
    wrapper = mount(<MemoryRouter><Paragraph>{exampleInternalLink}</Paragraph></MemoryRouter>);
    expect(wrapper.find('Link')).toHaveLength(1);
  });

  it('renders external links', () => {
    wrapper = mount(<Paragraph>{exampleExternalLink}</Paragraph>);
    expect(wrapper.find('a')).toHaveLength(1);
  });

  it('renders full example text from fixtures', () => {
    wrapper = mount(<Paragraph>{exampleText}</Paragraph>);
  });

  it('matches wrapper snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
