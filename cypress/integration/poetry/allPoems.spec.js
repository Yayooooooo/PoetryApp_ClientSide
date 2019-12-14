const apiURL = "http://localhost:8080/#/AllPoems";

describe("All Poems page", () => {
  beforeEach(()=> {
    cy.visit(apiURL)
  })
  describe("For Check Poems Table", () => {
    it("Show all poems", () => {
      cy.get("tbody")
        .find("tr")
        .should("have.length", 1);
      // Click trash/delete link of 3rd donation in list
      cy.get("tbody")
        .find("td")
        .should("have.length", 10);
    });
  });
});
