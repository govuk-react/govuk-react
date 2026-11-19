import * as React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { act, render, screen } from '@testing-library/react';
import * as Markup from 'govuk-frontend-react/notification-banner';
import * as NotificationBanner from '.';

// The element acts in connectedCallback, after React commits.
const connected = () => act(() => Promise.resolve());

const parse = (html: string) => {
  const container = document.createElement('div');
  container.innerHTML = html;
  return container;
};

describe('NotificationBanner', () => {
  test('renders govuk-frontend-react’s markup', () => {
    const ours = parse(
      renderToStaticMarkup(<NotificationBanner.Composite success heading="Training outcome recorded" />)
    );
    ours
      .querySelectorAll('govuk-react-auto-focus')
      .forEach((element) => element.replaceWith(...Array.from(element.childNodes)));
    ours.querySelectorAll('[data-auto-focus]').forEach((element) => {
      ['data-auto-focus', 'data-focus-tabindex', 'autofocus', 'tabindex'].forEach((name) =>
        element.removeAttribute(name)
      );
    });
    expect(ours.innerHTML).toBe(
      parse(renderToStaticMarkup(<Markup.Composite success heading="Training outcome recorded" />)).innerHTML
    );
  });

  test('a success banner takes focus, as in govuk-frontend', async () => {
    render(<NotificationBanner.Composite success heading="Training outcome recorded" />);
    await connected();
    expect(screen.getByRole('alert')).toHaveFocus();
  });

  test('an important banner leaves focus alone', async () => {
    render(<NotificationBanner.Composite heading="You have 7 days left to send your application." />);
    await connected();
    expect(screen.getByRole('region')).not.toHaveFocus();
    expect(screen.getByRole('region')).not.toHaveAttribute('tabindex');
  });
});
