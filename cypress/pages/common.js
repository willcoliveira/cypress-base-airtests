class common {
    visitPage(page) {
        if (page === 'home') {
            cy.visit('/');
        } else {
            cy.visit(page);
        } 
    };

    visitByText(text) {
        cy.contains(text).click({ force : true })
    };
}

export default common;