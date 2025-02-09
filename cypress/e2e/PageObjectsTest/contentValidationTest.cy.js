import { ContentValidationHomePage } from "../../support/PageObjectTestCase/ContentValidationHomePage.cy";

describe('Content Validation Tests', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        if (err.message.includes('__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED')) {
          // Log the error, but prevent the test from failing
          console.error('Uncaught exception: ', err.message);
          return false;
        }
        // Otherwise, let Cypress handle the exception
        return true;
      });
    const homePage = new ContentValidationHomePage();

    beforeEach(() => {
        homePage.visit();
    });

    it('Should display the correct static content on the homepage', () => {
        homePage.validateStaticContent();
    });

    
});