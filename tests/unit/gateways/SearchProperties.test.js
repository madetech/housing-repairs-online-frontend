const {SearchPropertiesGateway} = require('../../../api/gateways/');

describe('SearchProperties', () => {
  let mockedFetch;
  let status = 200;
  const api_url = 'https://repairs.api'
  const api_key = 'magic key'
  const postcode = 'M3 0W'

  beforeEach(() => {
    process.env.NEXT_PUBLIC_REPAIRS_API = api_url
    process.env.NEXT_PUBLIC_REPAIRS_API_KEY = api_key

    mockedFetch = jest.fn(() => { return {
      status: status,
      json: () => {}
    }});

    global.fetch = mockedFetch;

  });

  test('api gets called appropriately', async () => {
    await SearchPropertiesGateway(postcode);

    expect(mockedFetch).toHaveBeenCalledWith(
      `${api_url}/addresses?postcode=${postcode}`,
      {'headers': {'X-API-Key': api_key}}
    )
  });

  describe('when api is down', () =>{
    test('an error gets raised', async () => {
      status = 400;

      await SearchPropertiesGateway(postcode).then((res)=>{
        expect(res).toEqual(Error('Error searching'));
      });
    })
  });
});
