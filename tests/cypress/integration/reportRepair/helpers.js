export function intercept_address_search(postcode) {
  const api_url = 'http://repais.api';

  cy.intercept('GET', `${api_url}/addresses?*`, {
    statusCode: 201,
    body: [{
      addressLine1: '123 Cute street',
      addressLine2: 'New Meow City',
      postCode: postcode
    }],
  });
}
