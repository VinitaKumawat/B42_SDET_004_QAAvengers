import HomePage from "../../support/PageObjectTestCase/HomepageTest.cy";

describe('Homepage Navigation Tests', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED')) {
      // Log the error, but prevent the test from failing
      console.error('Uncaught exception: ', err.message);
      return false;
    }
    // Otherwise, let Cypress handle the exception
    return true;
  });
  const homePage = new HomePage();

  beforeEach(() => {
      homePage.visit();
  });

  it('Validates navigation links in the header', () => {
    cy.get('.nav-link').contains('Home').click();
    cy.url().should('include', 'https://luni-interface-029.vercel.app/');

    cy.get('.nav-link').contains('Shop').click();
    cy.url().should('include', '/shop');

    cy.get('.nav-link').contains('Men').click();
    cy.url().should('include', '/category/men');

    cy.get('.nav-link').contains('Women').click();
    cy.url().should('include', '/category/women');

    cy.get('.nav-link').contains('Kids').click();
    cy.url().should('include', '/category/kids');
  });

});