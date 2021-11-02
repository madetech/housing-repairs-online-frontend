export default async postcode => {
  const response = await fetch(
    `${process.env.REACT_APP_REPAIRS_API}/addresses?postcode=${postcode}`,
    {
      headers: {
        'X-API-Key': process.env.REACT_APP_REPAIRS_API_KEY
      }
    }
  );
  if (response.status >= 400) {
    return new Error('Error searching');
  }
  return response.json();
};