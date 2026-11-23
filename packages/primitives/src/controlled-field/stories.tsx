import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { useState } from 'react';

import * as ControlledField from '.';

const meta = {
  title: 'Primitives/Controlled field',
  id: 'primitives-controlled-field',
  component: ControlledField.Input,
} satisfies Meta<typeof ControlledField.Input>;

export default meta;

type Story = StoryObj<typeof meta>;

function Form() {
  const [name, setName] = useState('');
  const [notes, setNotes] = useState('');
  const [country, setCountry] = useState('england');
  const [updates, setUpdates] = useState(false);
  const [contact, setContact] = useState('email');

  return (
    <form>
      <p>
        <label htmlFor="name">Name</label>
        <ControlledField.Input id="name" name="name" value={name} onValueChange={setName} />
      </p>
      <p>
        <label htmlFor="notes">Notes</label>
        <ControlledField.Textarea id="notes" name="notes" value={notes} onValueChange={setNotes} />
      </p>
      <p>
        <label htmlFor="country">Country</label>
        <ControlledField.Select id="country" name="country" value={country} onValueChange={setCountry}>
          <option value="england">England</option>
          <option value="scotland">Scotland</option>
          <option value="wales">Wales</option>
          <option value="northern-ireland">Northern Ireland</option>
        </ControlledField.Select>
      </p>
      <p>
        <ControlledField.Checkbox id="updates" name="updates" checked={updates} onCheckedChange={setUpdates} />
        <label htmlFor="updates">Send me updates</label>
      </p>
      <fieldset>
        <legend>How should we contact you?</legend>
        <ControlledField.Radio
          id="contact-email"
          name="contact"
          value="email"
          checked={contact === 'email'}
          onCheck={() => setContact('email')}
        />
        <label htmlFor="contact-email">Email</label>
        <ControlledField.Radio
          id="contact-phone"
          name="contact"
          value="phone"
          checked={contact === 'phone'}
          onCheck={() => setContact('phone')}
        />
        <label htmlFor="contact-phone">Phone</label>
      </fieldset>
      <output>{JSON.stringify({ name, notes, country, updates, contact })}</output>
    </form>
  );
}

export const Default: Story = {
  args: { value: '' },
  render: () => <Form />,
};
