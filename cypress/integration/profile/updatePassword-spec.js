/* eslint-disable no-undef */
/// <reference types="cypress"/>

context("Update Password", () =>{
    it("Changing Password", () =>{
        cy.login();
        cy.visit('/setting');
        cy.vType('oldPassword',' ');
        cy.vType('newPassword',' ');
        cy.vType('confirmPassword',' ');
        cy.vCheckError('oldPassword');
        cy.vCheckError('newPassword');
        cy.vCheckError('confirmPassword');
    })
})