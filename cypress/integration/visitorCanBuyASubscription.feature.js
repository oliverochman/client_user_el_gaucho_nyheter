describe("User can buy a subscription", () => {
  beforeEach(() => {
    cy.login();
  });
  it("successfully", () => {
    cy.get('[data-cy="become-subscriber"]').click()
  });
});
