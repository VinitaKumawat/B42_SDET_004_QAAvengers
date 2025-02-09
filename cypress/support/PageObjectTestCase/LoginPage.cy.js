class LoginPage {
    visit() {
        cy.visit('https://luni-interface-029.vercel.app/account/login');
    }

    enterCredentials(username, password) {
        cy.get('#username').type(username);
        cy.get('#password').type(password);
    }

    submit() {
        cy.get('button[type="submit"]').click();
    }

    validateLoginRedirect(expectedUrl) {
        cy.url().should('include', expectedUrl);
    }
}
export default LoginPage;