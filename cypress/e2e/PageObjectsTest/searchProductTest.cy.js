import SearchPage from "../../support/PageObjectTestCase/SearchPage.cy";
describe('Search Product Tests', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        if (err.message.includes('__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED')) {
          // Log the error, but prevent the test from failing
          console.error('Uncaught exception: ', err.message);
          return false;
        }
        // Otherwise, let Cypress handle the exception
        return true;
      });
    const searchPage = new SearchPage();

    beforeEach(() => {
        searchPage.visit();
    });

    it('Should search for a specific product', () => {
        const productName = 'ZARA';

        searchPage.searchProduct(productName);
    });
});