export default async postcode => {
  console.log(process.env)
  const response = await fetch(
    `${process.env.REACT_APP_REPAIRS_API}/address-search?postcode=${postcode}`,
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
