describe('registration', () => {
    it('registration-pozitive', () => {
        cy.visit('/');
        cy.wait(1000);
        cy.contains('span', 'Dismiss').click();

        cy.contains('span', 'Account').click();
        cy.get('#navbarLoginButton').click();
        cy.contains('a', 'Not yet a customer?').should('be.visible');
        cy.contains('a', 'Not yet a customer?').click();
        cy.contains('h1', 'User Registration').should('be.visible');

        cy.get('[type="checkbox"]').check({ force: true });
        cy.wait(1500);
        cy.contains('span', 'contains at least one lower character').should('be.visible');
        cy.contains('span', 'contains at least one upper character').should('be.visible');
        cy.contains('span', 'contains at least one digit').should('be.visible');
        cy.contains('span', 'contains at least one special character').should('be.visible');
        cy.contains('span', 'contains at least 8 characters').should('be.visible');
        cy.get('[type="checkbox"]').check({ force: true });

        cy.get('#emailControl').type('cat@gmail.com');

        cy.get('#passwordControl').type('Testpassword1!');
        cy.get('#repeatPasswordControl').type('Testpassword1!');

        cy.get('[appearance="outline"]').eq(3).click();
        cy.contains('span', 'Name of your favorite pet?').click();
        cy.contains('i', 'person_add').should('be.disabled');
        cy.get('#securityAnswerControl').type('Mause');
        cy.contains('i', 'person_add').should('not.be.disabled');
        cy.get('[class="mat-button-wrapper"]').last().click();
        cy.contains('a', 'Not yet a customer?').should('be.visible');


    })

   
})