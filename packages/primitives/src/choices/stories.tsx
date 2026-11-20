import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';

import * as Choices from '.';

const meta = {
  title: 'Primitives/Choices',
  id: 'primitives-choices',
  component: Choices.Root,
} satisfies Meta<typeof Choices.Root>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <fieldset>
      <legend>How would you prefer to be contacted?</legend>
      <Choices.Root>
        <div>
          <Choices.Input type="radio" id="contact-email" name="contact" value="email" controls="conditional-email" />
          <label htmlFor="contact-email">Email</label>
        </div>
        <Choices.Conditional id="conditional-email">
          <label htmlFor="email">Email address</label>
          <input id="email" name="email" type="email" autoComplete="email" spellCheck={false} />
        </Choices.Conditional>
        <div>
          <Choices.Input type="radio" id="contact-phone" name="contact" value="phone" controls="conditional-phone" />
          <label htmlFor="contact-phone">Phone</label>
        </div>
        <Choices.Conditional id="conditional-phone">
          <label htmlFor="phone">Phone number</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" />
        </Choices.Conditional>
      </Choices.Root>
    </fieldset>
  ),
};

/** Checking "No, I will not be travelling to any of these countries" unchecks the others. */
export const Exclusive: Story = {
  render: () => (
    <fieldset>
      <legend>Will you be travelling to any of these countries?</legend>
      <Choices.Root>
        <div>
          <Choices.Input type="checkbox" id="countries-france" name="countries" value="france" />
          <label htmlFor="countries-france">France</label>
        </div>
        <div>
          <Choices.Input type="checkbox" id="countries-portugal" name="countries" value="portugal" />
          <label htmlFor="countries-portugal">Portugal</label>
        </div>
        <p>or</p>
        <div>
          <Choices.Input type="checkbox" id="countries-none" name="countries" value="none" exclusive />
          <label htmlFor="countries-none">No, I will not be travelling to any of these countries</label>
        </div>
      </Choices.Root>
    </fieldset>
  ),
};
