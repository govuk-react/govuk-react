import * as React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { fireEvent, render, screen } from '@testing-library/react';
import * as Markup from 'govuk-frontend-react/button';
import * as Button from '.';

describe('Button', () => {
  test.each([
    ['a button', { preventDoubleClick: true, children: 'Save and continue' }],
    ['a start button', { start: true, href: '/start', children: 'Start now' }],
  ])('renders govuk-frontend’s markup, marked for the behaviour: %s', (_, props) => {
    const ours = renderToStaticMarkup(<Button.Composite {...props} />);
    const theirs = renderToStaticMarkup(<Markup.Composite {...props} />);
    expect(ours.replace(' data-button=""', '')).toBe(theirs);
    expect(ours).toContain('data-button=""');
  });

  test('with preventDoubleClick, a double click submits the form once, as in govuk-frontend', () => {
    const onSubmit = vi.fn((event: React.FormEvent) => event.preventDefault());
    render(
      <form onSubmit={onSubmit}>
        <Button.Composite preventDoubleClick>Save and continue</Button.Composite>
      </form>
    );
    fireEvent.click(screen.getByRole('button'));
    fireEvent.click(screen.getByRole('button'));
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  test('Space activates a link button, as in govuk-frontend', () => {
    const onClick = vi.fn((event: React.MouseEvent) => event.preventDefault());
    render(
      <Button.Root href="/start" onClick={onClick}>
        Start now
      </Button.Root>
    );
    fireEvent.keyDown(screen.getByRole('button'), { key: ' ' });
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
