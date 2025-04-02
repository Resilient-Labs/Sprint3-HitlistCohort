describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')
    cy.contains('Job Hitlist')
  })
})