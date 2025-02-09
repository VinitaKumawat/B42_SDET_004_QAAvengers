import CtaButtonsPage from "../../support/PageObjectTestCase/CtaButtonsPage.cy";

describe('CTA Button Tests for Luni Interface Website', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED')) {
      // Log the error, but prevent the test from failing
      console.error('Uncaught exception: ', err.message);
      return false;
    }
    // Otherwise, let Cypress handle the exception
    return true;
  });
  const ctaPage = new CtaButtonsPage();

  beforeEach(() => {
    ctaPage.visit();
  });

  it('Should navigate to the Home page', () => {
    ctaPage.clickHomepage();
    cy.url().should('include', '/');
  });

  it('Should navigate to the Shop page', () => {
    ctaPage.clickshopButton();
    cy.url().should('include', '/shop');
  });

  it('Should navigate to the Account login', () => {
    ctaPage.clickAccountLogin();
    cy.url().should('include', '/account/login');
  });


  it('Should navigate to the Wishlist page', () => {
    ctaPage.clickWishlist();
    cy.url().should('include', '/wishlist');
  });

});