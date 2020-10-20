
describe("Visitor can register to become a user", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  context("successfully", () => {
    beforeEach(() => {
      cy.server()
      cy.route({
        method: "POST",
        url: "http://localhost:3000/api/v1/subscriptions",
        response: "fixture:registration_success.json",
      });
    });

    it("successfully registered", () => {
      cy.get("[data-cy='login']").click()
      cy.get("[data-cy='register']").click()
    
      cy.get("[data-cy='registration-form']").within(() => {
        cy.get("[data-cy='email']").type("user123@mail.com");
        cy.get("[data-cy='password']").type("password");
        cy.get("[data-cy='password-confirmation']").type("password");
        cy.get("[data-cy='submit']").click();
      });
      cy.get("[data-cy=message]").contains(
        "Registration successful, now you have access to El-gaucho mobile app. Visit your appstore!"
      );
    })
  });

  context("unsuccessfully", () => {
    beforeEach(() => {
      cy.route({
        method: "POST",
        url: "http://localhost:3000/api/v1/auth/sign_in",
        status: "422",
        response: {
          response: "fixture:registration_unsuccess.json",
        },
      });
    });

    it("with invalid email", () => {
      cy.get("[data-cy='login']").click()
      cy.get("[data-cy='register']").click()
      cy.get("[data-cy='registration-form']").within(() => {
        cy.get("[data-cy='email']").type("usermail.com");
        cy.get("[data-cy='password']").type("password");
        cy.get("[data-cy='password-confirmation']").type("password");
        cy.get("[data-cy='submit']").click();
      });
      cy.get("#message").should("contain", "Email must be valid");
    });

    it("with non matching passwords", () => {
      cy.get("[data-cy='login']").click()
      cy.get("[data-cy='register']").click()
      cy.get("[data-cy='registration-form']").within(() => {
        cy.get("[data-cy='email']").type("user@mail.com");
        cy.get("[data-cy='password']").type("password");
        cy.get("[data-cy='password-confirmation']").type("paswrd");
        cy.get("[data-cy='submit']").click();
      });
      cy.get("#message").should("contain", "Invalid input, please try again.");
    });
  });
});
