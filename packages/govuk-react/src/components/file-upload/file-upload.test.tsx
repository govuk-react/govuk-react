import * as React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { act, fireEvent, render } from '@testing-library/react';
import { FileUpload as FrontendFileUpload } from 'govuk-frontend';
import * as Markup from 'govuk-frontend-react/file-upload';
import { EnhancedFileUploadField, type EnhancedFileUploadFieldProps, FileUploadField } from '.';

// The element upgrades in connectedCallback, after React commits.
const upgraded = () => act(() => Promise.resolve());

const parse = (html: string) => {
  const container = document.createElement('div');
  container.innerHTML = html;
  return container;
};

const ignored = /^data-(file-upload|upgraded$|empty$|dragging$|disabled$|govuk-file-upload-init$)/;

/** The markup, with attributes and classes in order, and ours unwrapped from the element. */
const normalise = (root: Element) => {
  const copy = root.cloneNode(true);
  if (!(copy instanceof Element)) throw new Error('Not an element');
  copy
    .querySelectorAll('govuk-react-file-upload')
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

const choose = (container: Element, ...names: string[]) => {
  const input = container.querySelector('input[type="file"]');
  if (!input) throw new Error('No file input');
  Object.defineProperty(input, 'files', { configurable: true, value: names.map((name) => new File(['x'], name)) });
  fireEvent.change(input);
};

// From govuk-frontend's fixtures.
const cases: Record<string, EnhancedFileUploadFieldProps> = {
  enhanced: { id: 'file-upload-1', name: 'file-upload-1', label: 'Upload a file' },
  'enhanced, with error message and hint': {
    id: 'file-upload-2',
    name: 'file-upload-2',
    label: 'Upload a file',
    hint: 'Your photo may be in your Pictures, Photos, Downloads or Desktop folder. Or in an app like iPhoto.',
    errorMessage: 'Error message goes here',
  },
  'enhanced, multiple files': { id: 'file-upload-3', name: 'file-upload-3', label: 'Upload a file', multiple: true },
  'enhanced, disabled': { id: 'file-upload-4', name: 'file-upload-4', label: 'Upload a file', disabled: true },
  'enhanced, translated': {
    id: 'file-upload-5',
    name: 'file-upload-5',
    label: 'Llwythwch ffeil i fyny',
    multiple: true,
    chooseFilesButtonText: 'Dewiswch ffeil',
    dropInstructionText: 'neu ollwng ffeil',
    noFileChosenText: "Dim ffeil wedi'i dewis",
    multipleFilesChosenText: { other: "%{count} ffeil wedi'u dewis", one: "%{count} ffeil wedi'i dewis" },
    enteredDropZoneText: "Wedi mynd i mewn i'r parth gollwng",
    leftDropZoneText: 'Gadawodd y parth gollwng',
  },
};

describe('FileUpload', () => {
  beforeAll(() => {
    // govuk-frontend sets `innerText`, which jsdom doesn't lay out.
    Object.defineProperty(HTMLElement.prototype, 'innerText', {
      configurable: true,
      set(this: HTMLElement, text: string) {
        this.textContent = text;
      },
    });
  });
  afterAll(() => {
    Reflect.deleteProperty(HTMLElement.prototype, 'innerText');
  });
  afterEach(() => document.body.classList.remove('govuk-frontend-supported'));

  test.each(Object.entries(cases))('without JavaScript, renders govuk-frontend-react’s markup: %s', (_, props) => {
    const ours = parse(renderToStaticMarkup(<EnhancedFileUploadField {...props} />));
    ours.querySelectorAll('[data-file-upload-button], [data-file-upload-announcements]').forEach((element) => {
      element.remove();
    });
    // The id govuk-frontend's script gives the label, which ours renders up front.
    ours.querySelector('label')?.removeAttribute('id');
    expect(normalise(ours)).toBe(
      normalise(parse(renderToStaticMarkup(<Markup.FileUploadField javascript {...props} />)))
    );
  });

  test.each(Object.entries(cases))(
    'once upgraded, matches what govuk-frontend’s script builds: %s',
    async (_, props) => {
      // govuk-frontend finds the label in the document, so run it on its own first.
      document.body.classList.add('govuk-frontend-supported');
      const theirs = parse(renderToStaticMarkup(<Markup.FileUploadField javascript {...props} />));
      document.body.appendChild(theirs);
      const root = theirs.querySelector<HTMLElement>('.govuk-file-upload-wrapper');
      if (!root) throw new Error('No file upload');
      new FrontendFileUpload(root);
      const theirsAtFirst = normalise(theirs);
      choose(theirs, 'passport.jpg');
      const theirsOneFile = normalise(theirs);
      choose(theirs, 'passport.jpg', 'licence.png');
      const theirsTwoFiles = normalise(theirs);
      theirs.remove();

      const { container } = render(<EnhancedFileUploadField {...props} />);
      await upgraded();
      expect(normalise(container)).toBe(theirsAtFirst);
      choose(container, 'passport.jpg');
      expect(normalise(container)).toBe(theirsOneFile);
      choose(container, 'passport.jpg', 'licence.png');
      expect(normalise(container)).toBe(theirsTwoFiles);
    }
  );

  test('Field is the native file input, with no button', () => {
    const { container } = render(<FileUploadField id="file-upload-1" name="fileUpload1" label="Upload a file" />);
    expect(container.querySelector('button')).toBeNull();
    expect(container.querySelector('.govuk-file-upload-wrapper')).toBeNull();
  });
});
