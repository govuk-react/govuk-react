import React from 'react';
import { mount } from '@cypress/react';
import App from './index';

it('renders learn react link', () => {
  mount(<App />);
  cy.get('a').contains('Start now').click();
  cy.contains('First name').click().type('Mark');
  cy.get('button').contains('Submit').click();
});
