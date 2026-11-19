import * as React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { act, fireEvent, render, screen } from '@testing-library/react';
import { CharacterCount as FrontendCharacterCount } from 'govuk-frontend';
import * as Markup from 'govuk-frontend-react/character-count';
import * as CharacterCount from '.';

// The element upgrades in connectedCallback, after React commits.
const upgraded = () => act(() => Promise.resolve());

const parse = (html: string) => {
  const container = document.createElement('div');
  container.innerHTML = html;
  return container;
};

const ignored = /^data-(character-count|state$|below-threshold$|govuk-character-count-init$)/;

/** The markup, with attributes and classes in order, and ours unwrapped from the element. */
const normalise = (root: Element) => {
  const copy = root.cloneNode(true);
  if (!(copy instanceof Element)) throw new Error('Not an element');
  copy
    .querySelectorAll('govuk-react-character-count')
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

const value = '221B Baker Street\nLondon\nNW1 6XE\n';

// From govuk-frontend's fixtures.
const cases: Record<string, Markup.FieldProps> = {
  default: { name: 'more-detail', maxLength: 10, label: 'Can you provide more detail?' },
  'with hint and error': {
    name: 'with-error',
    maxLength: 10,
    label: 'Can you provide more detail?',
    hint: "Don't include personal or financial information, eg your National Insurance number or credit card details.",
    errorMessage: 'Please provide more detail',
  },
  'with default value exceeding limit': {
    name: 'exceeding',
    maxLength: 10,
    label: 'Full address',
    defaultValue: value,
  },
  'with threshold': { name: 'with-threshold', maxLength: 10, threshold: 75, label: 'Full address' },
  "with count type 'characters' and value": {
    name: 'characters',
    countType: 'characters',
    maxLength: 20,
    label: 'Enter a job description',
    defaultValue: '👩🏻‍🚀 A content designer',
  },
  "with count type 'words' and value": {
    name: 'words',
    countType: 'words',
    maxLength: 3,
    label: 'Enter a job description',
    defaultValue: 'A content designer works',
  },
  'with translations': {
    name: 'with-translations',
    maxLength: 10,
    label: 'Full address',
    charactersUnderLimitText: { other: '%{count} characters to go', one: 'One character to go' },
    charactersAtLimitText: 'Zero characters left',
    charactersOverLimitText: { other: '%{count} characters too many', one: 'One character too many' },
  },
};

describe('CharacterCount', () => {
  afterEach(() => document.body.classList.remove('govuk-frontend-supported'));

  test.each(Object.entries(cases))('without JavaScript, renders govuk-frontend-react’s markup: %s', (_, props) => {
    const ours = parse(renderToStaticMarkup(<CharacterCount.Field {...props} />));
    ours
      .querySelectorAll('[data-character-count-status], [data-character-count-sr-status]')
      .forEach((element) => element.remove());
    expect(normalise(ours)).toBe(normalise(parse(renderToStaticMarkup(<Markup.Field {...props} />))));
  });

  test.each(Object.entries(cases))(
    'once upgraded, matches what govuk-frontend’s script builds: %s',
    async (_, props) => {
      // govuk-frontend finds the description by id, so run it on its own first.
      document.body.classList.add('govuk-frontend-supported');
      const theirs = parse(renderToStaticMarkup(<Markup.Field {...props} />));
      document.body.appendChild(theirs);
      const root = theirs.querySelector<HTMLElement>('.govuk-character-count');
      if (!root) throw new Error('No character count');
      new FrontendCharacterCount(root);
      const type = (container: Element, text: string) => {
        const textarea = container.querySelector('textarea');
        if (!textarea) throw new Error('No textarea');
        textarea.value = text;
        textarea.dispatchEvent(new Event('input', { bubbles: true }));
      };
      const theirsAtFirst = normalise(theirs);
      type(theirs, 'Hello');
      const theirsTyped = normalise(theirs);
      theirs.remove();

      const { container } = render(<CharacterCount.Field {...props} />);
      await upgraded();
      // Ours hides the counts with `hidden` until upgrade, and govuk-frontend adds them then.
      expect(normalise(container)).toBe(theirsAtFirst);
      type(container, 'Hello');
      expect(normalise(container)).toBe(theirsTyped);
    }
  );

  test('counts as the user types', async () => {
    render(<CharacterCount.Field id="more-detail" maxLength={10} label="Can you provide more detail?" />);
    await upgraded();
    const textarea = screen.getByLabelText('Can you provide more detail?');
    expect(textarea).toHaveAccessibleDescription('You can enter up to 10 characters');
    fireEvent.input(textarea, { target: { value: 'Hello there' } });
    expect(textarea).toHaveClass('govuk-textarea--error');
    expect(screen.getByText('You have 1 character too many', { selector: '[aria-hidden]' })).toHaveClass(
      'govuk-error-message'
    );
  });
});
