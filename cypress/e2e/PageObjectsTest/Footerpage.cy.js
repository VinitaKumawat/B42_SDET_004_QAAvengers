import FooterPage from '../../support/PageObjectTestCase/FooterPage.cy';

describe('Footer Tests for Luni Interface Website', () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    if (err.message.includes('__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED')) {
      // Log the error, but prevent the test from failing
      console.error('Uncaught exception: ', err.message);
      return false;
    }
    // Otherwise, let Cypress handle the exception
    return true;
  });
  const footerPage = new FooterPage();

  beforeEach(() => {
    footerPage.visit();
  });

  it('Validates footer links in the Support section', () => {
    footerPage.validateFooterLinks();
  });

  it('should validate language and country options in the footer', () => {
    footerPage.validateLanguageAndCountryOptions();
  });

  it('should validate copyright information', () => {
    footerPage.validateCopyright();
  });
});