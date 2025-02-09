class FooterPage {
    visit() {
      cy.visit('https://luni-interface-029.vercel.app/');
    }
  
    validateFooterLinks() {
             cy.xpath('(//a[@class="chakra-link css-0"])[1]').should('be.visible').click();
        cy.go('back');
    }
    validateLanguageAndCountryOptions() {
      cy.get('.chakra-text').contains('Language').should('be.visible');
      cy.get('.chakra-text').contains('country').should('be.visible');
    }
 
    validateCopyright() {
      cy.get('.chakra-text').contains('© 2024 StyeMart').should('be.visible');
    }
  }
  
  export default FooterPage;
  