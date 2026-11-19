import * as React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { fireEvent, render, screen } from '@testing-library/react';
import { ExitThisPage as FrontendExitThisPage } from 'govuk-frontend';
import * as Markup from 'govuk-frontend-react/exit-this-page';
import * as ExitThisPage from '.';

const ignored = /^(data-exit-this-page-|data-upgraded$|data-visible$|data-on$|data-govuk-exit-this-page-init$)/;

/** The markup, with attributes and classes in order, and ours unwrapped from the element. */
const normalise = (root: Element) => {
  const copy = root.cloneNode(true);
  if (!(copy instanceof Element)) throw new Error('Not an element');
  copy
    .querySelectorAll('govuk-react-exit-this-page')
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

const shift = () => {
  fireEvent.keyDown(document.body, { key: 'Shift', shiftKey: true });
  fireEvent.keyUp(document.body, { key: 'Shift', shiftKey: false });
};

// Stays on the page.
const stay = (event: Event) => event.preventDefault();
beforeEach(() => document.addEventListener('govuk-react-exit-this-page:exit', stay));
afterEach(() => document.removeEventListener('govuk-react-exit-this-page:exit', stay));

describe('ExitThisPage', () => {
  // From govuk-frontend's fixtures.
  test.each<[string, Markup.CompositeProps]>([
    ['default', { href: '/full-page-examples/announcements' }],
    [
      'testing-html',
      {
        children: (
          <>
            Exit <em>this</em> test
          </>
        ),
      },
    ],
    [
      'translated',
      {
        children: 'Gadael y dudalen',
        activatedText: 'Tudalen ymadael',
        timedOutText: "Wedi'i amseru",
        pressTwoMoreTimesText: "Pwyswch 'Shift' 2 gwaith arall",
        pressOneMoreTimeText: "Pwyswch 'Shift' 1 mwy o amser",
      },
    ],
  ])('once upgraded, and after a press of Shift, matches what govuk-frontend’s script builds: %s', (_, props) => {
    document.body.classList.add('govuk-frontend-supported');
    // govuk-frontend listens for Shift from its first instance only.
    delete document.body.dataset.govukFrontendExitThisPageKeypress;
    const theirs = document.createElement('div');
    theirs.innerHTML = renderToStaticMarkup(<Markup.Composite {...props} />);
    document.body.appendChild(theirs);
    const root = theirs.querySelector<HTMLElement>('.govuk-exit-this-page');
    if (!root) throw new Error('No exit this page');
    const frontend = new FrontendExitThisPage(root);
    const theirsAtFirst = normalise(theirs);
    shift();
    const theirsPressed = normalise(theirs);
    theirs.remove();
    // Their keyup listener stays on the document, so stop it counting our presses.
    Reflect.set(frontend, '$updateSpan', null);

    const { container } = render(<ExitThisPage.Composite {...props} />);
    expect(normalise(container)).toBe(theirsAtFirst);
    shift();
    expect(normalise(container)).toBe(theirsPressed);
  });

  test('the skip link exits too, as in govuk-frontend', () => {
    const onExit = vi.fn((event: Event) => event.preventDefault());
    render(
      <>
        <ExitThisPage.SkipLink>Exit this page</ExitThisPage.SkipLink>
        <ExitThisPage.Composite />
      </>
    );
    document.addEventListener('govuk-react-exit-this-page:exit', onExit);
    fireEvent.click(screen.getAllByRole('link')[0]);
    expect(onExit).toHaveBeenCalledTimes(1);
    document.removeEventListener('govuk-react-exit-this-page:exit', onExit);
  });
});
