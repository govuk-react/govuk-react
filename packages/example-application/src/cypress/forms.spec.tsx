import React from 'react';
import { mount } from '@cypress/react';
import App from '../index';
import { fillInForm, allErrorMessagesShouldBeVisible, shouldShowConfirmation } from './util';

describe('When a user loads the application, clicks Start now,', () => {
  beforeEach(() => {
    mount(<App />);
    cy.get('a').contains('Start now').click();
  });
  describe('browses to the form,', () => {
    beforeEach(() => {
      cy.get('a').contains('Basic').click();
    });
    describe('clicks submit,', () => {
      beforeEach(() => {
        cy.get('button').contains('Submit').click();
      });
      it('should show error messages', () => {
        allErrorMessagesShouldBeVisible();
      });
    });
    describe('fills in all form fields,', () => {
      beforeEach(() => {
        fillInForm();
      });
      describe('clicks submit,', () => {
        beforeEach(() => {
          cy.get('button').contains('Submit').click();
        });
        it('should show the confirmation screen', () => {
          shouldShowConfirmation();
        });
      });
    });
  });
  describe('browses to final form,', () => {
    beforeEach(() => {
      cy.get('a').contains('Final Form').click();
    });
    describe('clicks submit,', () => {
      beforeEach(() => {
        cy.get('button').contains('Submit').click();
      });
      it('should show error messages', () => {
        allErrorMessagesShouldBeVisible();
      });
    });
    describe('fills in all form fields,', () => {
      beforeEach(() => {
        fillInForm();
      });
      describe('clicks submit,', () => {
        beforeEach(() => {
          cy.get('button').contains('Submit').click();
        });
        it('should show the confirmation screen', () => {
          shouldShowConfirmation();
        });
      });
    });
  });
  describe('browses to formik,', () => {
    beforeEach(() => {
      cy.get('a').contains('Formik').click();
    });
    describe('clicks submit,', () => {
      beforeEach(() => {
        cy.get('button').contains('Submit').click();
      });
      it('should show error messages', () => {
        allErrorMessagesShouldBeVisible();
      });
    });
    describe('fills in all form fields,', () => {
      beforeEach(() => {
        fillInForm();
      });
      describe('clicks submit,', () => {
        beforeEach(() => {
          cy.get('button').contains('Submit').click();
        });
        it('should show the confirmation screen', () => {
          shouldShowConfirmation();
        });
      });
    });
  });
  describe('browses to react hook form,', () => {
    beforeEach(() => {
      cy.get('a').contains('React Hook Form').click();
    });
    describe('clicks submit,', () => {
      beforeEach(() => {
        cy.get('button').contains('Submit').click();
      });
      it('should show error messages', () => {
        allErrorMessagesShouldBeVisible();
      });
    });
    describe('fills in all form fields,', () => {
      beforeEach(() => {
        fillInForm();
      });
      describe('clicks submit,', () => {
        beforeEach(() => {
          cy.get('button').contains('Submit').click();
        });
        it('should show the confirmation screen', () => {
          shouldShowConfirmation();
        });
      });
    });
  });
});
