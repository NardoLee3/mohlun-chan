/* eslint-disable no-undef */
/// <reference types="cypress"/>

context("Login", () => {
  it("Fail to enter correct password...", () => {
    cy.visit("/login");
    cy.vTypeEmail("email");
    cy.vClickBtn("submit");
    cy.vType("password", "123123.");
    cy.vClickBtn("submit");
    cy.vType("password", "2123123Ab.");
    cy.vClickBtn("submit");
  });
});
