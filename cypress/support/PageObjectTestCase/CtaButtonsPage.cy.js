class CtaButtonsPage {
    visit() {
      cy.visit('https://luni-interface-029.vercel.app/');
    }

    clickHomepage(){
        cy.get('a[href="/"]').contains("Home").click();
    }

    clickshopButton(){
        cy.get('a[href="/shop"]').contains("Shop").click();
    }
    clickAccountLogin() {
        cy.get('.control a[href="/account/login"]').click();
      }
      clickWishlist() {
        cy.get('.control a[href="/wishlist"]').click();
      }
    }
  export default CtaButtonsPage;
  