describe('postcode', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/report-repair/');
    cy.contains('Something else').click();
    cy.get('button').click();
    cy.contains('No').click();
    cy.get('button').click()
  });

  it('displays the question', () => {
    cy.contains('What is the property address?');
  });

  context('When a user doesn\'t type anything', ()=>{
    it('an error should be shown',  () => {
      cy.get('button').click()
      cy.contains('Required');
    });
  });

});
