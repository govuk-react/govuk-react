import * as React from 'react';
import { useState } from 'react';
import { hydrateRoot } from 'react-dom/client';
import { renderToStaticMarkup, renderToString } from 'react-dom/server';
import { act, fireEvent, render, screen } from '@testing-library/react';
import * as Choices from '.';

// The element upgrades in connectedCallback, after React commits.
const upgraded = () => act(() => Promise.resolve());

// An exclusive checkbox unchecks the others in a task of its own.
const settled = () => act(() => new Promise((resolve) => setTimeout(resolve)));

function Contact(props: Choices.RootProps) {
  return (
    <Choices.Root {...props}>
      <Choices.Input type="radio" id="email" name="contact" value="email" controls="conditional-email" />
      <label htmlFor="email">Email</label>
      <Choices.Conditional id="conditional-email">Email address</Choices.Conditional>
      <Choices.Input type="radio" id="phone" name="contact" value="phone" controls="conditional-phone" />
      <label htmlFor="phone">Phone</label>
      <Choices.Conditional id="conditional-phone">Phone number</Choices.Conditional>
    </Choices.Root>
  );
}

function Nationality({ onChange }: { onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void }) {
  return (
    <Choices.Root>
      {['British', 'Irish', 'Other'].map((nationality) => (
        <React.Fragment key={nationality}>
          <Choices.Input type="checkbox" id={nationality} name="nationality" value={nationality} onChange={onChange} />
          <label htmlFor={nationality}>{nationality}</label>
        </React.Fragment>
      ))}
      <Choices.Input type="checkbox" id="none" name="nationality" value="none" exclusive onChange={onChange} />
      <label htmlFor="none">None of these</label>
    </Choices.Root>
  );
}

describe('Choices', () => {
  test('without JavaScript, shows every reveal', () => {
    const container = document.createElement('div');
    container.innerHTML = renderToStaticMarkup(<Contact />);
    expect(container.querySelector('[data-choices-conditional][hidden]')).toBeNull();
    expect(container.querySelector('[aria-controls]')).toBeNull();
  });

  test('on upgrade, reveals content only while its radio is checked', async () => {
    render(<Contact />);
    await upgraded();
    const email = screen.getByLabelText('Email');
    expect(email).toHaveAttribute('aria-controls', 'conditional-email');
    expect(email).toHaveAttribute('aria-expanded', 'false');
    expect(screen.getByText('Email address')).not.toBeVisible();
    fireEvent.click(email);
    expect(screen.getByText('Email address')).toBeVisible();
    expect(email).toHaveAttribute('aria-expanded', 'true');
    fireEvent.click(screen.getByLabelText('Phone'));
    expect(screen.getByText('Email address')).not.toBeVisible();
    expect(screen.getByText('Phone number')).toBeVisible();
    expect(email).toHaveAttribute('aria-expanded', 'false');
  });

  test('hides reveals with the classes it is given', async () => {
    render(<Contact hiddenConditionalClass="hide" upgradedClass="supported" />);
    await upgraded();
    expect(screen.getByText('Email address')).toHaveClass('hide');
    expect(screen.getByText('Email address')).not.toHaveAttribute('hidden');
    expect(document.querySelector('govuk-react-choices')).toHaveClass('supported');
  });

  test('an exclusive checkbox unchecks the others, and they uncheck it', async () => {
    render(<Nationality />);
    await upgraded();
    fireEvent.click(screen.getByLabelText('British'));
    fireEvent.click(screen.getByLabelText('Irish'));
    fireEvent.click(screen.getByLabelText('None of these'));
    await settled();
    expect(screen.getByLabelText('British')).not.toBeChecked();
    expect(screen.getByLabelText('Irish')).not.toBeChecked();
    expect(screen.getByLabelText('None of these')).toBeChecked();
    fireEvent.click(screen.getByLabelText('Other'));
    await settled();
    expect(screen.getByLabelText('None of these')).not.toBeChecked();
    expect(screen.getByLabelText('Other')).toBeChecked();
  });

  test('controlled checkboxes hear about the ones it unchecks', async () => {
    function Controlled() {
      const [checked, setChecked] = useState<string[]>(['British']);
      return (
        <Choices.Root>
          {['British', 'none'].map((value) => (
            <React.Fragment key={value}>
              <Choices.Input
                type="checkbox"
                id={value}
                name="nationality"
                value={value}
                exclusive={value === 'none'}
                checked={checked.includes(value)}
                onChange={(event) =>
                  setChecked((current) =>
                    event.target.checked ? [...current, value] : current.filter((item) => item !== value)
                  )
                }
              />
              <label htmlFor={value}>{value}</label>
            </React.Fragment>
          ))}
          <output>{checked.join(' ')}</output>
        </Choices.Root>
      );
    }
    render(<Controlled />);
    await upgraded();
    fireEvent.click(screen.getByLabelText('none'));
    await settled();
    expect(screen.getByRole('status')).toHaveTextContent(/^none$/);
    expect(screen.getByLabelText('British')).not.toBeChecked();
  });

  test('follows a checked value React sets', async () => {
    function Controlled() {
      const [contact, setContact] = useState('');
      return (
        <>
          <Choices.Root>
            <Choices.Input
              type="radio"
              id="email"
              name="contact"
              value="email"
              controls="conditional-email"
              checked={contact === 'email'}
              onChange={() => setContact('email')}
            />
            <label htmlFor="email">Email</label>
            <Choices.Conditional id="conditional-email">Email address</Choices.Conditional>
          </Choices.Root>
          <button type="button" onClick={() => setContact('email')}>
            Choose email
          </button>
        </>
      );
    }
    render(<Controlled />);
    await upgraded();
    expect(screen.getByText('Email address')).not.toBeVisible();
    fireEvent.click(screen.getByRole('button', { name: 'Choose email' }));
    expect(screen.getByText('Email address')).toBeVisible();
  });

  test('a radio group split across elements keeps every reveal in step', async () => {
    render(
      <>
        <Choices.Root>
          <Choices.Input type="radio" id="email" name="contact" controls="conditional-email" />
          <label htmlFor="email">Email</label>
          <Choices.Conditional id="conditional-email">Email address</Choices.Conditional>
        </Choices.Root>
        <Choices.Root>
          <Choices.Input type="radio" id="phone" name="contact" />
          <label htmlFor="phone">Phone</label>
        </Choices.Root>
      </>
    );
    await upgraded();
    fireEvent.click(screen.getByLabelText('Email'));
    fireEvent.click(screen.getByLabelText('Phone'));
    expect(screen.getByText('Email address')).not.toBeVisible();
    expect(screen.getByLabelText('Email')).toHaveAttribute('aria-expanded', 'false');
  });

  test('an exclusive checkbox unchecks others with its name in another group, even disabled ones', async () => {
    render(
      <>
        <Choices.Root>
          <Choices.Input type="checkbox" id="france" name="countries" defaultChecked />
          <label htmlFor="france">France</label>
          <Choices.Input type="checkbox" id="spain" name="countries" defaultChecked disabled />
          <label htmlFor="spain">Spain</label>
        </Choices.Root>
        <Choices.Root>
          <Choices.Input type="checkbox" id="none" name="countries" exclusive />
          <label htmlFor="none">None</label>
        </Choices.Root>
      </>
    );
    await upgraded();
    fireEvent.click(screen.getByLabelText('None'));
    await settled();
    expect(screen.getByLabelText('France')).not.toBeChecked();
    expect(screen.getByLabelText('Spain')).not.toBeChecked();
  });

  test('follows a checked value a script sets, as form libraries do', async () => {
    render(<Contact />);
    await upgraded();
    const phone = screen.getByLabelText('Phone');
    if (!(phone instanceof HTMLInputElement)) throw new Error('No radio');
    phone.checked = true;
    await upgraded();
    expect(screen.getByText('Phone number')).toBeVisible();
    expect(phone).toHaveAttribute('aria-expanded', 'true');
  });

  test('a form reset puts the reveals back', async () => {
    render(
      <form>
        <Contact />
        <button type="reset">Reset</button>
      </form>
    );
    await upgraded();
    fireEvent.click(screen.getByLabelText('Email'));
    expect(screen.getByText('Email address')).toBeVisible();
    screen.getByRole('button', { name: 'Reset' }).closest('form')?.reset();
    await settled();
    expect(screen.getByText('Email address')).not.toBeVisible();
  });
});

test('server markup: React still tracks the choices once hydrated, so a checked radio clicked again reports nothing', async () => {
  const onChange = vi.fn();
  const ui = (
    <Choices.Root>
      <Choices.Input type="radio" name="hydrated-contact" value="email" aria-label="Email" onChange={onChange} />
    </Choices.Root>
  );
  const container = document.createElement('div');
  document.body.appendChild(container);
  container.innerHTML = renderToString(ui);
  await upgraded();
  await act(async () => {
    hydrateRoot(container, ui);
  });
  const radio = screen.getByRole('radio', { name: 'Email' });
  fireEvent.click(radio);
  fireEvent.click(radio);
  expect(onChange).toHaveBeenCalledTimes(1);
  container.remove();
});
