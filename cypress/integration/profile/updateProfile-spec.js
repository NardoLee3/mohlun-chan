/* eslint-disable no-undef */
/// <reference types="cypress"/>

context("Updating profile with  wrong type", () =>{
    it("Changing confidential data", () =>{
        cy.login();
        cy.server({
            onAnyRequest: (route, proxy) => {
            },
          });
        cy.visit('/profile');
        cy.vType('fullname', ' ');
        cy.vType('address1',' ');
        cy.vType('address2', ' ');
        cy.vErrorText('postcode', 'lemme see');
        cy.vType('city',' ');
        cy.vType('country',' ');
        cy.vClickBtn('save',' ');
        cy.vCheckError('fullname');
        cy.vCheckError('address1');
        cy.vCheckError('address2');
        cy.vCheckError('city');
        cy.vCheckError('country');
    });
})