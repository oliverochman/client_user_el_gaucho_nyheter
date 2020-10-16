Cypress.Commands.add("typeInStripeElement", (id, field, value) => {
  cy.get(`[data-cy=${id}]`).within(() => {
    cy.get('iframe[name^="__privateStripeFrame"]').then(($iframe) => {
      const $body = $iframe.contents().find("body");
      cy.wrap($body).find(`input[name=${field}]`).type(`${value}`, { delay: 10 });
    });
  })
})

Cypress.Commands.add("login", (role) => {
  cy.server();
  cy.route({
    method: "POST",
    url: "http://localhost:3000/api/v1/auth/*",
    response: `fixture:successful_login_${role}.json`,
    headers: {
      uid: `user@mail.com`,
    },
  });

  cy.route({
    method: "GET",
    url: "http://localhost:3000/api/v1/articles",
    response: "fixture:articles_index.json",
  });
  
  cy.route({
    method: "GET",
    url: "http://localhost:3000/api/v1/auth/*",
    response: `fixture:successful_login_${role}.json`,
    headers: {
      uid: `user@mail.com`,
    },
  });
  cy.visit("/");
  cy.get("[data-cy='login']").click()
  cy.get("[data-cy='login-form']").within(() => {
    cy.get("[data-cy='email']").type("user@mail.com");
    cy.get("[data-cy='password']").type("password");
    cy.get("[data-cy='submit']").click();
  });
});
