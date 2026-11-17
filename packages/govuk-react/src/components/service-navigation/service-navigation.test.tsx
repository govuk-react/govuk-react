import * as React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { act, fireEvent, render, screen } from '@testing-library/react';
import * as Markup from 'govuk-frontend-react/service-navigation';
import * as ServiceNavigation from '.';

// The element upgrades in connectedCallback, after React commits.
const upgraded = () => act(() => Promise.resolve());

const items = [
  { href: '#/1', children: 'Navigation item 1' },
  { href: '#/2', children: 'Navigation item 2', current: true },
  { href: '#/3', children: 'Navigation item 3' },
];

describe('ServiceNavigation', () => {
  test('renders govuk-frontend-react’s markup, inside the disclosure element', () => {
    const html = renderToStaticMarkup(<ServiceNavigation.Composite serviceName="Service name" items={items} />);
    const unwrapped = html.replace(/<govuk-react-disclosure[^>]*>/, '').replace('</govuk-react-disclosure>', '');
    const strip = (markup: string) => markup.replace(/ data-disclosure-(toggle|content)=""/g, '');
    expect(strip(unwrapped)).toBe(renderToStaticMarkup(<Markup.Composite serviceName="Service name" items={items} />));
  });

  test('the menu button shows and hides the navigation', async () => {
    const onOpenChange = vi.fn();
    render(<ServiceNavigation.Composite items={items} onOpenChange={onOpenChange} />);
    await upgraded();
    const button = screen.getByRole('button', { name: 'Menu' });
    expect(button).toHaveAttribute('aria-expanded', 'false');
    expect(screen.getByRole('list', { hidden: true })).not.toBeVisible();
    fireEvent.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByRole('list')).toBeVisible();
    expect(onOpenChange).toHaveBeenLastCalledWith(true);
  });
});

describe('ServiceNavigation.DetailsComposite', () => {
  test('renders govuk-frontend-react’s markup, with a details and summary for the menu', () => {
    const html = renderToStaticMarkup(<ServiceNavigation.DetailsComposite serviceName="Service name" items={items} />);
    expect(html).toContain('<details class="govuk-react-service-navigation__details">');
    expect(html).toContain('<summary class="govuk-service-navigation__toggle">Menu</summary>');
  });

  test('reports the menu opening and closing', () => {
    const onOpenChange = vi.fn();
    const { container } = render(<ServiceNavigation.DetailsComposite items={items} onOpenChange={onOpenChange} />);
    const details = container.querySelector('details');
    if (!details) throw new Error('No details');
    details.open = true;
    fireEvent(details, new Event('toggle'));
    expect(onOpenChange).toHaveBeenLastCalledWith(true);
  });
});
