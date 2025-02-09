import Wishlist from "../../support/PageObjectTestCase/Wishlist.cy";

describe('Add to Cart and Favorites', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        if (err.message.includes('__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED')) {
          // Log the error, but prevent the test from failing
          console.error('Uncaught exception: ', err.message);
          return false;
        }
        // Otherwise, let Cypress handle the exception
        return true;
      });
    const wishlist = new Wishlist();

    it('should add a product to the cart and verify the cart items', () => {
        wishlist.visit();
        wishlist.addToFavorites();
    });

});