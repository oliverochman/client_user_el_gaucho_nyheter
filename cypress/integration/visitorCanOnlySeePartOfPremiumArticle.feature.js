describe("Premium article is", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v1/articles",
      response: "fixture:articles_index.json",
    });
  });
  context("not visible for visitor", () => {
    beforeEach(() => {
      cy.server();
      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/v1/articles/2",
        response: "fixture:articles_show_premium.json",
      });
      cy.visit("/");
    });

    it("visitor can click on an article and read its content", () => {
      cy.get("[data-cy='article-2']").click();
      cy.get("[data-cy='title']").should(
        "contain",
        "Ny studie: Möjligt att utplåna fattigdomen och samtidigt rädda klimatet"
      );
      cy.get("[data-cy='buy-subscription']").should("contain", "This is a premium article. Buy subscription in order to read it")
    });
  });
});