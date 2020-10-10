describe("Visitor can see articles", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v1/articles",
      response: "fixture:articles_index.json",
    });
    cy.visit("/");
  });
  it("visitor can see different categories in the header", () => {
    cy.get("[data-cy='news']").should("contain", "News");
    cy.get("[data-cy='news']").should("contain", "Sports");
    cy.get("[data-cy='news']").should("contain", "Politcs");
  });
});
