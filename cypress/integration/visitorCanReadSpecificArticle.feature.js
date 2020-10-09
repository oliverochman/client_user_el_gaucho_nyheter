describe("Visitor can read an article's content", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v1/articles",
      response: "fixture:articles_index.json",
    });
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v1/articles/1",
      response: "fixture:single_article.json",
    });

    cy.visit("/");
  });
  it("visitor can click on an article and read its content", () => {
    cy.get("#article-1").click();
    cy.get("#content").should(
      "contain",
      "Det är fullt möjligt att rädda jordens klimat och utplåna fattigdomen"
    );
  });
});
