import * as React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { Accordion as FrontendAccordion } from 'govuk-frontend';
import * as Markup from 'govuk-frontend-react/accordion';
import * as Accordion from '.';

// The element upgrades in connectedCallback, after React commits.
const upgraded = () => act(() => Promise.resolve());

const sections = [
  { heading: 'Writing well for the web', summary: 'An introduction', children: 'Web content' },
  { heading: 'Writing well for specialists', children: 'Specialist content' },
];

const parse = (html: string) => {
  const container = document.createElement('div');
  container.innerHTML = html;
  return container;
};

const stripData = (root: Element) => {
  [root, ...Array.from(root.querySelectorAll('*'))].forEach((element) =>
    Array.from(element.attributes)
      .filter((attribute) => attribute.name.startsWith('data-accordion') || attribute.name === 'data-value')
      .forEach((attribute) => element.removeAttribute(attribute.name))
  );
  return root;
};

describe('Accordion', () => {
  afterEach(() => {
    window.sessionStorage.clear();
    document.body.classList.remove('govuk-frontend-supported');
  });

  test('without JavaScript, renders govuk-frontend-react’s markup', () => {
    const ours = parse(renderToStaticMarkup(<Accordion.Composite id="a" sections={sections} />));
    ours
      .querySelectorAll('style, [data-accordion-trigger], [data-accordion-controls]')
      .forEach((element) => element.remove());
    const element = ours.querySelector('govuk-react-accordion');
    element?.replaceWith(...Array.from(element.childNodes));
    const theirs = renderToStaticMarkup(<Markup.Composite id="a" sections={sections} />);
    expect(stripData(ours).innerHTML).toBe(theirs);
  });

  test('once upgraded, its buttons match the ones govuk-frontend’s script builds', async () => {
    render(<Accordion.Composite id="ours" sections={sections} rememberExpanded={false} />);
    await upgraded();
    document.body.classList.add('govuk-frontend-supported');
    const theirs = parse(
      renderToStaticMarkup(<Markup.Composite id="ours" sections={sections} rememberExpanded={false} />)
    );
    document.body.appendChild(theirs);
    const root = theirs.querySelector<HTMLElement>('.govuk-accordion');
    if (!root) throw new Error('No accordion');
    new FrontendAccordion(root);
    const button = (container: Element, index: number) => {
      const copy = container.querySelectorAll('button.govuk-accordion__section-button')[index]?.cloneNode(true);
      return copy instanceof Element ? stripData(copy) : undefined;
    };
    const ourAccordion = document.querySelector('govuk-react-accordion');
    if (!ourAccordion) throw new Error('No element');
    [0, 1].forEach((index) => {
      const ourButton = button(ourAccordion, index);
      const theirButton = button(theirs, index);
      expect(theirButton).toBeDefined();
      expect(ourButton?.innerHTML.replace(/ id="[^"]*"/g, '')).toBe(theirButton?.innerHTML.replace(/ id="[^"]*"/g, ''));
      ['aria-controls', 'aria-expanded', 'aria-label', 'class', 'type'].forEach((name) =>
        expect(ourButton?.getAttribute(name)).toBe(theirButton?.getAttribute(name))
      );
    });
    theirs.remove();
  });

  test('a section’s button shows and hides it', async () => {
    render(<Accordion.Composite id="toggle" sections={sections} rememberExpanded={false} />);
    await upgraded();
    const button = screen.getByRole('button', { name: /^Writing well for the web/ });
    fireEvent.click(button);
    expect(button).toHaveAttribute('aria-expanded', 'true');
    expect(button.closest('.govuk-accordion__section')).toHaveClass('govuk-accordion__section--expanded');
    expect(screen.getByRole('button', { name: 'Show all sections' })).toBeInTheDocument();
  });
});
