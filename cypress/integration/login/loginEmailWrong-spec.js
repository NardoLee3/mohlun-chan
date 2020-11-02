/* eslint-disable no-undef */
/// <reference types="cypress"/>

context("Login", () => {
  it("Wrong Email", () => {
    cy.visit("/login");
    cy.vType("email","myInsanity@me.com");
    cy.vClickBtn("submit");
    cy.vType("email","isSlowly@me.com");
    cy.vClickBtn("submit");
    cy.vType("email","Corrupting!!!!!@me.com");
    cy.vClickBtn("submit");
  });
});
