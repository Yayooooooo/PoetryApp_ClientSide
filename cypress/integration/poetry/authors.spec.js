const apiURL = "http://localhost:8080/#/Authors";

describe("All Authors page", () => {
 beforeEach(()=> {
   cy.visit(apiURL)
     // .its("body")
 })
  describe("For Check Author Table", () => {
    it("reduces the no. of donations by 1", () => {
      cy.get("tbody")
        .find("tr")
        .should("have.length", 2);
      // Click trash/delete link of 3rd donation in list
      cy.get("tbody")
        .find("td")
        .should("have.length", 10);
    });
  });
});
