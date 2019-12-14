
describe("Home page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080/");
  });

  it("Shows a header", () => {
    cy.get(".vue-title").should("contain", "Poetry");
  });

  describe("Navigation bar", () => {
    it("Shows the required links", () => {
      cy.get(".navbar-nav")
        .eq(0)
        .within(() => {
          cy.get(".nav-item")
            .eq(0)
            .should("contain", "Home");
          cy.get(".nav-item")
            .eq(1)
            .should("contain", "All Poems");
          cy.get(".nav-item")
            .eq(2)
            .should("contain", "My Poems");
          cy.get(".nav-item")
            .eq(3)
            .should("contain", "All Author");
        });
      cy.get(".navbar-nav")
        .eq(1)
        .within(() => {
          cy.get(".nav-item")
            .eq(0)
            .should("contain", "Register");
          cy.get(".nav-item")
            .eq(1)
            .should("contain", "Login");
          cy.get(".nav-item")
            .eq(2)
            .should("contain", "Logout");
        });
    });

    it("Redirects when links are clicked", () => {
      cy.get("[data-test=allPoemsBtn]").click();
      cy.url().should("include", "/AllPoems");
      /*cy.get(".navbar-nav")
        .eq(0)
        .find(".nav-item")
        .eq(2)
        .click();
      cy.url().should("include", "/MyPoems");
      cy.get("button")
        .contains("OK")
        .click();*/
      cy.get(".navbar-nav")
        .eq(0)
        .find(".nav-item")
        .eq(3)
        .click();
      cy.url().should("include", "/Authors");
      cy.get(".navbar-nav")
        .eq(1)
        .find(".nav-item")
        .eq(0)
        .click();
      cy.url().should("include", "/register");
      cy.get(".navbar-nav")
        .eq(1)
        .find(".nav-item")
        .eq(1)
        .click();
      cy.url().should("include", "/login");
      cy.get(".navbar-nav")
        .eq(1)
        .find(".nav-item")
        .eq(2)
        .click();
      cy.get("button")
        .contains("Cancel")
        .click();
      cy.get("button")
        .contains("OK")
        .click();
    });
  });
});
