import * as React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { Radios as FrontendRadios } from 'govuk-frontend';
import * as Markup from 'govuk-frontend-react/radios';
import * as Radios from '.';

// The element upgrades in connectedCallback, after React commits.
const upgraded = () => act(() => Promise.resolve());

const parse = (html: string) => {
  const container = document.createElement('div');
  container.innerHTML = html;
  return container;
};

const ignored = /^(data-choices|data-aria-controls$|data-upgraded$|data-govuk-radios-init$)/;

/** The markup, with attributes and classes in order, and ours unwrapped from the element. */
const normalise = (root: Element) => {
  const copy = root.cloneNode(true);
  if (!(copy instanceof Element)) throw new Error('Not an element');
  copy.querySelectorAll('style').forEach((element) => element.remove());
  copy
    .querySelectorAll('govuk-react-choices')
    .forEach((element) => element.replaceWith(...Array.from(element.childNodes)));
  copy.querySelectorAll('*').forEach((element) => {
    const attributes = Array.from(element.attributes)
      .filter((attribute) => !ignored.test(attribute.name))
      .map((attribute) => [
        attribute.name,
        attribute.name === 'class' ? attribute.value.split(/\s+/).sort().join(' ') : attribute.value,
      ]);
    Array.from(element.attributes).forEach((attribute) => element.removeAttribute(attribute.name));
    attributes.sort(([a], [b]) => a.localeCompare(b)).forEach(([name, text]) => element.setAttribute(name, text));
  });
  return copy.innerHTML;
};

const field: Markup.FieldProps = {
  idPrefix: 'contact',
  legend: 'How would you prefer to be contacted?',
  items: [
    { id: 'contact', name: 'contact', value: 'email', label: 'Email', conditional: 'Email address' },
    { id: 'contact-2', name: 'contact', value: 'phone', label: 'Phone', conditional: 'Phone number' },
    { divider: 'or' },
    { id: 'contact-3', name: 'contact', value: 'text', label: 'Text message', defaultChecked: true },
  ],
};

describe('Radios', () => {
  afterEach(() => document.body.classList.remove('govuk-frontend-supported'));

  test('without JavaScript, renders govuk-frontend-react’s markup', () => {
    const ours = parse(renderToStaticMarkup(<Radios.Field {...field} />));
    expect(normalise(ours)).toBe(normalise(parse(renderToStaticMarkup(<Markup.Field {...field} />))));
  });

  test('once upgraded, matches what govuk-frontend’s script does', async () => {
    // govuk-frontend finds reveals by id, so run it on its own first.
    document.body.classList.add('govuk-frontend-supported');
    const theirs = parse(renderToStaticMarkup(<Markup.Field {...field} />));
    document.body.appendChild(theirs);
    const root = theirs.querySelector<HTMLElement>('.govuk-radios');
    if (!root) throw new Error('No radios');
    new FrontendRadios(root);
    const theirsAtFirst = normalise(theirs);
    theirs.querySelector<HTMLInputElement>('#contact')?.click();
    const theirsClicked = normalise(theirs);
    theirs.remove();
    document.body.classList.remove('govuk-frontend-supported');

    const { container } = render(<Radios.Field {...field} />);
    await upgraded();
    expect(normalise(container)).toBe(theirsAtFirst);
    fireEvent.click(screen.getByLabelText('Email'));
    expect(normalise(container)).toBe(theirsClicked);
  });

  test('reveals content only while its radio is checked', async () => {
    render(<Radios.Field {...field} />);
    await upgraded();
    expect(screen.getByText('Email address')).toHaveClass('govuk-radios__conditional--hidden');
    fireEvent.click(screen.getByLabelText('Email'));
    expect(screen.getByText('Email address')).not.toHaveClass('govuk-radios__conditional--hidden');
    expect(screen.getByLabelText('Email')).toHaveAttribute('aria-expanded', 'true');
  });
});
