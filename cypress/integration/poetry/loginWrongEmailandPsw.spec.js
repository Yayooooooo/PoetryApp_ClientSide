const apiURL = "http://localhost:8080/#/login";


describe("Login Page", () => {
  beforeEach(()=> {
    cy.visit(apiURL)
  })

  describe("Don\'t match", () => {
    it("Login ", () => {
      cy.get("#logemail")
        .type("ZHENGYUNLONG")
      // Click trash/delete link of 3rd donation in list
      cy.get("#logpassword")
        .type("0627")
      cy.get("#submit")
        .click();
      cy.get("#logemail")
        .type("@dl.com")
      cy.get("#submit")
        .click();
    });
  });
});
