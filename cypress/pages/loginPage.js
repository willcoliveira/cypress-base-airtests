
const testData = Object.freeze({
    email: Cypress.env('email'),
    validPassword: Cypress.env('password'),
    workspace: Cypress.env('workspace'),
});

const selectors = {
    email: '[data-testid=input_email_untouched]',
    password: '[data-testid=input_password_untouched]',
    submitButton: '[data-testid=LOGIN_SUBMIT_BUTTON]',
    currentWorkspaceModal: '[data-testid=CURRENT_WORKSPACE_BUTTON]',
    errorMessageModal: '.BIgsA'
}

class loginPage {
    addUserValidCredentials() {
        cy.get(selectors.email)
            .type(testData.email);
        cy.get(selectors.password)
            .type(testData.validPassword);
        cy.get(selectors.submitButton).click();
    };

    assertUserLoggedin() {
        cy.get(selectors.currentWorkspaceModal)
            .contains(testData.workspace);
        cy.url().should('include', '/home');
    };

    assertPasswordErrorMessage(password) {
        cy.get(selectors.email)
            .type(testData.email);
        cy.get(selectors.password)
            .type(password);
        cy.get(selectors.submitButton).click();
        cy.get(selectors.errorMessageModal)
          .contains('Incorrect username or password.')
    };
}

export default loginPage;

