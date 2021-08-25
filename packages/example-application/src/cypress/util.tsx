// we are abstracting some Cypress code as we want multiple implementations to exhibit identical behaviour

export const fillInForm = () => {
  cy.contains('First name').click().type('Mark');
  cy.contains('Description of what you saw').click().type('Mark');
  cy.contains('British').click();
  cy.contains('Day').click().type('19');
  cy.contains('Month').click().type('9');
  cy.contains('Year').click().type('1999');
  cy.contains('What animal is your pet').parent().find('select').select('Other feline');
  cy.contains('Do you have more than one pet?').parent().contains('No').click();
};

export const allErrorMessagesShouldBeVisible = () => {
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
  cy.get('[name="hasMultiplePets"]').parent().parent().contains('Please answer the question').should('be.visible');
};
