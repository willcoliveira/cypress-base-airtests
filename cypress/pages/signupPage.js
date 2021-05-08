class signUpPage {
    assertPageInformation() {
        cy.url().should('include', '/sign-up');
        cy.contains('Let’s get started');
    }
}

export default signUpPage;
