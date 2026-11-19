import * as React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { ErrorSummary as FrontendErrorSummary } from 'govuk-frontend';
import * as Markup from 'govuk-frontend-react/error-summary';
import * as ErrorSummary from '.';

// The elements act in connectedCallback, after React commits.
const connected = () => act(() => Promise.resolve());

const parse = (html: string) => {
  const container = document.createElement('div');
  container.innerHTML = html;
  return container;
};

/** Ours, unwrapped from the elements, without the attributes for focusing on page load. */
const withoutFocus = (root: Element) => {
  root
    .querySelectorAll('govuk-react-focus-links, govuk-react-auto-focus')
    .forEach((element) => element.replaceWith(...Array.from(element.childNodes)));
  root.querySelectorAll('[data-auto-focus]').forEach((element) => {
    ['data-auto-focus', 'data-focus-tabindex', 'autofocus', 'tabindex'].forEach((name) =>
      element.removeAttribute(name)
    );
  });
  return root.innerHTML;
};

const props: Markup.CompositeProps = {
  title: 'There is a problem',
  errors: [{ href: '#full-name', children: 'Enter your full name' }],
};

describe('ErrorSummary', () => {
  beforeEach(() => {
    Element.prototype.scrollIntoView = vi.fn();
  });

  test('renders govuk-frontend-react’s markup, with autofocus for when the page loads', () => {
    const ours = parse(renderToStaticMarkup(<ErrorSummary.Composite {...props} />));
    const summary = ours.querySelector('.govuk-error-summary');
    expect(summary).toHaveAttribute('tabindex', '-1');
    expect(summary).toHaveAttribute('autofocus');
    expect(withoutFocus(ours)).toBe(parse(renderToStaticMarkup(<Markup.Composite {...props} />)).innerHTML);
  });

  test('takes focus as govuk-frontend’s does, and loses its tabindex when focus moves on', async () => {
    document.body.classList.add('govuk-frontend-supported');
    const theirs = parse(renderToStaticMarkup(<Markup.Composite {...props} />));
    document.body.appendChild(theirs);
    const root = theirs.querySelector<HTMLElement>('.govuk-error-summary');
    if (!root) throw new Error('No error summary');
    new FrontendErrorSummary(root);
    expect(root).toHaveFocus();
    expect(root).toHaveAttribute('tabindex', '-1');
    fireEvent.blur(root);
    expect(root).not.toHaveAttribute('tabindex');
    theirs.remove();
    document.body.classList.remove('govuk-frontend-supported');

    const { container } = render(<ErrorSummary.Composite {...props} />);
    await connected();
    const ours = container.querySelector('.govuk-error-summary');
    expect(ours).toHaveFocus();
    if (ours) fireEvent.blur(ours);
    expect(ours).not.toHaveAttribute('tabindex');
  });

  test('a link focuses its field', async () => {
    render(
      <>
        <ErrorSummary.Composite {...props} />
        <label htmlFor="full-name">Full name</label>
        <input id="full-name" />
      </>
    );
    await connected();
    fireEvent.click(screen.getByRole('link', { name: 'Enter your full name' }));
    expect(screen.getByLabelText('Full name')).toHaveFocus();
  });

  test('with disableAutoFocus, leaves focus alone', async () => {
    const { container } = render(<ErrorSummary.Composite {...props} disableAutoFocus />);
    await connected();
    const summary = container.querySelector('.govuk-error-summary');
    expect(summary).not.toHaveFocus();
    expect(summary).not.toHaveAttribute('tabindex');
  });
});
