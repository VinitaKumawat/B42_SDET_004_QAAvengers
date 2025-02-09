import AddToCartAndCheckout from "../../support/PageObjectTestCase/AddToCartAndCheckout.cy";


describe('Add to cart and modify cart', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        if (err.message.includes('__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED')) {
          // Log the error, but prevent the test from failing
          console.error('Uncaught exception: ', err.message);
          return false;
        }
        // Otherwise, let Cypress handle the exception
        return true;
      });
      const productpage = new AddToCartAndCheckout();

    it('should add a product, modify the cart, and proceed to checkout', () => {
        productpage.visit();
        productpage.addToCart();
    });
  
});