require('dotenv').config()
const fetch = require('node-fetch');

module.exports = async function(postcode) {
  const response = await fetch(
    `${process.env.REPAIRS_API}/addresses?postcode=${postcode}`,
    {
      headers: {
        'X-API-Key': process.env.REPAIRS_API_KEY
      }
    }
  );
  if (response.status >= 400) {
    return new Error('Error searching');
  }
  return response.json();
}
