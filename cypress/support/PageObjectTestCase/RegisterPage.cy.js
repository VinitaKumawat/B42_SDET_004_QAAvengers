export class RegisterPage {
    visit() {
        cy.visit('https://luni-interface-029.vercel.app/account/register');
    }

    enterFirstName(firstName) {
        cy.get('.fname__input').type(firstName);
    }

    enterLastName(lastName) {
        cy.get('.lname__input').type(lastName);
    }

    enterEmail(email) {
        cy.get('.email__input').type(email);
    }

    enterPassword(password) {
        cy.get('.password__input').type(password);
    }

    clickCreateAccountButton() {
        cy.get('.register__button').click();
    }
}