const stubLocation = require("../support/stubLocation");

describe("User can see current country", () => {
  beforeEach(() => {
    cy.visit("/", stubLocation({ latitude: 59.3501, longitude: 17.9658 }));
  });

  it("Visitor can see the articles in the News category", () => {
    cy.get("[data-cy='local-news']").click({ force: true });
    cy.get("[data-cy='current-location']").should(
      "contain",
      "Local news from: Sweden"
    );
  });
});
