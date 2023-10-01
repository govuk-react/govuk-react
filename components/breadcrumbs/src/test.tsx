import * as React from 'react';
import { render } from '@testing-library/react';

import { Breadcrumbs } from '.';

describe('breadcrumbs', () => {
  it('should render an item in ordered list', async () => {
    const wrapper = render(<Breadcrumbs>example</Breadcrumbs>);

    expect(await wrapper.findAllByRole('list')).toHaveLength(1);
  });

  it('should render multiple items in ordered list', async () => {
    const wrapper = render(
      <Breadcrumbs>
        <Breadcrumbs.Link href="/section">Section 1</Breadcrumbs.Link>
        example
      </Breadcrumbs>
    );

    expect(await wrapper.findAllByRole('listitem')).toHaveLength(2);
  });

  it('should render an ordered list without ghost/duff children', async () => {
    const wrapper = render(
      <Breadcrumbs>
        <Breadcrumbs.Link href="/section">Section 1</Breadcrumbs.Link>
        {[] /* empty node */}
        {null /* null node */}
        example
      </Breadcrumbs>
    );

    expect(await wrapper.findAllByRole('listitem')).toHaveLength(2);
  });

  it('allows attributes to be set', async () => {
    const wrapper = render(<Breadcrumbs data-testid="test">Crumb</Breadcrumbs>);

    expect(await wrapper.getByTestId('test')).toBeInTheDocument();
  });
});
