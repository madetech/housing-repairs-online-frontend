describe('priorityList', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/report-repair/');
    cy.contains('Something else').click();
    cy.get('button').click()
  });

  it('displays the question', () => {
    cy.contains('Is the issue in a communal area?');
  });

  context('When a user selects: Yes', ()=>{
    it('should redirect them to smell gas page',  () => {
      cy.contains('Yes').click();
      cy.get('button').click()
      cy.url().should('include', '/report-repair/not-eligible');
    });
  });

  context('When a user selects: No', ()=>{
    it('should redirect them to smell gas page',  () => {
      cy.contains('No').click();
      cy.get('button').click()
      cy.url().should('include', '/report-repair/postcode');
    });
  })
});
