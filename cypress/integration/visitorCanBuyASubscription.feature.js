describe("User can buy a subscription", () => {
  beforeEach(() => {
    cy.login();

    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/v1/subscriptions",
      response: "fixture:subscriptions_create_success.json"
    });
  });
  it("successfully", () => {
    cy.get('[data-cy="become-subscriber"]').click()
    cy.wait(1000)
    cy.typeInStripeElement("card-number", "cardnumber", "4242424242424242")
    cy.typeInStripeElement("card-expiry", "exp-date", "1222")
    cy.typeInStripeElement("card-cvc", "cvc", "999")

    cy.get('button').contains("Start your subscription").click()

    cy.get("[data-cy=message]").contains("Payment successfull")
    cy.get('[data-cy="become-subscriber"]').should("not.exist")
  });
});