class HomePage {
    visit() {
        cy.visit('https://luni-interface-029.vercel.app/');
    }
  
    clickNavigationLink(linkText) {
        cy.get('header nav').contains(linkText).click();
    }
  
    validateNavigationLink(linkText, expectedUrl) {
        this.clickNavigationLink(linkText);
        cy.url().should('include', expectedUrl);
    }
  
  }
  export default HomePage;
  
  
      
  
     
  
  
  