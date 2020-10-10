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
    cy.get("[data-cy='sports']").should("contain", "Sports");
    cy.get("[data-cy='politics']").should("contain", "Politics");
  });
  context("successfully - News", () => {
    beforeEach(() => {
      cy.server();
      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/v1/articles/1",
        response: "fixture:articles_news.json",
      });
      cy.visit("/");
    });
    it("visitor can click on an article and read its content", () => {
      cy.get("[data-cy='news']").click();
      cy.get("[data-cy='article-4']").within(() => {
        cy.contains("De här magasinen läser svenskarna 2020");
      });
    });
  });
});
