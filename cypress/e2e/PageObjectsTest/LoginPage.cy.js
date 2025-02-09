import LoginPage from "../../support/PageObjectTestCase/LoginPage.cy";

describe('Login Tests', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        if (err.message.includes('__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED')) {
          // Log the error, but prevent the test from failing
          console.error('Uncaught exception: ', err.message);
          return false;
        }
        // Otherwise, let Cypress handle the exception
        return true;
      });
    const loginPage = new LoginPage();

    beforeEach(() => {
        cy.visit('https://luni-interface-029.vercel.app/account/login');
    });

    it('Validates successful login', () => {
        cy.get('.email__input').type('Vinitakumawat@gmail.com');

        cy.get('.password__input').type('vinita123'); 

        cy.get('.login__button').click(); 

    });
});