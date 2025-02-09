class SearchPage {
    visit() {
        cy.visit('https://luni-interface-029.vercel.app'); // Replace with your base URL
    }

    searchProduct(productName) {
        cy.get('.search__form__input').type(productName);
        cy.get('.search__form__button').click();
    }
}

export default SearchPage;