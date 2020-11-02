"use strict";

require("./commands");

var _misc = require("./misc");

/* eslint-disable no-undef */
// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************
// Import commands.js using ES2015 syntax:
// Alternatively you can use CommonJS syntax:
// require('./commands')
// beforeEach(()=>{
//     cy.request('POST', 'https://dev-hk-service.usdp.io/bdss/auth-web/api/login',{
//         username: 'aa@aa.aa',
//         pwd:'6aa95819c4b4b093d2e034d52d175164',
//         'no-captcha': true,
//     }).then(res =>{
//         window.localStorage.setItem('s-token', res.body.data.token);
//     })
//     // window.localStorage.setItem('s-token', 'hacking420');
// })
beforeEach(function () {
  // cy.restoreLocalStorageCache();
  cy.clearLocalStorage();
});
afterEach(function () {
  // cy.saveLocalStorageCache();
  cy.clearLocalStorage();
});
before(function () {// cy.clearLocalStorageCache();
});
before(function () {
  var num = (0, _misc.intGenerator)(7);
  cy.wrap(num).as("constNew"); // Cypress.env("const",num).as("constNew");
});