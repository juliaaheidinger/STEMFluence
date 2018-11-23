describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.clearLocalStorage()
  })

  it('has the right title', () => {
    cy.title().should('equal', 'STEMfluence')
  })

  it('has a Button with Text Apply now', () => {
    cy.get('[data-cy=Applybtn]')
      .contains('Apply now')
      .should('have.length', 1)
  })
})
