export class ContentValidationHomePage {
    visit() {
        cy.visit('https://luni-interface-029.vercel.app');
        cy.wait(3000);
    }
    validateStaticContent() {
        cy.get('h3.landing__header__discount').should('have.text','UP TO 15% DISCOUNT')
        cy.get('h1.landing__header__main').should('have.text', 'Checkout The Best Fashion Style');
        cy.get('h1.landing__header__main').should('have.css', 'color');
        cy.get('h1.featured__header__big').should('have.text','Featured Categories ')
    }

    
}

