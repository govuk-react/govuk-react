import React from 'react';
import { mount } from '@cypress/react';
import App from './index';

describe('When a user loads the application,', () => {
  beforeEach(() => {
    mount(<App />);
  });
  describe('browses to the form,', () => {
    beforeEach(() => {
      cy.get('a').contains('Start now').click();
    });
    describe('clicks submit,', () => {
      beforeEach(() => {
        cy.get('button').contains('Submit').click();
      });
      it('should show error messages', () => {
        cy.contains('Error summary').should('be.visible');
        // TODO: test that error summary items are anchor links to relevant field
        cy.contains('Error summary').parent().contains('Please enter a first name').should('be.visible');
        cy.contains('Error summary').parent().contains('Please enter a description').should('be.visible');
        cy.contains('Error summary').parent().contains('Please select at least one nationality').should('be.visible');
        cy.contains('Error summary').parent().contains('Please enter a date of birth').should('be.visible');
        cy.contains('Error summary').parent().contains('Please select an animal').should('be.visible');
        cy.contains('Error summary').parent().contains('Please answer the question').should('be.visible');

        cy.get('[name="firstName"]').parent().contains('Please enter a first name').should('be.visible');
        cy.get('[name="description"]').parent().contains('Please enter a description').should('be.visible');
        cy.get('[name="nationality"]')
          .parent()
          .parent()
          .contains('Please select at least one nationality')
          .should('be.visible');
        // TODO: better selector for date of birth
        cy.contains('Date of birth').parent().contains('Please enter a date of birth').should('be.visible');
        cy.get('[name="animal"]').parent().contains('Please select an animal').should('be.visible');
        cy.get('[name="hasMultiplePets"]')
          .parent()
          .parent()
          .contains('Please answer the question')
          .should('be.visible');
      });
    });
    describe('fills in all form fields,', () => {
      beforeEach(() => {
        cy.contains('First name').click().type('Mark');
        cy.contains('Description of what you saw').click().type('Mark');
        cy.contains('British').click();
        cy.contains('Day').click().type('19');
        cy.contains('Month').click().type('9');
        cy.contains('Year').click().type('1999');
        cy.contains('What animal is your pet').parent().find('select').select('Other feline');
        cy.contains('Do you have more than one pet?').parent().contains('No').click();
      });
      describe('clicks submit,', () => {
        beforeEach(() => {
          cy.get('button').contains('Submit').click();
        });
        it('should show the confirmation screen', () => {
          cy.contains('Application complete').should('be.visible');
          cy.contains('Name: Mark').should('be.visible');
          cy.contains('Description: Mark').should('be.visible');
          cy.contains('Nationality: ["british"]').should('be.visible');
          cy.contains('Date of birth: {"day":"19","month":"9","year":"1999"}').should('be.visible');
          cy.contains('Animal: other-feline').should('be.visible');
          cy.contains('Multiple pets: No').should('be.visible');
        });
      });
    });
  });
  describe('browses to final form,', () => {
    beforeEach(() => {
      cy.contains('Menu').click();
      cy.contains('Final Form').click();
    });
    describe('fills in all form fields,', () => {
      beforeEach(() => {
        cy.contains('First name').click().type('Mark');
        cy.contains('Description of what you saw').click().type('Mark');
        cy.contains('British').click();
        cy.contains('Day').click().type('19');
        cy.contains('Month').click().type('9');
        cy.contains('Year').click().type('1999');
        cy.contains('What animal is your pet').parent().find('select').select('Other feline');
        cy.contains('Do you have more than one pet?').parent().contains('No').click();
      });
      describe('clicks submit,', () => {
        beforeEach(() => {
          cy.get('button').contains('Submit').click();
        });
        it('should show the confirmation screen', () => {
          cy.contains('Application complete').should('be.visible');
          cy.contains('Name: Mark').should('be.visible');
          cy.contains('Description: Mark').should('be.visible');
          cy.contains('Nationality: ["british"]').should('be.visible');
          cy.contains('Date of birth: {"day":"19","month":"9","year":"1999"}').should('be.visible');
          cy.contains('Animal: other-feline').should('be.visible');
          cy.contains('Multiple pets: no').should('be.visible');
        });
      });
    });
  });
  describe('browses to formik,', () => {
    beforeEach(() => {
      cy.contains('Menu').click();
      cy.contains('Formik').click();
    });
    describe('fills in all form fields,', () => {
      beforeEach(() => {
        cy.contains('First name').click().type('Mark');
        cy.contains('Description of what you saw').click().type('Mark');
        cy.contains('British').click();
        cy.contains('Day').click().type('19');
        cy.contains('Month').click().type('9');
        cy.contains('Year').click().type('1999');
        cy.contains('What animal is your pet').parent().find('select').select('Other feline');
        cy.contains('Do you have more than one pet?').parent().contains('No').click();
      });
      describe('clicks submit,', () => {
        beforeEach(() => {
          cy.get('button').contains('Submit').click();
        });
        it('should show the confirmation screen', () => {
          cy.contains('Application complete').should('be.visible');
          cy.contains('Name: Mark').should('be.visible');
          cy.contains('Description: Mark').should('be.visible');
          cy.contains('Nationality: ["british"]').should('be.visible');
          cy.contains('Date of birth: {"day":"19","month":"9","year":"1999"}').should('be.visible');
          cy.contains('Animal: other-feline').should('be.visible');
          cy.contains('Multiple pets: no').should('be.visible');
        });
      });
    });
  });
});
