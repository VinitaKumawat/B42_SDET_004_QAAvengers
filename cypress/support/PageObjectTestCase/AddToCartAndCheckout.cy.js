export default class AddToCartAndCheckout {
    visit() {
        cy.visit('https://luni-interface-029.vercel.app');
    }

    addToCart() {
        cy.get('[class="nav-link"]').contains('Shop').click();

        cy.xpath('(//button[@type="button"])[2]').should('exist').and('be.visible').click();
        cy.go('back');

        cy.get('.controls__container > :nth-child(3)').should('exist').click();

        cy.get('.cart__item__quantity .MuiButtonBase-root').first().click();
            
        cy.get('.cart__item__quantity .MuiButtonBase-root').last().click();
        
        cy.get('.MuiSelect-select').click(); 
        cy.get('[role="listbox"] > [data-value="38"]').click();
        cy.get('.MuiSelect-select').should('contain', '38');
        cy.get('button').contains('Checkout').should('exist').click();
            

    }
}

