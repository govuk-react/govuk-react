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
          // cy.contains('Date of birth: {"day":"19","month":"9","year":"1999"}').should('be.visible');
          cy.contains('Animal: other-feline').should('be.visible');
          cy.contains('Multiple pets: no').should('be.visible');
        });
      });
    });
  });
});
