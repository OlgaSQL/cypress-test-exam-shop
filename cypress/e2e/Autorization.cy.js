describe('registration', () => {
    before(() => {
        cy.visit('/');
        cy.wait(1000);
        cy.contains('span', 'Dismiss').click();
        cy.contains('span', 'Account').click();
        cy.get('#navbarLoginButton').click();
        cy.contains('a', 'Not yet a customer?').should('be.visible');

    });

    it('autorization', () => {
        cy.get('[name="email"]').type('kitti@gmail.com');
        cy.get('#password').type('Testpassword1!');
        //cy.contains('div', '#password').should('have.type', 'password');
        //cy.get('[data-icon="eye-slash"]').click().should('have.type', 'text');
        cy.get('#loginButton').click();
        cy.contains('span', 'Your Basket').should('be.visible');



    })

    it('autorization', () => {
        cy.get



    })

    /**after(() => {
        cy.contains('span', 'Account').click();
        cy.contains('span', 'Logout').click({ force: true })
    });*/

})