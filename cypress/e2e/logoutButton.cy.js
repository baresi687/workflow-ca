/* eslint-disable cypress/no-unnecessary-waiting */

describe('Logout button', () => {
    it('should clear localStorage and redirect user to login page', () => {
        cy.visit('http://localhost:5173/login.html');
        cy.get('#email').type('steve.johnson@noroff.no');
        cy.get('#password').type('UzI1NiIsInR5cCIHUNDUR');
        cy.get('#login-btn')
            .click()
            .should(() => {
                // eslint-disable-next-line no-unused-expressions
                expect(localStorage.getItem('token')).to.exist;
            });
        cy.url().should('include', 'index');
        cy.wait(2000);
        cy.get('#logout-btn')
            .click()
            .should(() => {
                // eslint-disable-next-line no-unused-expressions
                expect(localStorage.getItem('token')).to.be.null;
            });
        cy.url().should('include', 'login');
    });
});
