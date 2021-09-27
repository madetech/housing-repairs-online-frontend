describe('priorityList', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/report-repair/');
    cy.get('button').click()
    cy.get('button').click()
  });

  it('displays service title', () => {
    cy.contains('What is the problem?');
  });

  context('When a user selects: I can smell gas', ()=>{
    it('should redirect them to smell gas page',  () => {
      cy.contains('I can smell gas').click();
      cy.get('button').click()
      cy.url().should('include', '/report-repair/smell-gas');
    });
  });

  context('When a user selects: I have no heating', ()=>{
    it('should redirect them to smell gas page',  () => {
      cy.contains('I have no heating').click();
      cy.get('button').click()
      cy.url().should('include', '/report-repair/emergency-repair');
    });
  })


  context('When a user selects: I have no water', ()=>{
    it('should redirect them to smell gas page',  () => {
      cy.contains('I have no water').click();
      cy.get('button').click()
      cy.url().should('include', '/report-repair/emergency-repair');
    });
  })


  context('When a user selects: I have no electricity', ()=>{
    it('should redirect them to smell gas page',  () => {
      cy.contains('I have no electricity').click();
      cy.get('button').click()
      cy.url().should('include', '/report-repair/emergency-repair');
    });
  });

  context('When a user selects: I have water leaking on to electrics', ()=>{
    it('should redirect them to smell gas page',  () => {
      cy.contains('I have water leaking on to electrics').click();
      cy.get('button').click()
      cy.url().should('include', '/report-repair/emergency-repair');
    });
  });

  context('When a user selects: I can\'t secure my property', ()=>{
    it('should redirect them to smell gas page',  () => {
      cy.contains('I can\'t secure my property').click();
      cy.get('button').click()
      cy.url().should('include', '/report-repair/emergency-repair');
    });
  });

  context('When a user selects: I have exposed wiring or sockets', ()=>{
    it('should redirect them to smell gas page',  () => {
      cy.contains('I have exposed wiring or sockets').click();
      cy.get('button').click()
      cy.url().should('include', '/report-repair/emergency-repair');
    });
  });

  context('When a user selects: My carbon monoxide or smoke alarm is beeping', ()=>{
    it('should redirect them to smell gas page',  () => {
      cy.contains('My carbon monoxide or smoke alarm is beeping').click();
      cy.get('button').click()
      cy.url().should('include', '/report-repair/emergency-repair');
    });
  });

  context('When a user selects: Something else', ()=>{
    it('should redirect them to smell gas page',  () => {
      cy.contains('Something else').click();
      cy.get('button').click()
      cy.url().should('include', '/report-repair/prior-repair');
    });
  })
});
