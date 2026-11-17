import * as React from 'react';
import { render, screen } from '@testing-library/react';
import * as Modal from '.';

// jsdom has no showModal(), so the primitive's browser tests cover the behaviour.
describe('Modal', () => {
  test('renders GOV.UK buttons that open and close a named dialog', () => {
    render(
      <Modal.Composite dialogId="confirm" triggerText="Delete account" title="Are you sure?">
        <p>You will not be able to undo this.</p>
      </Modal.Composite>
    );
    const trigger = screen.getByText('Delete account');
    expect(trigger).toHaveClass('govuk-button');
    expect(trigger).toHaveAttribute('type', 'button');
    expect(trigger).toHaveAttribute('command', 'show-modal');
    expect(trigger).toHaveAttribute('commandfor', 'confirm');
    const dialog = document.getElementById('confirm');
    expect(dialog).toHaveClass('govuk-react-modal');
    expect(dialog).toHaveAttribute('aria-labelledby', 'confirm-title');
    expect(screen.getByText('Are you sure?')).toHaveClass('govuk-heading-m');
    expect(screen.getByText('Cancel', { selector: 'button' })).toHaveClass('govuk-button--secondary');
    expect(screen.getByText('Cancel', { selector: 'button' })).toHaveAttribute('command', 'close');
  });
});
