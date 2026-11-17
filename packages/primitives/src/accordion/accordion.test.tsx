import * as React from 'react';
import { useState } from 'react';
import { act, fireEvent, render, screen } from '@testing-library/react';
import * as Accordion from '.';

const sections = [
  { value: 'writing', heading: 'Writing well for the web', summary: 'An introduction' },
  { value: 'specialists', heading: 'Writing well for specialists' },
];

function Example(props: Accordion.RootProps) {
  return (
    <Accordion.Root rememberExpanded={false} {...props}>
      <Accordion.Controls>
        <Accordion.ShowAll>
          <Accordion.Icon />
          <Accordion.ShowAllText />
        </Accordion.ShowAll>
      </Accordion.Controls>
      {sections.map((section) => (
        <Accordion.Section key={section.value} value={section.value}>
          <h2>
            <Accordion.Fallback>{section.heading}</Accordion.Fallback>
            <Accordion.Trigger>
              <Accordion.Label>{section.heading}</Accordion.Label>
              {section.summary && <Accordion.Label>{section.summary}</Accordion.Label>}
              <Accordion.Icon />
              <Accordion.ToggleText />
            </Accordion.Trigger>
          </h2>
          <Accordion.Content id={`${section.value}-content`}>{section.heading} content</Accordion.Content>
        </Accordion.Section>
      ))}
    </Accordion.Root>
  );
}

// The element upgrades in connectedCallback, after React commits.
const upgraded = () => act(() => Promise.resolve());

const button = (name: RegExp) => screen.getByRole('button', { name });

describe('Accordion', () => {
  afterEach(() => window.sessionStorage.clear());

  test('on upgrade, swaps the plain headings for buttons and hides closed sections', async () => {
    render(<Example defaultValue={['specialists']} collapsedIconClass="down" />);
    await upgraded();
    expect(screen.queryByText('Writing well for the web', { selector: '[data-accordion-fallback]' })).not.toBeVisible();
    const writing = button(/^Writing well for the web/);
    expect(writing).toHaveAttribute('aria-expanded', 'false');
    expect(writing).toHaveAttribute('aria-controls', 'writing-content');
    expect(writing).toHaveAttribute('aria-label', 'Writing well for the web , An introduction , Show this section');
    expect(writing).toHaveTextContent('Show');
    expect(writing.querySelector('[data-accordion-icon]')).toHaveClass('down');
    expect(screen.getByText('Writing well for the web content')).toHaveAttribute('hidden', 'until-found');
    expect(button(/^Writing well for specialists/)).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByText('Writing well for specialists content')).toBeVisible();
  });

  test('a button shows and hides its section, and reports the open sections', async () => {
    const onValueChange = vi.fn();
    render(<Example onValueChange={onValueChange} />);
    await upgraded();
    fireEvent.click(button(/^Writing well for the web/));
    expect(screen.getByText('Writing well for the web content')).toBeVisible();
    expect(button(/^Writing well for the web/)).toHaveAttribute(
      'aria-label',
      expect.stringMatching(/Hide this section$/)
    );
    expect(onValueChange).toHaveBeenLastCalledWith(['writing']);
  });

  test('"show all" opens every section, then hides them all', async () => {
    render(<Example defaultValue={['writing']} />);
    await upgraded();
    const showAll = button(/Show all sections/);
    fireEvent.click(showAll);
    expect(showAll).toHaveAttribute('aria-expanded', 'true');
    expect(showAll).toHaveTextContent('Hide all sections');
    expect(screen.getByText('Writing well for specialists content')).toBeVisible();
    fireEvent.click(showAll);
    expect(screen.getByText('Writing well for the web content')).not.toBeVisible();
  });

  test('remembers open sections for the session, as govuk-frontend does', async () => {
    const { unmount } = render(<Example rememberExpanded />);
    await upgraded();
    fireEvent.click(button(/^Writing well for the web/));
    unmount();
    render(<Example rememberExpanded />);
    await upgraded();
    expect(button(/^Writing well for the web/)).toHaveAttribute('aria-expanded', 'true');
  });

  test('when controlled, changes only when value does', async () => {
    function Controlled() {
      const [value, setValue] = useState<string[]>([]);
      return (
        <>
          <Example value={value} onValueChange={setValue} />
          <button type="button" onClick={() => setValue([])}>
            Close all
          </button>
        </>
      );
    }
    render(<Controlled />);
    await upgraded();
    fireEvent.click(button(/^Writing well for the web/));
    expect(screen.getByText('Writing well for the web content')).toBeVisible();
    fireEvent.click(screen.getByRole('button', { name: 'Close all' }));
    expect(screen.getByText('Writing well for the web content')).not.toBeVisible();
  });
});
