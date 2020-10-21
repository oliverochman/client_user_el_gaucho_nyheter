describe("Visitor can register to become a user", () => {
  beforeEach(() => {
        cy.server();
        cy.route({
          method: "GET",
          url: "http://localhost:3000/api/v1/articles",
          response: "fixture:articles_index.json",
        });
    cy.visit("/");
    cy.get("[data-cy='login']").click();
    cy.get("[data-cy='register']").click();
  });

  context("successfully", () => {
    before(() => {
      cy.server();
      cy.route({
        method: "POST",
        url: "**/auth**",
        response: "fixture:registration_success.json",
      });
      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/v1/auth/**",
        response: "fixture:registration_success.json",
      });
      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/v1/articles",
        response: "fixture:articles_index.json",
      });
    });

    it("successfully registered", () => {
      cy.get("[data-cy='registration-form']").within(() => {
        cy.get("[data-cy='email']").type("user123@mail.com");
        cy.get("[data-cy='password']").type("password");
        cy.get("[data-cy='password-confirmation']").type("password");
        cy.get("[data-cy='submit']").click();
      });
      cy.get("[data-cy=message]").contains(
        "Registration successful, now you have access to El-gaucho mobile app. Visit your appstore!"
      );
    });
  });

  context("unsuccessfully", () => {
    beforeEach(() => {
      cy.server()
      cy.route({
        method: "POST",
        url: "**/auth**",
        status: "422",
        response: {
          response: "fixture:registration_unsuccess.json",
        },
      });
      cy.route({
        method: "GET",
        url: "http://localhost:3000/api/v1/articles",
        response: "fixture:articles_index.json",
      });
    });

    it("with non matching passwords", () => {
      cy.get("[data-cy='registration-form']").within(() => {
        cy.get("[data-cy='email']").type("user@mail.com");
        cy.get("[data-cy='password']").type("password");
        cy.get("[data-cy='password-confirmation']").type("paswrd");
        cy.get("[data-cy='submit']").click();
      });
      cy.get("[data-cy='message']").should("contain", "Invalid input, please try again.");
    });
  });
});
