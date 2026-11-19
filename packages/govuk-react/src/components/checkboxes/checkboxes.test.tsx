import * as React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { Checkboxes as FrontendCheckboxes } from 'govuk-frontend';
import * as Markup from 'govuk-frontend-react/checkboxes';
import * as Checkboxes from '.';

// The element upgrades in connectedCallback, after React commits.
const upgraded = () => act(() => Promise.resolve());

// An exclusive checkbox unchecks the others in a task of its own.
const settled = () => act(() => new Promise((resolve) => setTimeout(resolve)));

const parse = (html: string) => {
  const container = document.createElement('div');
  container.innerHTML = html;
  return container;
};

const ignored = /^(data-choices|data-aria-controls$|data-upgraded$|data-govuk-checkboxes-init$)/;

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

describe('Checkboxes', () => {
  afterEach(() => document.body.classList.remove('govuk-frontend-supported'));

  test('without JavaScript, renders govuk-frontend-react’s markup', () => {
    const ours = parse(renderToStaticMarkup(<Checkboxes.Field {...field} />));
    expect(normalise(ours)).toBe(normalise(parse(renderToStaticMarkup(<Markup.Field {...field} />))));
  });

  test('once upgraded, matches what govuk-frontend’s script does', async () => {
    // govuk-frontend finds reveals by id, so run it on its own first.
    document.body.classList.add('govuk-frontend-supported');
    const theirs = parse(renderToStaticMarkup(<Markup.Field {...field} />));
    document.body.appendChild(theirs);
    const root = theirs.querySelector<HTMLElement>('.govuk-checkboxes');
    if (!root) throw new Error('No checkboxes');
    new FrontendCheckboxes(root);
    const theirsAtFirst = normalise(theirs);
    theirs.querySelector<HTMLInputElement>('#contact')?.click();
    const theirsClicked = normalise(theirs);
    theirs.remove();
    document.body.classList.remove('govuk-frontend-supported');

    const { container } = render(<Checkboxes.Field {...field} />);
    await upgraded();
    expect(normalise(container)).toBe(theirsAtFirst);
    fireEvent.click(screen.getByLabelText('Email'));
    expect(normalise(container)).toBe(theirsClicked);
  });

  test('reveals content only while its checkbox is checked', async () => {
    render(<Checkboxes.Field {...field} />);
    await upgraded();
    expect(screen.getByText('Email address')).toHaveClass('govuk-checkboxes__conditional--hidden');
    fireEvent.click(screen.getByLabelText('Email'));
    expect(screen.getByText('Email address')).not.toHaveClass('govuk-checkboxes__conditional--hidden');
    expect(screen.getByLabelText('Email')).toHaveAttribute('aria-expanded', 'true');
  });

  test('"None" unchecks the others, and they uncheck it', async () => {
    render(
      <Checkboxes.Field
        idPrefix="countries"
        legend="Will you be travelling to any of these countries?"
        items={[
          { id: 'countries', name: 'countries', value: 'france', label: 'France' },
          { id: 'countries-2', name: 'countries', value: 'spain', label: 'Spain' },
          { divider: 'or' },
          { id: 'countries-3', name: 'countries', value: 'none', label: 'No', exclusive: true },
        ]}
      />
    );
    await upgraded();
    fireEvent.click(screen.getByLabelText('France'));
    fireEvent.click(screen.getByLabelText('No'));
    await settled();
    expect(screen.getByLabelText('France')).not.toBeChecked();
    fireEvent.click(screen.getByLabelText('Spain'));
    await settled();
    expect(screen.getByLabelText('No')).not.toBeChecked();
  });
});
