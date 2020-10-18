const stubLocation = require("../support/stubLocation");

describe("User can see current country", () => {
  beforeEach(() => {
    cy.visit("/", stubLocation({ latitude: XXXXXX, longitude: XXXXX }));
  });

  it("that displays correctly", () => {
    cy.get("[data-cy='current-location']").should(
      "contain",
      "You are in America"
    );
  });
});
