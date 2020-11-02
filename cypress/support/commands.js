/* eslint-disable no-undef */
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import 'cypress-file-upload';
import { intGenerator } from './misc.js';

//Normal type
Cypress.Commands.add('vType', (target, text, id = 0) => {
  cy.get('[data-cy=text-' + target + ']')
    .eq(id)
    .children()
    .type(text);
});

//Check Error on text
Cypress.Commands.add('vCheckError', target => {
  cy.get('[data-cy=text-' + target + ']')
    .children()
    .children()
    .should('have.class', 'error--text');
});

//Check Error on select
Cypress.Commands.add('vCheckSelectError', target => {
  cy.get('[data-cy=select-' + target + ']')
    .children()
    .should('have.class', 'error--text');
});

//Purposely Insert wrong type into field, expect error
Cypress.Commands.add('vErrorText', (target, text, id = 0) => {
  cy.get('[data-cy=text-' + target + ']')
    .eq(id)
    .children()
    .type(text);
  cy.get('[data-cy=text-' + target + ']').should('have.class', 'error--text');
});

//Select empty on select
Cypress.Commands.add('vErrorSelect', target => {
  cy.get('[data-cy=select-' + target + ']').click();
  cy.get(
    '[data-cy=select-' +
      target +
      '] > .v-input > .v-input__control > .v-input__slot > .v-select__slot > .v-input__append-inner > .v-input__icon > .v-icon'
  ).click({ force: true });
});

//Clear Text
Cypress.Commands.add('vClear', (target, id = 0) => {
  cy.get('[data-cy=text-' + target + ']')
    .eq(id)
    .children()
    .clear();
});

//Add Date Range
Cypress.Commands.add('vSelectDateRange', (target, id = 0) => {
  cy.get('[data-cy=text-' + target + ']')
    .children()
    .children()
    .children()
    .eq(id)
    .type('2020-01-01~2020-12-31', { force: true });
});

//Type in random number
Cypress.Commands.add('vTypeRndNumber', (target, digits = 5, id = 0) => {
  var num = intGenerator(digits);
  cy.get('[data-cy=text-' + target + ']')
    .eq(id)
    .children()
    .type(num);
});

//Type in Email
Cypress.Commands.add('vTypeEmail', (target, id = 0) => {
  cy.get('[data-cy=text-' + target + ']')
    .eq(id)
    .children()
    .type('aa@aa.aa');
});

//Type in Text Area
Cypress.Commands.add('fillupTextArea', (target, text, id = 0) => {
  cy.get('[data-cy=text-' + target + ']')
    .eq(id)
    .children()
    .type(text);
});

//V Select
Cypress.Commands.add('vSelect', (target, value) => {
  cy.get('[data-cy=select-' + target + ']')
    .children()
    .type(value + '{enter}');
});

//Upload Component
Cypress.Commands.add('upload', target => {
  cy.fixture('WALLPAPER.jpg').then(fileContent => {
    cy.get('[data-cy=file-' + target + ']').attachFile({
      fileContent: fileContent.toString(),
      fileName: 'WALLPAPER.jpg',
      mimeType: 'image/png',
    });
  });
});

//File Selector
Cypress.Commands.add(
  'attach_file',
  {
    prevSubject: 'element',
  },
  (input, fileName, fileType) => {
    console.log('Here');
    cy.fixture(fileName)
      .then(content => Cypress.Blob.base64StringToBlob(content, fileType))
      .then(blob => {
        const testFile = new File([blob], fileName);
        const dataTransfer = new DataTransfer();

        dataTransfer.items.add(testFile);
        input[0].files = dataTransfer.files;
        return input;
      });
  }
);

//Check checkbox
Cypress.Commands.add('vCheck', target => {
  cy.get('[data-cy=checkbox-' + target + ']').check({ force: true });
});

//Check radio
Cypress.Commands.add('vRadio', (target, id = 0) => {
  cy.get('[data-cy=radio-' + target + ']')
    .eq(id)
    .check({ force: true });
});

//Click Button
Cypress.Commands.add('vClickBtn', (target, id = 0) => {
  cy.get('[data-cy=btn-' + target + ']')
    .eq(id)
    .click({ force: true });
});

//Click Tab
Cypress.Commands.add('vClickTab', target => {
  cy.get('[data-cy=tab-' + target + ']').click();
});

//Click Tab
Cypress.Commands.add('vClickNestTab', (target, id = 0) => {
  cy.get('[data-cy=tab-' + target + ']')
    .children()
    .children()
    .eq(1)
    .children()
    .children()
    .eq(id)
    .click();
});

//Click Button
Cypress.Commands.add('vClickTable', (target, id = 0) => {
  cy.get('[data-cy=table-' + target + ']')
    .children()
    .children()
    .children()
    .eq(2)
    .children()
    .eq(id)
    .click({ force: true });
});

//Check Url
Cypress.Commands.add('vCheckUrl', url => {
  cy.url().should('have', url);
});

//Check box with id
Cypress.Commands.add('vCheckboxes', (target, id = 0) => {
  cy.get('[data-cy=checkboxes-' + target + ']')
    .children()
    .eq(id)
    .children()
    .children()
    .children()
    .eq(0)
    .click({ force: true });
});
//Check last checkbox
Cypress.Commands.add('vCheckboxesLast', target => {
  cy.get('[data-cy=checkboxes-' + target + ']')
    .children()
    .eq(-2)
    .children()
    .children()
    .children()
    .eq(0)
    .click({ force: true });
  cy.get('[data-cy=checkboxes-' + target + ']')
    .children()
    .last()
    .type('automated by bot');
});

// Get from list
Cypress.Commands.add('vList', (target, id = 0) => {
  cy.get('[data-cy=list-' + target + ']')
    .children()
    .children()
    .eq(id)
    .children()
    .click({ force: true });
});


Cypress.Commands.add('login',()=>{
  cy.server({
    onAnyRequest: (route, proxy) => {
      proxy.xhr.setRequestHeader("no-captcha", true);
    },
  });
  cy.visit("/login");
  cy.vTypeEmail("email");
  cy.vClickBtn("submit");
  cy.vType("password", "234234Ab.");
  cy.vClickBtn("submit");
  cy.wait(1000);
})

let LOCAL_STORAGE_MEMORY = {};

Cypress.Commands.add("saveLocalStorageCache", () => {
  Object.keys(localStorage).forEach(key => {
    LOCAL_STORAGE_MEMORY[key] = localStorage[key];
  });
});

Cypress.Commands.add("restoreLocalStorageCache", () => {
  Object.keys(LOCAL_STORAGE_MEMORY).forEach(key => {
    localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key]);
  });
});

Cypress.Commands.add("clearLocalStorageCache", () => {
  localStorage.clear();
  LOCAL_STORAGE_MEMORY = {};
});
