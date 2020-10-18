const stubLocation = require("../support/stubLocation");

describe("User can see current country", () => {
  beforeEach(() => {
    cy.visit("/", stubLocation({ latitude: XXXXXX, longitude: XXXXX }));
  });

  it("Visitor can see the articles in the News category", () => {
    cy.get("[data-cy='news']").click();
    cy.get("[data-cy='current-location']").should(
      "contain",
      "Local news from: Sweden"
    );
  });
});
