import {intercept_address_search} from '../../support/helpers';

describe('address', () => {
  beforeEach(() => {
    const postcode = 'SW1A 1AA';
    intercept_address_search(postcode);
    cy.visit('http://localhost:3000/report-repair/');
    cy.contains('Something else').click();
    cy.get('button').click();
    cy.contains('No').click();
    cy.get('button').click();
    cy.get('input').type(postcode);
    cy.get('button').click();

  });

  it('displays the question', () => {
    cy.contains('Where is the repair located?');
  });

});
