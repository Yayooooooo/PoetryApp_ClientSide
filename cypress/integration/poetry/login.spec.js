const apiURL = "http://localhost:8080/#/login";

describe("Login Page", () => {
  beforeEach(()=> {
    cy.visit(apiURL)
  })

  describe("Wrong format", () => {
    it("Login ", () => {
      cy.get("#logemail")
        .type("ZHENGYUNLONG")
      // Click trash/delete link of 3rd donation in list
      cy.get("#logpassword")
        .type("0627")
      cy.get("#submit")
        .click();
    });
  });

  describe("Correct login", () => {
    it("Login ", () => {
      cy.get("#logemail")
        .type("ZYL@DL.COM")
      // Click trash/delete link of 3rd donation in list
      cy.get("#logpassword")
        .type("0627")
      cy.get("button")
        .eq(1)
        .click();
    });
  });

});
