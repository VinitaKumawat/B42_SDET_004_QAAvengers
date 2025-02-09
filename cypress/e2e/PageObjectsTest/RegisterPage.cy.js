import { RegisterPage } from "../../support/PageObjectTestCase/RegisterPage.cy";

describe('Register Tests', () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        if (err.message.includes('__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED')) {
          console.error('Uncaught exception: ', err.message);
          return false;
        }
        return true;
    });

    const registerPage = new RegisterPage(); // Use lowercase for instance

    beforeEach(() => {
        registerPage.visit();
    });

    it('Validates successful sign-up', () => {
        registerPage.enterFirstName('Vinita');
        registerPage.enterLastName('Kumawat');
        registerPage.enterEmail('vinitakumawat@gmail.com');
        registerPage.enterPassword('vinita123');
        registerPage.clickCreateAccountButton();
    });

    it('Validates the presence and functionality of the "Login" link', () => {
        cy.get('.register__login__account').should('contain.text', 'Already have account?');
        cy.get('.register__login__account a')
          .should('have.attr', 'href', '/account/login')
          .and('contain.text', 'Login')
          .click();
        cy.url().should('include', '/account/login');
    });

});

