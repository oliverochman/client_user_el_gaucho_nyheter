describe("Visitor can choose articles by categories", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v1/articles",
      response: "fixture:articles_index.json",
    });
    cy.visit("/");
  });
  context("", () => {
    it("visitor can see different categories in the header", () => {
      cy.get("[data-cy='news']").should("contain", "News");
      cy.get("[data-cy='sports']").should("contain", "Sports");
      cy.get("[data-cy='politics']").should("contain", "Politics");
    });
  });

  context("successfully - News", () => {
    beforeEach(() => {
      cy.server();
      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/v1/articles/?category=news",
        response: "fixture:articles_news.json",
      });
    });
    it("Visitor can see the articles in the News category", () => {
      cy.get("[data-cy='news']").click();
      cy.get("[data-cy='article-4']").within(() => {
        cy.contains("Amy Coney Barrett");
      });
    });
  });
});
