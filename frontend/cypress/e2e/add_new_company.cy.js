describe('Add Company Form Test', () => {
    it('should log in, fill out the company form, and submit successfully', () => {
      cy.visit('http://localhost:5173');
  
      // Log in
      cy.get('input[name="email"]').type('test@test.com');
      cy.get('input[name="password"]').type('test');
      cy.get('button[type="submit"]').click();
  
      // Wait for login to complete and navigate to /hitlist
      cy.contains('Welcome back').should('exist');
      cy.visit('http://localhost:5173/hitlist');
  
      // Fill out the form
      cy.get('#form-company-name').type('OpenAI');
      cy.get('#form-company-status').select('interviewing');
      cy.get('#form-company-url').type('https://openai.com/careers');
      cy.get('#form-company-contacts').type('Sam Altman');
      cy.get('#form-company-notes').type('Excited about the mission and culture!');
      cy.get('#form-company-priority').select('High');
  
      // Submit the form
      cy.get('#add-company-form-button').click();
  
      // Confirm submission feedback
      cy.contains('Operation Successful', { timeout: 4000 }).should('exist'); // adjust message if needed
    });
  });