/* eslint-disable no-undef */
/// <reference types="cypress"/>

context("Login", () => {
  it("Hacking in...", () => {
    cy.server({
      onAnyRequest: (route, proxy) => {
        // console.log(route);
        // console.log(proxy.url);
        // if(proxy.url == "https://dev-hk-service.usdp.io/bdss/auth-web/api/sitekey"){
        proxy.xhr.setRequestHeader("no-captcha", true);
        // console.log("here")
        // }
      },
    });
    // cy.server();
    // cy.route({
    //   method:'GET',
    //   url:'https://dev-hk-service.usdp.io/bdss/auth-web/api/sitekey',
    //   headers: {
    //     "TestTest": "HIHIHIHIHIHI"
    //   }
    // })
    // }).as('Capthca');
    //cy.request('https://dev-hk-service.usdp.io/bdss/captcha/sitekey?#q=cypress.io+cors')
    // cy.route2({
    //   method:'GET',
    //   // pathname:'https://dev-hk-service.usdp.io/bdss/auth-web/api/sitekey',
    //   // url: /^https:\/\/dev-hk-service\.usdp\.io\/bdss\/auth-web\/api\/sitekey/,
    //   url: '**/sitekey',
    //   headers:{
    //     abc:'test',
    //     // captcha: true
    //   }
    // })
    // cy.route2('GET', 'https://dev-hk-service.usdp.io/bdss/auth-web/api/sitekey',(req)=>{
    //   req.headers['no-captcha'] = true
    // })
    cy.visit("/login");
    cy.vTypeEmail("email");
    cy.vClickBtn("submit");
    cy.vType("password", "234234Ab.");
    cy.vClickBtn("submit");
    //md5 value
    //   cy.vType('password','4297f44b13955235245b2497399d7a93')
  });
});
