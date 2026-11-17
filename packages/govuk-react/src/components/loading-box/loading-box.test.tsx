import { render, screen } from '@testing-library/react';
import * as React from 'react';
import { LoadingBox } from '.';

describe('LoadingBox', () => {
  test('announces the status text only while loading', () => {
    const { rerender } = render(<LoadingBox statusText="Sending your details">Content</LoadingBox>);
    expect(screen.getByRole('status')).toBeEmptyDOMElement();
    rerender(
      <LoadingBox loading statusText="Sending your details">
        Content
      </LoadingBox>
    );
    expect(screen.getByRole('status')).toHaveTextContent('Sending your details');
  });

  test('keeps the status region outside the busy content, so it is announced', () => {
    render(<LoadingBox loading>Content</LoadingBox>);
    expect(screen.getByRole('status').closest('[aria-busy="true"]')).toBeNull();
    expect(screen.getByText('Content')).toHaveAttribute('aria-busy', 'true');
  });

  test('makes the content inert while loading when asked', () => {
    const { rerender } = render(
      <LoadingBox loading inertWhileLoading>
        <button type="button">Continue</button>
      </LoadingBox>
    );
    expect(screen.getByText('Continue').parentElement).toHaveAttribute('inert');
    rerender(
      <LoadingBox inertWhileLoading>
        <button type="button">Continue</button>
      </LoadingBox>
    );
    expect(screen.getByRole('button', { name: 'Continue' }).parentElement).not.toHaveAttribute('inert');
  });
});
