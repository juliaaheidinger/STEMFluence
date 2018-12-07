describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.clearLocalStorage()
  })

  it('has the right title', () => {
    cy.title().should('equal', 'STEMfluence')
  })

  it('has a Card', () => {
    cy.get('[data-cy="Card"]').should('contain', '#BecomeACoder')
  })

  it('has a Button with Text Apply now', () => {
    cy.get('[data-cy="Togglebtn"]').click({ multiple: true })
  })

  it('goes to Application Page', () => {
    cy.get('[data-cy="Togglebtn"]').click({ multiple: true })
    cy.get('[data-cy="Applybtn"]')
      .contains('Apply now')
      .click()
    cy.location().should(location => {
      expect(location.href).to.eq('http://localhost:3000/application/j4rokp1')
    })
  })
})
