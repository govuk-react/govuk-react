import * as React from 'react';
import { mount } from 'enzyme';
import Paragraph from '@govuk-react/paragraph';

import { InsetText } from '.';

describe('inset text', () => {
  it('renders provided text', () => {
    const wrapper = mount(
      <InsetText>
        It can take up to 8 weeks to register a lasting power of attorney if there are no mistakes in the application.
      </InsetText>
    );

    expect(wrapper.text()).toContain(
      'It can take up to 8 weeks to register a lasting power of attorney if there are no mistakes in the application.'
    );
  });

  it('matches the InsetText snapshot', () => {
    expect(
      mount(
        <InsetText>
          It can take up to 8 weeks to register a lasting power of attorney if there are no mistakes in the application.
        </InsetText>
      )
    ).toMatchSnapshot('inset text');
  });

  it('can render with a paragraph', () => {
    expect(
      mount(
        <InsetText>
          <Paragraph mb={0}>
            It can take up to 8 weeks to register a lasting power of attorney if there are no mistakes in the
            application.
          </Paragraph>
        </InsetText>
      )
    ).toMatchSnapshot('inset text with paragraph');
  });
});
