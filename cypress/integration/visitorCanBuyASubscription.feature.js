describe("Visitor can buy a subscription", () => {
  beforeEach(() => {
    cy.login();
  });
  context("successfully", () => {
    beforeEach(() => {
      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/v1/articles",
        response: "fixture:articles_index.json",
      });
    });
  });
});
