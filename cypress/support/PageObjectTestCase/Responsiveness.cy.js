class Responsiveness {
    visit() {
      cy.visit('https://luni-interface-029.vercel.app/');
    }
  
    validateResponsiveness(viewportWidth, viewportHeight) {
      cy.viewport(viewportWidth, viewportHeight);
      cy.get('body').should('be.visible');
    }
  
    validateHeaderResponsiveness(viewportWidth, viewportHeight) {
      cy.viewport(viewportWidth, viewportHeight);
      cy.get('.search__form__input').should('be.enabled');
      cy.get('.search__form__button').should('be.enabled');
    }
  
    validateFooterResponsiveness(viewportWidth, viewportHeight) {
      cy.viewport(viewportWidth, viewportHeight);
      cy.contains('p', '© 2024 StyeMart').should('be.visible');
    }

  }
  
  export default Responsiveness;