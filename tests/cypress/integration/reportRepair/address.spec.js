import {intercept_address_search} from '../../support/helpers';

describe('address', () => {
  beforeEach(() => {
    intercept_address_search();
    cy.visit('http://localhost:3000/report-repair/');
    cy.contains('Something else').click();
    cy.get('button').click();
    cy.contains('No').click();
    cy.get('button').click();
    cy.get('input').type('SW1A 2AA');
    cy.get('button').click();
  });

  it('displays the question', () => {
    cy.contains('Where is the repair located?');
  });

  it('contains a can\t find my address link',  () => {
    cy.contains('I can\'t find my address').click();
    cy.url().should('include', '/report-repair/not-eligible');
  });


  context('When a user doesn\'t select anything', ()=>{
    it('an error should be shown',  () => {
      cy.get('button').click()
      cy.contains('Required');
    });
  });

  context('When a user selects an option', ()=>{
    it('an error should be shown',  () => {
      cy.get('button').click()
      cy.get('select').select('1 Downing Street, London, SW1A 2AA')
      cy.get('button').click()
      cy.url().should('include', '/report-repair/repair-location');
    });
  });

});
