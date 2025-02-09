class Footer {
    validateLink(linkText, expectedHref) {
      cy.contains("a", linkText).should("be.visible").click()
    }
  }
  
  export default Footer;
  