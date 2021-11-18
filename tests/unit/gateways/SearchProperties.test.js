const {SearchPropertiesGateway} = require('../../../api/gateways');
jest.mock('node-fetch');

import fetch, {Response} from 'node-fetch';

describe('SearchProperties', () => {
  let mockedFetch;
  let status = 200;
  const api_url = 'https://repairs.api'
  const api_key = 'magic key'
  const postcode = 'M3 0W'

  beforeEach(() => {
    process.env.REPAIRS_API = api_url
    process.env.REPAIRS_API_KEY = api_key

    mockedFetch = {
      status: status,
      json: () => {}
    };

    fetch.mockReturnValue(Promise.resolve(mockedFetch));
  });

  test('api gets called appropriately', async () => {
    await SearchPropertiesGateway(postcode);

    expect(fetch).toHaveBeenCalledWith(
      `${api_url}/addresses?postcode=${postcode}`,
      {'headers': {'X-API-Key': api_key}}
    )
  });

  describe('when api is down', () =>{
    beforeEach(()=>{
      status = 400;
      mockedFetch = {
        status: status,
        json: () => {}
      };
      fetch.mockReturnValue(Promise.resolve(mockedFetch));
    })
    test('an error gets raised', async () => {
      await SearchPropertiesGateway(postcode).then((res)=>{
        expect(res).toEqual(Error('Error searching'));
      });
    })
  });
});
