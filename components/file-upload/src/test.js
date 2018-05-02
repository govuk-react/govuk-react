import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { createSerializer } from 'jest-emotion';
import * as emotion from 'emotion';

import FileUpload from './';

expect.addSnapshotSerializer(createSerializer(emotion));

describe('FileUpload', () => {
  const example = 'example';
  const meta = {
    touched: true,
    error: example,
  };
  const wrapper = <FileUpload>{example}</FileUpload>;
  const wrapperError = (
    <FileUpload hint={example} meta={meta}>
      {example}
    </FileUpload>
  );
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(wrapper, div);
    ReactDOM.render(wrapperError, div);
  });

  it('matches snapshot', () => {
    expect(mount(wrapper)).toMatchSnapshot('enzyme.mount');
  });
});
