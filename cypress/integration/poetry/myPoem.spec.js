const apiURL = "http://localhost:8080/#/MyPoems";

describe("My Poems page", () => {
    it("Show all poems", () => {
    /*  cy.visit("http://localhost:8080/#/login")
      cy.get("#logemail")
        .type("ZYL@DL.COM")
      // Click trash/delete link of 3rd donation in list
      cy.get("#logpassword")
        .type("0627")
      cy.get("button")
        .eq(1)
        .click();*/
      cy.visit(apiURL)
      cy.get("tbody")
        .find("tr")
        .should("have.length", 1);
      // Click trash/delete link of 3rd donation in list
      cy.get("tbody")
        .find("td")
        .should("have.length", 1);
  });
});
