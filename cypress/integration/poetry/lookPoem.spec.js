describe('Look Poem page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080')
    // Click Manage Projects navbar link
  })
  describe('For look poem', () => {
    it('should open a like', () => {
      cy.get('#lookPoem')
        .click();
    })
  })
})
