class Wishlist {
    visit() {
        cy.visit('https://luni-interface-029.vercel.app');
    }

    addToFavorites() {
        cy.get('[class="nav-link"]').contains('Women').click();
        cy.wait(4000)
        cy.xpath('(//button[@type="button"])[1]').click();
        cy.xpath('(//button[@type="button"])[3]').click();
        cy.get('.controls__container > :nth-child(2)')
            .should('exist')
            .click();   
            cy.url().should('include', '/wishlist');     
    }
    
}

export default Wishlist;