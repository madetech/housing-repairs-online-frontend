import {intercept_address_search} from './helpers';

describe('address', () => {
  beforeEach(() => {
    const postcode = 'M3 0W';
    intercept_address_search(postcode);
    cy.visit('http://localhost:3000/report-repair/');
    cy.contains('Something else').click();
    cy.get('button').click();
    cy.contains('No').click();
    cy.get('button').click();
    cy.get('input').type(postcode);
    cy.get('button').click();
    cy.wait(2000)

  });

  it('displays the question', () => {
    cy.contains('Where is the repair located?');
  });

});
