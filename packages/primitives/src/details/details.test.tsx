import * as React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { renderToString } from 'react-dom/server';
import { act, fireEvent, render } from '@testing-library/react';
import { Details, type DetailsProps } from '.';

function Example(props: DetailsProps) {
  return (
    <Details {...props}>
      <summary>Menu</summary>
      Navigation
    </Details>
  );
}

const toggle = (details: HTMLDetailsElement, open: boolean) => {
  details.open = open;
  fireEvent(details, new Event('toggle'));
};

const detailsIn = (container: HTMLElement) => {
  const details = container.querySelector('details');
  if (!details) throw new Error('No details');
  return details;
};

test('reports the user opening and closing it', () => {
  const onOpenChange = vi.fn();
  const { container } = render(<Example onOpenChange={onOpenChange} />);
  const details = detailsIn(container);
  toggle(details, true);
  toggle(details, false);
  expect(onOpenChange.mock.calls).toEqual([
    [true, { beforeHydration: false }],
    [false, { beforeHydration: false }],
  ]);
});

test('follows `open` when controlled', () => {
  const { container, rerender } = render(<Example open={false} />);
  expect(detailsIn(container).open).toBe(false);
  rerender(<Example open />);
  expect(detailsIn(container).open).toBe(true);
});

const toggled = (details: HTMLDetailsElement) =>
  new Promise((resolve) => {
    details.addEventListener('toggle', resolve, { once: true });
  });

/**
 * Server renders `element`, opens it as a user would before hydration, then hydrates it. The
 * browser fires `toggle` in a task, which can run before or after React hydrates.
 */
async function hydrateAfterOpening(element: React.ReactElement, toggle: 'before' | 'after' = 'before') {
  const container = document.createElement('div');
  document.body.appendChild(container);
  container.innerHTML = renderToString(element);
  const details = detailsIn(container);
  details.open = true;
  if (toggle === 'before') {
    await toggled(details);
    await act(async () => {
      hydrateRoot(container, element);
    });
  } else {
    const late = toggled(details);
    act(() => {
      hydrateRoot(container, element);
    });
    await act(() => late);
  }
  return container;
}

afterEach(() => {
  document.body.innerHTML = '';
});

test.each([
  ['controlled', false, 'before'],
  ['uncontrolled', undefined, 'before'],
  ['controlled', false, 'after'],
  ['uncontrolled', undefined, 'after'],
] as const)(
  'server markup, %s, toggle event %s hydration: opening it before hydration is reported once',
  async (_, open, toggle) => {
    const onOpenChange = vi.fn();
    await hydrateAfterOpening(<Example open={open} onOpenChange={onOpenChange} />, toggle);
    expect(onOpenChange.mock.calls).toEqual([[true, { beforeHydration: true }]]);
  }
);

test('server markup: a controlled open before hydration goes back to `open` unless adopted', async () => {
  const container = await hydrateAfterOpening(<Example open={false} onOpenChange={() => {}} />);
  expect(detailsIn(container).open).toBe(false);
});

test('server markup: a controlled open before hydration stays open when adopted', async () => {
  function Adopting() {
    const [open, setOpen] = React.useState(false);
    return <Example open={open} onOpenChange={setOpen} />;
  }
  const container = await hydrateAfterOpening(<Adopting />);
  expect(detailsIn(container).open).toBe(true);
});
