import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { createSerializer } from 'jest-emotion';
import * as emotion from 'emotion';

import DocumentFooterMetadata from './';

expect.addSnapshotSerializer(createSerializer(emotion));

const example = ['example'];
const multiExample = ['example', 'exampleexample'];
const otherExample = [{
  id: 0,
  title: 'example',
  content: ['example'],
}];
const wrapper = <DocumentFooterMetadata from={example} />;
const wrapperMultiple = <DocumentFooterMetadata partOf={multiExample} />;
const wrapperOther = <DocumentFooterMetadata other={otherExample} />;

describe(DocumentFooterMetadata, () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DocumentFooterMetadata>Example</DocumentFooterMetadata>, div);
  });

  it('should render a from item', () => {
    const output = mount(wrapper);
    expect(output.find('ul')).toHaveLength(1);
  });

  it('should render multiple partof items', () => {
    expect(mount(wrapperMultiple).find('ul li')).toHaveLength(2);
  });

  it('should render a other items', () => {
    expect(mount(wrapperOther).find('ul li')).toHaveLength(1);
  });

  it('matches snapshot', () => {
    expect(mount(wrapperMultiple)).toMatchSnapshot('enzyme.mount');
  });
});
