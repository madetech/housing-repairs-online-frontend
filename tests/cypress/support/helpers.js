export function intercept_address_search(numberOfResults = 1, postcode='SW1A 2AA') {
  const api_url = 'http://localhost:3000/api';
  const response = [];

  for (let i = 0; i < numberOfResults; i++) {
    response.push({
      addressLine1: `${i+1} Downing Street`,
      addressLine2: 'London',
      postCode: postcode
    });
  }

  cy.intercept('GET', `${api_url}/address?*`, {
    statusCode: 201,
    body: response
  });
}
