describe("Premium article is", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v1/articles",
      response: "fixture:articles_index.json",
    });
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v1/articles/2",
      response: "fixture:articles_show_premium.json",
    });
  });
  context("not visible for visitor", () => {
    beforeEach(() => {
      cy.server();
      cy.visit("/");
      cy.get("[data-cy='article-2']").click();
    });

    it("visitor can click on an article and read its content", () => {
      cy.get("[data-cy='title']").should(
        "contain",
        "Ny studie: Möjligt att utplåna fattigdomen och samtidigt rädda klimatet"
      );

      cy.get("[data-cy='content']").should(
        "have.text",
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec."
      );
      cy.get("[data-cy='premium-message']").should(
        "contain",
        "This is a premium article, become a subscriber to read full content"
      );
      cy.get("[data-cy='subscription-button']").should(
        "contain",
        "You need to login to become subscriber"
      );
    });
  });

  context("not visible for only registered user", () => {
    beforeEach(() => {
      cy.server();
      cy.login('registered')
      cy.get("[data-cy='article-2']").click();
    });

    it("visitor can click on an article and read its content", () => {
      cy.get("[data-cy='title']").should(
        "contain",
        "Ny studie: Möjligt att utplåna fattigdomen och samtidigt rädda klimatet"
      );

      cy.get("[data-cy='content']").should(
        "have.text",
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec."
      );
      cy.get("[data-cy='premium-message']").should(
        "contain",
        "This is a premium article, become a subscriber to read full content"
      );
      cy.get("[data-cy='subscription-button']").should(
        "contain",
        "Buy subscription"
      );
    });
  });

  context("visible for subscriber", () => {
    beforeEach(() => {
      cy.server();
      cy.login('subscriber')
      cy.get("[data-cy='article-2']").click();
    });

    it("visitor can click on an article and read its content", () => {
      cy.get("[data-cy='title']").should(
        "contain",
        "Ny studie: Möjligt att utplåna fattigdomen och samtidigt rädda klimatet"
      );

      cy.get("[data-cy='content']").should(
        "have.text",
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec."
      );
      cy.get("[data-cy='premium-message']").should(
        "not.exist");
      cy.get("[data-cy='subscription-button']").should(
        "not.exist"
      );
    });
  });


});
