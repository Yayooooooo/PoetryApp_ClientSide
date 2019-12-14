const apiURL = "http://localhost:8080/#/register";

describe("register Page", () => {
  beforeEach(()=> {
    cy.visit(apiURL)
  })

  describe("Wrong format", () => {
    it("Register ", () => {
      cy.get("input")
        .eq(0)
        .type("ZYL")
      // Click trash/delete link of 3rd donation in list
      cy.get("input")
        .eq(1)
        .type("ZYL@DL.COM")
      cy.get("input")
        .eq(2)
        .type("0627")
      cy.get("input")
        .eq(3)
        .type("0627")
      cy.get('select')
        .select("Male");
      cy.get("button")
        .eq(1)
        .click();
    });
  });
/*
  describe("Wrong format", () => {
    it("Login ", () => {
      cy.get("#logemail")
        .type("ag@qq.com")
      // Click trash/delete link of 3rd donation in list
      cy.get("#logpassword")
        .type("1023")
      cy.get("#submit")
        .click();
    });
  });
*/

});
