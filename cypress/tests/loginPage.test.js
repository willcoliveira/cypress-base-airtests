describe('Login Page', () => {
    beforeEach(() => {
        cy.visit('/login')
    });

    it(`should login successfully`, () => {
        cy.get('[data-testid=input_email_untouched]')
            .type('williamcarlos00@gmail.com')
        cy.get('[data-testid=input_password_untouched]')
            .type('Will123.')
        cy.get('[data-testid=LOGIN_SUBMIT_BUTTON]').click()

        cy.get('[data-testid=CURRENT_WORKSPACE_BUTTON]')
            .contains('QA test')
        cy.url().should('include', '/home')
    });

    it(`should not login with wrong credentials`, () => {
        cy.get('[data-testid=input_email_untouched]')
            .type('williamcarlos00@gmail.com')
        cy.get('[data-testid=input_password_untouched]')
            .type('hahah.')
        cy.get('[data-testid=LOGIN_SUBMIT_BUTTON]').click()

        cy.url().should('not.include', '/home')
        cy.get('.BIgsA')
            .contains('Incorrect username or password.')
    });


});