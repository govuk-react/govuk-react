import * as React from 'react';
import { useState } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { renderToString } from 'react-dom/server';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as ControlledField from '.';
import type { ChangeDetails } from '.';

type FormProps = {
  adopt?: boolean;
  onReport?: (name: string, state: string | boolean, details: ChangeDetails) => void;
};

function Form({ adopt = true, onReport }: FormProps) {
  const [name, setName] = useState('');
  const [notes, setNotes] = useState('');
  const [country, setCountry] = useState('england');
  const [agreed, setAgreed] = useState(false);
  const [contact, setContact] = useState('email');
  const [renders, setRenders] = useState(0);

  function handler<State extends string | boolean>(field: string, set: (state: State) => void) {
    return (state: State, details: ChangeDetails) => {
      onReport?.(field, state, details);
      if (adopt || !details.beforeHydration) set(state);
    };
  }
  const pickContact = handler<string>('contact', setContact);

  return (
    <form>
      <ControlledField.Input aria-label="Name" value={name} onValueChange={handler<string>('name', setName)} />
      <ControlledField.Textarea aria-label="Notes" value={notes} onValueChange={handler<string>('notes', setNotes)} />
      <ControlledField.Select
        aria-label="Country"
        value={country}
        onValueChange={handler<string>('country', setCountry)}
      >
        <option value="england">England</option>
        <option value="wales">Wales</option>
      </ControlledField.Select>
      <ControlledField.Checkbox
        aria-label="Agree"
        checked={agreed}
        onCheckedChange={handler<boolean>('agreed', setAgreed)}
      />
      <ControlledField.Radio
        aria-label="Email"
        name="contact"
        checked={contact === 'email'}
        onCheck={(details) => pickContact('email', details)}
      />
      <ControlledField.Radio
        aria-label="Phone"
        name="contact"
        checked={contact === 'phone'}
        onCheck={(details) => pickContact('phone', details)}
      />
      <button type="button" onClick={() => setRenders(renders + 1)}>
        Render
      </button>
      <output>{JSON.stringify({ name, notes, country, agreed, contact })}</output>
    </form>
  );
}

const fields = () => ({
  name: screen.getByLabelText<HTMLInputElement>('Name'),
  notes: screen.getByLabelText<HTMLTextAreaElement>('Notes'),
  country: screen.getByLabelText<HTMLSelectElement>('Country'),
  agreed: screen.getByLabelText<HTMLInputElement>('Agree'),
  email: screen.getByLabelText<HTMLInputElement>('Email'),
  phone: screen.getByLabelText<HTMLInputElement>('Phone'),
});

const shown = () => {
  const { name, notes, country, agreed, phone } = fields();
  return {
    name: name.value,
    notes: notes.value,
    country: country.value,
    agreed: agreed.checked,
    contact: phone.checked ? 'phone' : 'email',
  };
};

const state = () => JSON.parse(screen.getByRole('status').textContent ?? '') as unknown;

const entered = { name: 'Ada', notes: 'Hello', country: 'wales', agreed: true, contact: 'phone' };
const starting = { name: '', notes: '', country: 'england', agreed: false, contact: 'email' };

/** Server renders `element`, fills the form in as a user would before hydration, then hydrates it. */
async function hydrateAfterEntering(element: React.ReactElement) {
  const container = document.createElement('div');
  document.body.appendChild(container);
  container.innerHTML = renderToString(element);
  const { name, notes, country, agreed, phone } = fields();
  name.value = entered.name;
  notes.value = entered.notes;
  country.value = entered.country;
  agreed.checked = entered.agreed;
  phone.checked = true;
  await act(async () => {
    hydrateRoot(container, element);
  });
}

afterEach(() => {
  document.body.innerHTML = '';
});

test('reports each change the user makes', async () => {
  const user = userEvent.setup();
  const onReport = vi.fn();
  render(<Form onReport={onReport} />);
  const { name, country, agreed, phone } = fields();
  await user.type(name, 'Al');
  await user.selectOptions(country, 'wales');
  await user.click(agreed);
  await user.click(phone);
  expect(onReport.mock.calls).toEqual([
    ['name', 'A', { beforeHydration: false }],
    ['name', 'Al', { beforeHydration: false }],
    ['country', 'wales', { beforeHydration: false }],
    ['agreed', true, { beforeHydration: false }],
    ['contact', 'phone', { beforeHydration: false }],
  ]);
  expect(state()).toEqual({ ...starting, name: 'Al', country: 'wales', agreed: true, contact: 'phone' });
});

test('what the user entered before hydration is reported once, and kept through later renders', async () => {
  const user = userEvent.setup();
  const onReport = vi.fn();
  await hydrateAfterEntering(<Form onReport={onReport} />);
  expect(onReport.mock.calls).toEqual([
    ['name', 'Ada', { beforeHydration: true }],
    ['notes', 'Hello', { beforeHydration: true }],
    ['country', 'wales', { beforeHydration: true }],
    ['agreed', true, { beforeHydration: true }],
    ['contact', 'phone', { beforeHydration: true }],
  ]);
  await user.click(screen.getByRole('button', { name: 'Render' }));
  expect(state()).toEqual(entered);
  expect(shown()).toEqual(entered);
  expect(onReport).toHaveBeenCalledTimes(5);
});

test('a report the handler does not adopt puts the fields back to their props', async () => {
  const onReport = vi.fn();
  await hydrateAfterEntering(<Form adopt={false} onReport={onReport} />);
  expect(onReport).toHaveBeenCalledTimes(5);
  expect(state()).toEqual(starting);
  expect(shown()).toEqual(starting);
});

test('a form left alone before hydration reports nothing', async () => {
  const onReport = vi.fn();
  const container = document.createElement('div');
  document.body.appendChild(container);
  container.innerHTML = renderToString(<Form onReport={onReport} />);
  await act(async () => {
    hydrateRoot(container, <Form onReport={onReport} />);
  });
  expect(onReport).not.toHaveBeenCalled();
});

test('asChild reports for the child field, and keeps its own handlers and ref', async () => {
  const user = userEvent.setup();
  const onValueChange = vi.fn();
  const onChange = vi.fn();
  const ref = React.createRef<HTMLInputElement>();
  render(
    <ControlledField.Input asChild value="" onValueChange={onValueChange}>
      <input aria-label="Name" className="field" onChange={onChange} ref={ref} />
    </ControlledField.Input>
  );
  await user.type(screen.getByLabelText('Name'), 'A');
  expect(onValueChange).toHaveBeenCalledWith('A', { beforeHydration: false });
  expect(onChange).toHaveBeenCalledTimes(1);
  expect(ref.current).toBe(screen.getByLabelText('Name'));
  expect(ref.current).toHaveClass('field');
});
