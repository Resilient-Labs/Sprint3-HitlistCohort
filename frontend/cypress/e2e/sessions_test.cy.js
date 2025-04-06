describe('Testing user Session', () => {
    it('should log in and log out successfully', () => {
      cy.visit('http://localhost:5173'); 
  
      cy.get('input[name="email"]').type('test@test.com');
      cy.get('input[name="password"]').type('test');
      cy.get('button[type="submit"]').click();
  
      cy.contains('Welcome back, testuser2!');
  
      cy.get('.logout-button').click();
  
      cy.contains('Login');
    });
});