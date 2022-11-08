describe('Login form validation', () => {
    it('should show validation errors on incorrect input and redirect to index.html on correct and valid input', () => {
        cy.visit('http://localhost:5173/login.html');
        cy.get('#email').type('invalid@email.com', { delay: 70 });
        cy.get('#password').type('less', { delay: 70 });
        cy.wait(1000);
        cy.get('#login-btn').click();
        cy.wait(3000);
        cy.get('#email').clear().type('steve.johnson@noroff.no', { delay: 70 });
        cy.get('#password')
            .clear()
            .type('UzI1NiIsInR5cCIHUNDUR', { delay: 70 });
        cy.wait(1000);
        cy.get('#login-btn').click();
        cy.url().should('include', 'index.html');
    });
});
