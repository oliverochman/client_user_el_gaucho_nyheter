describe("User can buy a subscription", () => {
  beforeEach(() => {
    cy.login("registered");

    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/v1/subscriptions",
      response: "fixture:subscriptions_create_success.json",
    });
  });
  it("successfully", () => {
    cy.get('[data-cy="become-subscriber"]').click();
    cy.wait(1000);
    cy.typeInStripeElement("card-number", "cardnumber", "4242424242424242");
    cy.typeInStripeElement("card-expiry", "exp-date", "1222");
    cy.typeInStripeElement("card-cvc", "cvc", "999");

    cy.get("button").contains("Start your subscription").click();

    cy.get("[data-cy=message]").contains("Payment successfull");
    cy.get('[data-cy="become-subscriber"]').should("not.exist");
  });

  context("Unsuccessfull transaction", () => {
    beforeEach(() => {
      cy.route({
        method: "POST",
        url: "http://localhost:3000/api/v1/subscriptions",
        response: "fixture:subscriptions_create_unsuccess.json",
        status: 422,
      });
    });

    it("with declined card", () => {
      cy.get('[data-cy="become-subscriber"]').click();
      cy.wait(1000);
      cy.typeInStripeElement("card-number", "cardnumber", "4242424242424242");
      cy.typeInStripeElement("card-expiry", "exp-date", "1222");
      cy.typeInStripeElement("card-cvc", "cvc", "000");
      cy.get("button").contains("Start your subscription").click();
      cy.get("[data-cy=message]").contains("Payment unsuccessful");
      cy.get('[data-cy="become-subscriber"]').should("exist");
    });
  });
});
describe("User login unsuccess", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "POST",
      url: "http://localhost:3000/api/v1/auth/**",
      status: "422",
      response: "fixture:unsuccessful_login.json",
    });
    cy.route({
      method: "GET",
      url: "/**auth**",
      response: "fixture:unsuccessful_login.json",
    });

    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/v1/articles",
      response: "fixture:articles_index.json",
    });

    cy.visit("/");
    cy.get("[data-cy='login']").click();
  });

  it("By typing in wrong password", () => {
    cy.get("[data-cy='login-form']").within(() => {
      cy.get("[data-cy='email']").type("user@mail.com");
      cy.get("[data-cy='password']").type("wrongpassword");
      cy.get("[data-cy='submit']").click();
    });
    cy.get("[data-cy='message']").should(
      "contain",
      "Invalid login credentials. Please try again"
    );
  });
});
