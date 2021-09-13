import React from 'react';
import { mount } from '@cypress/react';
import App from '../index';

const formModes = ['Basic', 'Final Form', 'Formik', 'React Hook Form', 'React JSON Schema Form'];

describe('When a user loads the application, clicks Start now,', () => {
  beforeEach(() => {
    cy.stub(console, 'error').as('consoleError');
    mount(<App />);
    cy.get('a').contains('Start now').click();
  });
  formModes.forEach((formMode) => {
    describe(`browses to ${formMode},`, () => {
      beforeEach(() => {
        cy.get('a').contains(formMode).click();
      });
      describe('touches all form fields,', () => {
        it('should not show any error messages', () => {
          cy.contains('Error summary').should('not.exist');
          cy.contains('Please enter a first name').should('not.exist');
          cy.contains('Please enter a description').should('not.exist');
          cy.contains('Please select at least one nationality').should('not.exist');
          cy.contains('Please enter a date of birth').should('not.exist');
          cy.contains('Please select an animal').should('not.exist');
          cy.contains('Please select a valid photo').should('not.exist');
          cy.contains('Please let us know if you have multiple pets').should('not.exist');
        });
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
          cy.contains('Error summary').parent().contains('Please select a valid photo').should('be.visible');
          cy.contains('Error summary')
            .parent()
            .contains('Please let us know if you have multiple pets')
            .should('be.visible');

          cy.get('[name="firstName"]').parent().contains('Please enter a first name').should('be.visible');
          cy.get('[name="description"]').parent().contains('Please enter a description').should('be.visible');
          cy.get('[name="nationality"]')
            .parent()
            .parent()
            .contains('Please select at least one nationality')
            .should('be.visible');
          cy.contains('Date of birth').parent().contains('Please enter a date of birth').should('be.visible');
          cy.get('[name="animal"]').parent().contains('Please select an animal').should('be.visible');
          cy.get('[name="hasMultiplePets"]')
            .parent()
            .parent()
            .contains('Please let us know if you have multiple pets')
            .should('be.visible');
          cy.get('[name="petPhoto"]').parent().contains('Please select a valid photo').should('be.visible');
          cy.get('@consoleError').should('not.be.called');
        });
        describe("fills in all form fields correctly but doesn't submit,", () => {
          beforeEach(() => {
            cy.contains('First name').click().type('Mark');
            cy.contains('Description of what you saw').click().type('Mark');
            cy.contains('British').click();
            cy.contains('Day').click().type('19');
            cy.contains('Month').click().type('9');
            cy.contains('Year').click().type('1999');
            cy.contains('What animal is your pet').parent().find('select').select('Other feline');
            cy.contains('Do you have more than one pet?').parent().contains('No').click();
            cy.get('input[type="file"]').attachFile('logo.png');
          });
          it('should still show error messages', () => {
            cy.contains('Error summary').should('be.visible');
            cy.contains('Error summary').parent().contains('Please enter a first name').should('be.visible');
            cy.contains('Error summary').parent().contains('Please enter a description').should('be.visible');
            cy.contains('Error summary')
              .parent()
              .contains('Please select at least one nationality')
              .should('be.visible');
            cy.contains('Error summary').parent().contains('Please enter a date of birth').should('be.visible');
            cy.contains('Error summary').parent().contains('Please select an animal').should('be.visible');
            cy.contains('Error summary').parent().contains('Please select a valid photo').should('be.visible');
            cy.contains('Error summary')
              .parent()
              .contains('Please let us know if you have multiple pets')
              .should('be.visible');

            cy.get('[name="firstName"]').parent().contains('Please enter a first name').should('be.visible');
            cy.get('[name="description"]').parent().contains('Please enter a description').should('be.visible');
            cy.get('[name="nationality"]')
              .parent()
              .parent()
              .contains('Please select at least one nationality')
              .should('be.visible');
            cy.contains('Date of birth').parent().contains('Please enter a date of birth').should('be.visible');
            cy.get('[name="animal"]').parent().contains('Please select an animal').should('be.visible');
            cy.get('[name="hasMultiplePets"]')
              .parent()
              .parent()
              .contains('Please let us know if you have multiple pets')
              .should('be.visible');
            cy.get('[name="petPhoto"]').parent().contains('Please select a valid photo').should('be.visible');
            cy.get('@consoleError').should('not.be.called');
          });
          describe('clicks submit,', () => {
            beforeEach(() => {
              cy.get('button').contains('Submit').click();
            });
            it('should show the confirmation screen', () => {
              cy.contains('Application complete').should('be.visible');
            });
          });
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
          cy.get('input[type="file"]').attachFile('logo.png');
        });
        describe('clicks submit,', () => {
          beforeEach(() => {
            cy.get('button').contains('Submit').click();
          });
          it('should show the confirmation screen', () => {
            cy.contains('Application complete').should('be.visible');
            cy.contains('Name: Mark').should('be.visible');
            cy.contains('Description: Mark').should('be.visible');
            cy.contains('Nationality: british').should('be.visible');
            cy.contains('Date of birth: 19/9/1999').should('be.visible');
            cy.contains('Animal: other-feline').should('be.visible');
            cy.contains('Multiple pets: no').should('be.visible');
            cy.get('[alt="Your pet"]')
              .should('be.visible')
              .and(($img) => {
                const image = $img[0] as HTMLImageElement;
                expect(image.naturalWidth).toEqual(276);
              });
            cy.get('@consoleError').should('not.be.called');
          });
        });
      });
    });
  });
});
