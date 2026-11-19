import * as React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { fireEvent, render, screen } from '@testing-library/react';
import * as Markup from 'govuk-frontend-react/button';
import { Button, StartButton } from '.';

describe('Button', () => {
  test('renders govuk-frontend’s markup, marked for the behaviour', () => {
    const ours = renderToStaticMarkup(<Button preventDoubleClick>Save and continue</Button>);
    const theirs = renderToStaticMarkup(<Markup.Button preventDoubleClick>Save and continue</Markup.Button>);
    expect(ours.replace(' data-button=""', '')).toBe(theirs);
    expect(ours).toContain('data-button=""');
  });

  test('StartButton renders govuk-frontend’s markup, marked for the behaviour', () => {
    const ours = renderToStaticMarkup(<StartButton href="/start">Start now</StartButton>);
    const theirs = renderToStaticMarkup(<Markup.StartButton href="/start">Start now</Markup.StartButton>);
    expect(ours.replace(' data-button=""', '')).toBe(theirs);
    expect(ours).toContain('data-button=""');
  });

  test('with preventDoubleClick, a double click submits the form once, as in govuk-frontend', () => {
    const onSubmit = vi.fn((event: React.FormEvent) => event.preventDefault());
    render(
      <form onSubmit={onSubmit}>
        <Button preventDoubleClick>Save and continue</Button>
      </form>
    );
    fireEvent.click(screen.getByRole('button'));
    fireEvent.click(screen.getByRole('button'));
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });

  test('Space activates a link button, as in govuk-frontend', () => {
    const onClick = vi.fn((event: React.MouseEvent) => event.preventDefault());
    render(
      <Button href="/start" onClick={onClick}>
        Start now
      </Button>
    );
    fireEvent.keyDown(screen.getByRole('button'), { key: ' ' });
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  test('preventDoubleClick works on a button rendered by another component', () => {
    const onClick = vi.fn();
    const MyButton = (props: React.ComponentProps<'button'>) => <button {...props} />;
    render(
      <Button as={MyButton} type="button" preventDoubleClick onClick={onClick}>
        Save
      </Button>
    );
    fireEvent.click(screen.getByRole('button'));
    fireEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
