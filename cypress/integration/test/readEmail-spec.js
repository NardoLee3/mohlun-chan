/* eslint-disable no-undef */
/// <reference types="cypress"/>

context("Read Email", () =>{
    it("Opening Email", ()=>{
        cy.visit('https://dev-hk-mail.usdp.io/m/alpha'+toString(Cypress.env("alpha")));
        cy.get('.message-list-entry').first().click({force:true});
        cy.get('.tab-bar > :nth-child(2)').click({force:true});
        cy.get('rendered-html > a').click({force:true})
    })
})