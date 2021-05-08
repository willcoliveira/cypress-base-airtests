class homePage {
    assertPageInformation() {
        cy.url().should('include', 'air-web.vercel.app/');
        cy.contains('Where creative process happens');
        cy.contains(`Centralize your team's content in a workspace that's organized, versioned, and easy to share.`);
        cy.contains(`Sign up for free now`);
    }
}

export default homePage;