describe('Home Page', () => {
    beforeEach(() => {
        cy.visit('/')
    });

    it(`should verify home page information sucessfully`, () => {
        cy.url().should('include', 'air-web.vercel.app/')
        cy.contains('Where creative process happens')
        cy.contains(`Centralize your team's content in a workspace that's organized, versioned, and easy to share.`)
        cy.contains(`Sign up for free`)
    });

    it(`should open sign up page sucessfully`, () => {
        cy.contains(`Sign up for free`).click({ force : true })
        cy.url().should('include', '/sign-up')
        cy.contains('Let’s get started')
    });
});