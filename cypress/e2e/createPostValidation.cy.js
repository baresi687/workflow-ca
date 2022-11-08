describe('Create post validation', () => {
    it('should show error messages when required inputs are empty on submit', () => {
        cy.visit('http://localhost:5173/login.html');
        cy.get('#email').type('steve.johnson@noroff.no');
        cy.get('#password').type('UzI1NiIsInR5cCIHUNDUR');
        cy.get('#login-btn').click();
        cy.url().should('include', 'index');
        cy.visit('http://localhost:5173/create-post.html');
        cy.url().should('include', 'create-post');
        cy.wait(1000);
        cy.get('#create-post-form').submit();
        cy.get('#postTitleError').should('not.have.class', 'hidden');
        cy.get('#postDescriptionError').should('not.have.class', 'hidden');
    });
});
