describe("User can buy a subscription", () => {
  beforeEach(() => {
    cy.login();
  });
  it("successfully", () => {
    cy.get('[data-cy="become-subscriber"]').click();
    cy.wait(1000);

    cy.get('[data-cy="card-number"]').within(() => {
      cy.get('iframe[name^="__privateStripeFrame"]').then(($iframe) => {
        const $body = $iframe.contents().find("body");
        cy.wrap($body)
          .find('input[name="cardnumber"]')
          .type("4242424242424242", { delay: 50 });
      });
    });

    cy.get('[data-cy="card-expiry"]').within(() => {
      cy.get('iframe[name^="__privateStripeFrame"]').then(($iframe) => {
        const $body = $iframe.contents().find("body");
        cy.wrap($body)
          .find('input[name="exp-date"]')
          .type("1222", { delay: 10 });
      });
    });

    cy.get('[data-cy="card-cvc"]').within(() => {
      cy.get('iframe[name^="__privateStripeFrame"]').then(($iframe) => {
        const $body = $iframe.contents().find("body");
        cy.wrap($body).find('input[name="cvc"]').type("999", { delay: 10 });
      });
    });

    cy.get("button").contains("Start your subscription").click();

    cy.get("[data-cy=payment-message]").contains("Payment successfull");
    cy.get('[data-cy="become-subscriber"]').should("not.exist");
  });
});
