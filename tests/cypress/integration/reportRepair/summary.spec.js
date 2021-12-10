import {
  intercept_address_search,
  intercept_availability_search
} from '../../support/helpers';

describe('summary', () => {
  beforeEach(() => {
    intercept_availability_search();
    intercept_address_search();
    cy.visit('http://localhost:3000/report-repair/');
    cy.contains('No, I want to request a non-emergency repair').click();
    cy.get('button').click();
    cy.contains('No').click();
    cy.get('button').click().then(() => {
      cy.get('input.govuk-input').type('SW1A 2AA');
      cy.get('button').click();
    });
    cy.get('[data-cy=SectionLoaded]', {timeout: 10000}).then(() => {
      cy.get('select').select('1 Downing Street, London')
      cy.get('button').click();
    });
    cy.contains('Kitchen').click();
    cy.get('button').click();
    cy.contains('Cupboards, including damaged cupboard doors').click();
    cy.get('button').click();
    cy.contains('Hanging door').click();
    cy.get('button').click();
    cy.get('textarea').type('Eius postea venit saepius arcessitus.');
    cy.get('input').attachFile('good.jpg');
    cy.get('button').contains('Continue').click();
    cy.get('input').type('02085548333');
    cy.get('button').click()
    cy.get('input#contactDetails-1').click().then(()=> {
      cy.get('input#contactDetails-email').type('harrypotter@hogwarts.com');;
    })
    cy.get('button').click();
    cy.contains('1:00pm to 6:00pm').click();
    cy.get('button').click();
  });

  it('Should contain the title', () => {
    cy.contains('Request summary')
  });
  context('Personal Details', () => {
    it('allows you to change the address', () => {
      let newAddress = '2 Downing Street, London'
      cy.contains('1 Downing Street,London,SW1A 2AA')
      cy.contains(newAddress).should('not.exist')
      cy.get('a[href*="postcode"]').contains('Change').click()
      cy.location('href').should('eq', 'http://localhost:3000/report-repair/postcode')
      cy.get('button').click();
      cy.get('[data-cy=SectionLoaded]', {timeout: 10000}).then(() => {
        cy.get('select').select(newAddress);
        cy.get('button').click();
        cy.get('button').click();
        cy.get('button').click();
        cy.get('button').click();
        cy.get('button').contains('Continue').click();
        cy.get('button').click();
        cy.get('button').click();
        cy.contains('1:00pm to 6:00pm').click();
        cy.get('button').click();
        cy.contains('2 Downing Street,London,SW1A 2AA')
      });
    });
    it('allows you to change appointment contact number', () => {
      let newNumber = '02087748222';
      cy.contains(newNumber).should('not.exist');
      cy.contains('1 Downing Street,London,SW1A 2AA');
      cy.get('a[href*="contact-person"]').contains('Change').click();
      cy.location('href').should('eq', 'http://localhost:3000/report-repair/contact-person');
      cy.get('input').clear();
      cy.get('input').type(newNumber);
      cy.get('button').click();
      cy.get('button').click();
      cy.get('button').click();
      cy.get('button').click();
      cy.get('button').contains('Continue').click();
      cy.get('button').click();
      cy.get('button').click();
      cy.contains('1:00pm to 6:00pm').click();
      cy.get('button').click();
      cy.contains(newNumber);
    });
  });
  context('Repair Details', () => {
    it('allows you to navigate to change the repair location page ', () => {
      cy.get('a[href*="repair-location"]').contains('Change').click()
      cy.location('href').should('eq', 'http://localhost:3000/report-repair/repair-location');
    });
    it('allows you to navigate to change what is the problem page', () => {
      cy.get('a[href*="repair-kitchen-problems"]').contains('Change').click();
      cy.location('href').should('eq', 'http://localhost:3000/report-repair/repair-kitchen-problems');
    });
    it('allows you to change the description', () => {
      let newText = 'loremmmm ipsummm'
      cy.contains(newText).should('not.exist')
      cy.get('a[href*="repair-description"]').contains('Change').click();
      cy.location('href').should('eq', 'http://localhost:3000/report-repair/repair-description');
      cy.get('textarea').clear();
      cy.get('textarea').type(newText);
      cy.get('button').contains('Continue').click();
      cy.get('button').click();
      cy.get('button').click();
      cy.contains('1:00pm to 6:00pm').click();
      cy.get('button').click();
      cy.contains(newText);
    });
  });
  context('Appointment Details', () => {
    it('allows you to change the date', () => {
      let newAppointmentDate = '10:00am to 1:00pm'
      cy.contains(newAppointmentDate).should('not.exist');
      cy.get('a[href*="repair-availability"]').contains('Change').click()
      cy.location('href').should('eq', 'http://localhost:3000/report-repair/repair-availability');
      cy.contains(newAppointmentDate).click();
      cy.contains(newAppointmentDate);
      cy.get('button').click();

    });
    it('allows you to change the confirmation contact details', () => {
      let newEmail = 'dumbledoor@hogwarts.com'
      cy.contains(newEmail).should('not.exist');
      cy.get('a[href*="contact-details"]').contains('Change').click();
      cy.location('href').should('eq', 'http://localhost:3000/report-repair/contact-details');
      cy.get('input#contactDetails-1').click().then(()=> {
        cy.get('input#contactDetails-email').clear();
        cy.get('input#contactDetails-email').type(newEmail);
      })
      cy.get('button').click();
      cy.contains('1:00pm to 6:00pm').click();
      cy.get('button').click();
      cy.contains(newEmail);
    });
  });
});
