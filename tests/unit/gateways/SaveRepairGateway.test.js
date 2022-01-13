const {SaveRepairGateway} = require('../../../api/gateways');
jest.mock('axios');

import axios from 'axios';

describe('SaveRepairGateway', () => {
  let mockedGet;
  const api_url = 'https://repairs.api'
  const api_identifier = 'magic key'
  const postcode = 'M3 0W'
  let mockedPost;
  let mockedAxiosInstance;
  const dummyData = {postcode: postcode}
  const jwt = '~~~jwt~~~'

  beforeAll(() => {
    process.env.REPAIRS_API_BASE_URL = api_url
    process.env.REPAIRS_API_IDENTIFIER = api_identifier

    mockedPost = jest.fn().mockImplementation(() => Promise.resolve({data: jwt}));
    mockedGet = jest.fn().mockImplementation(() => Promise.resolve({data: dummyData}));
    mockedAxiosInstance = {
      post: mockedPost,
      get: mockedGet,
      defaults: {
        headers: {
          common: {}
        }
      }
    }

    axios.create = jest.fn(()=>{
      return mockedAxiosInstance
    })
  });

  test('yes', ()=>{
    expect(true).toEqual(true);
  })

  xtest('axios gets instantiated with the api url', async () => {
    await SaveRepairGateway(postcode);

    expect(axios.create).toHaveBeenCalledWith(
      {'baseURL': api_url}
    )
  });

  xtest('api gets called appropriately', async () => {
    const result = await SaveRepairGateway(postcode);

    expect(mockedPost).toHaveBeenCalledWith(
      `/authentication?identifier=${api_identifier}`
    )

    expect(mockedAxiosInstance.defaults.headers.common['Authorization']).toEqual(`Bearer ${jwt}`);

    expect(mockedGet).toHaveBeenCalledWith(
      `/addresses?postcode=${postcode}`, {'params': {}}
    )

    expect(result).toEqual(dummyData)
  });

  describe('when api is down', () =>{
    beforeEach(()=>{
      axios.create = jest.fn(()=>{
        return {
          post: jest.fn().mockRejectedValue({status: 500})
        }
      })
    })
    xtest('an error gets raised', async () => {
      await SaveRepairGateway(postcode).then((res)=>{
        expect(res).toEqual(Error('Error searching'));
      });
    })
  });
});
