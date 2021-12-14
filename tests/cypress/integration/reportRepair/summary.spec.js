import {
  intercept_address_search,
  intercept_availability_search
} from '../../support/helpers';

const navigateToPageSelectRadioOptionAndContinue = ({page, option}) => {
  cy.get(`[data-cy=${page}]`, {timeout: 10000}).then(() => {
    cy.contains(option).click();
    cy.get('button').click();
  });
}

const navigateToPageTypeInputTextAndContinue = ({page, inputText}) => {
  cy.get(`[data-cy=${page}]`, {timeout: 10000}).then(() => {
    cy.get('input.govuk-input').type(inputText);
    cy.get('button').click();
  });
}


describe('summary', () => {
  let timeSlot = ''
  beforeEach(() => {
    intercept_availability_search();
    intercept_address_search();
    cy.visit('http://localhost:3000/report-repair/');

    navigateToPageSelectRadioOptionAndContinue({page: 'priority-list', option:'No, I want to request a non-emergency repair' })
    navigateToPageSelectRadioOptionAndContinue({page: 'communal', option:'No' })
    navigateToPageTypeInputTextAndContinue({page: 'postcode', inputText:'SW1A 2AA' })

    cy.get('[data-cy=address]', {timeout: 10000}).then(() => {
      cy.get('select').select('1 Downing Street, London, SW1A 2AA')
      cy.get('button').click();
    });

    navigateToPageSelectRadioOptionAndContinue({page: 'repair-location', option:'Kitchen' })
    navigateToPageSelectRadioOptionAndContinue({page: 'repair-problem', option:'Cupboards, including damaged cupboard doors' })
    navigateToPageSelectRadioOptionAndContinue({page: 'repair-problem-best-description', option:'Hanging door' })

    cy.get('[data-cy=repair-description]', {timeout: 10000}).then(() => {
      cy.get('textarea').type('Eius postea venit saepius arcessitus.');
      cy.get('input').attachFile('good.jpg');
      cy.get('button').contains('Continue').click();
    });

    navigateToPageTypeInputTextAndContinue({page: 'contact-person', inputText:'02085548333' })


    cy.get('[data-cy=contact-details]', {timeout: 10000}).then(() => {
      cy.get('input#contactDetails-1').click().then(()=> {
        cy.get('input#contactDetails-email').type('harrypotter@hogwarts.com');
      })
      cy.get('button').click();
    });
    cy.get('[data-cy=repair-availability]', {timeout: 10000}).then(() => {
      cy.get('[data-cy=availability-slot-0-0]').invoke('val').then(value =>{
        timeSlot = value;
      })
      cy.get('[data-cy=availability-slot-0-0]').click();
      cy.get('button').click();
    });
  });

  it('Should contain the title', () => {
    cy.contains('Request summary')
  });

  context('Personal Details', () => {
    it('allows you to change the address', () => {
      let newAddress = '2 Downing Street, London, SW1A 2AA'
      cy.contains('1 Downing Street, London, SW1A 2AA')
      cy.contains(newAddress).should('not.exist')
      cy.get('a[href*="postcode"]').contains('Change').click()

      cy.location('href').should('eq', 'http://localhost:3000/report-repair/postcode')
      cy.get('button').click();

      cy.get('[data-cy=address]', {timeout: 10000}).then(() => {
        cy.get('select').select(newAddress);
        cy.get('button').click();
        cy.get('button').click();
        cy.get('button').click();
        cy.get('button').click();
        cy.get('button').contains('Continue').click();
        cy.get('button').click();
        cy.get('button').click();
        cy.get('[data-cy=availability-slot-0-0]').click();
        cy.get('button').click();
        cy.contains('2 Downing Street, London, SW1A 2AA')
      });
    });
    it('allows you to change appointment contact number', () => {
      let newNumber = '02087748222';
      cy.contains(newNumber).should('not.exist');
      cy.contains('1 Downing Street, London, SW1A 2AA');
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
      cy.get('[data-cy=availability-slot-0-0]').click();
      cy.get('button').click();
      cy.contains(newNumber);
    });
  });
  context('Repair Details', () => {
    it('allows you to navigate to change the repair location page ', () => {
      cy.get('a[href*="repair-location"]').contains('Change').click();
      cy.location('href').should('eq', 'http://localhost:3000/report-repair/repair-location');
    });

    it('allows you to navigate to change what is the problem page', () => {
      cy.get('a[href*="repair-kitchen-problems"]').contains('Change').click();
      cy.location('href').should('eq', 'http://localhost:3000/report-repair/repair-kitchen-problems');
    });

    it('allows you to change the description text', () => {
      let newText = 'loremmmm ipsummm'
      cy.contains(newText).should('not.exist')
      cy.get('a[href*="repair-description"]').contains('Change').click();
      cy.location('href').should('eq', 'http://localhost:3000/report-repair/repair-description');
      cy.get('textarea').clear();
      cy.get('textarea').type(newText);
      cy.get('button').contains('Continue').click();
      cy.get('button').click();
      cy.get('button').click();
      cy.get('[data-cy=repair-availability]', {timeout: 10000}).then(() => {
        cy.get('[data-cy=availability-slot-0-0]').click();
        cy.get('button').click();
      });
      cy.get('button').click();
      cy.contains(newText);
    });
  });
  context('Appointment Details', () => {
    it('allows you to change the date', () => {
      cy.contains(timeSlot);
      cy.get('a[href*="repair-availability"]').contains('Change').click()
      cy.location('href').should('eq', 'http://localhost:3000/report-repair/repair-availability');
      cy.get('[data-cy=repair-availability]', {timeout: 10000}).then(() => {
        cy.get('[data-cy=availability-slot-1-0]').invoke('val').then(value =>{
          cy.get('[data-cy=availability-slot-1-0]').click();
          cy.get('button').click();
          cy.contains(value);
          cy.get('button').click();
        })
      });

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
      cy.get('[data-cy=repair-availability]', {timeout: 10000}).then(() => {
        cy.get('[data-cy=availability-slot-0-0]').click();
        cy.get('button').click();
      });
      cy.get('button').click();
      cy.contains(newEmail);
    });
  });
});
