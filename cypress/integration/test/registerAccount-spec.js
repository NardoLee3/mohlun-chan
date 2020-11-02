/* eslint-disable no-undef */
/// <reference types="cypress"/>

context("Registering Some Account", () =>{
    it("Alpha", ()=>{
        cy.server({
            onAnyRequest: (route, proxy) => {
              proxy.xhr.setRequestHeader("no-captcha", true);
            },
          });
        cy.visit('register');
        cy.vType("email", "alpha"+Cypress.env("const")+"@cymxw.com");
        cy.vCheck("agreeTermsAndCond");
        cy.vClickBtn("submit");
        cy.vType("pass","123123Ab.");
        cy.vType("confirmPwd","123123Ab.");
        cy.vClickBtn("submit").wait(2000);
        cy.wait(1000);
    })

    it("Opening Alpha Email", ()=>{
      cy.visit('https://dev-hk-mail.usdp.io/m/alpha'+ Cypress.env("const"));
      cy.get('.message-list-entry').first().click({force:true});
      cy.get('.tab-bar > :nth-child(2)').click({force:true});
      cy.get('rendered-html > a').click({force:true}).wait(1000);
    })
    
    it("Beta", ()=>{
      cy.server({
        onAnyRequest: (route, proxy) => {
          proxy.xhr.setRequestHeader("no-captcha", true);
        },
      });
      cy.visit('register');
      cy.vType("email", "beta"+Cypress.env("const")+"@cymxw.com");
      cy.vCheck("agreeTermsAndCond");
      cy.vClickBtn("submit");
      cy.vType("pass","123123Ab.");
      cy.vType("confirmPwd","123123Ab.");
      cy.vClickBtn("submit").wait(2000);
      cy.wait(1000);
    })
    
    it("Opening Beta Email", ()=>{
      cy.visit('https://dev-hk-mail.usdp.io/m/beta'+ Cypress.env("const"));
      cy.get('.message-list-entry').first().click({force:true});
      cy.get('.tab-bar > :nth-child(2)').click({force:true});
      cy.get('rendered-html > a').click({force:true}).wait(1000);
    })

    it("Charlie", ()=>{
        cy.server({
            onAnyRequest: (route, proxy) => {
              proxy.xhr.setRequestHeader("no-captcha", true);
            },
          });
        cy.visit('register');
        cy.vType("email", "charlie"+Cypress.env("const")+"@cymxw.com");
        cy.vCheck("agreeTermsAndCond");
        cy.vClickBtn("submit");
        cy.vType("pass","123123Ab.");
        cy.vType("confirmPwd","123123Ab.");
        cy.vClickBtn("submit").wait(2000);
        cy.wait(1000);
    })

    it("Opening Charlie Email", ()=>{
      cy.visit('https://dev-hk-mail.usdp.io/m/charlie'+ Cypress.env("const"));
      cy.get('.message-list-entry').first().click({force:true});
      cy.get('.tab-bar > :nth-child(2)').click({force:true});
      cy.get('rendered-html > a').click({force:true}).wait(1000);
      cy.get('.tab-bar > :nth-child(1)').click({force:true}).wait(2000);
      cy.get('.tab-bar > :nth-child(2)').click({force:true}).wait(2000);
      cy.get('.tab-bar > :nth-child(1)').click({force:true}).wait(2000);
      cy.get('.tab-bar > :nth-child(2)').click({force:true}).wait(2000);
      cy.get('.tab-bar > :nth-child(1)').click({force:true});
      cy.get('.tab-bar > :nth-child(2)').click({force:true});
      cy.get('.tab-bar > :nth-child(1)').click({force:true});
      cy.get('.tab-bar > :nth-child(2)').click({force:true});
      cy.get('.tab-bar > :nth-child(1)').click({force:true});
      cy.get('.tab-bar > :nth-child(2)').click({force:true});
      cy.get('.tab-bar > :nth-child(1)').click({force:true});
      cy.get('.tab-bar > :nth-child(2)').click({force:true});
      cy.get('.tab-bar > :nth-child(1)').click({force:true});
      cy.get('.tab-bar > :nth-child(2)').click({force:true});
      cy.get('.tab-bar > :nth-child(1)').click({force:true});
      cy.get('.tab-bar > :nth-child(2)').click({force:true});
      cy.wait(2000);
  })
})