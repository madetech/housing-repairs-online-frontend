describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('displays service title', () => {
    cy.contains('Housing Repairs Online')
  })

  it('displays correct phase banner', () => {
    cy.get('[data-test-id=PhaseBanner]').should('have.contain','beta')
  })
})
