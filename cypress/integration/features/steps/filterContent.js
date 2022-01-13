import { When, Then, Given, And } from 'cypress-cucumber-preprocessor/steps';

Given('I am in the home page', () => {
  cy.visit('/');
});

When('I select series', () => {
  cy.get('a[href="/search/series"]').click();
});

And('I filter them by title', () => {
  cy.get('.content-list').then(() => {
    cy.get('input[role="searchbox"]').type('Better Call Saul');
  })
});

Then('I see the content I was looking for', () => {
  cy.get('.content-card').contains('Better Call Saul').should('exist');
})