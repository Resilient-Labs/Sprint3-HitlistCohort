describe('template spec', function(){
  it('passes', function() {
    cy.visit('/')
    cy.contains('Job Hitlist')
  })
})