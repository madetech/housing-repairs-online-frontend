describe('SearchProperties', () => {
  let mockedGet;
  const api_url = 'https://repairs.api'
  const api_identifier = 'magic key'
  const postcode = 'M3 0W'
  let mockedPost;
  let mockedAxiosInstance;
  const dummyData = {postcode: postcode}
  const jwt = '~~~jwt~~~'
  let SearchPropertiesGateway;
  let makeGetRequest;

  beforeAll(() => {
    makeGetRequest =  jest.fn().mockImplementation(({url, params}) => Promise.resolve({data: dummyData}));
    SearchPropertiesGateway = require('../../../api/gateways/SearchPropertiesGateway')(makeGetRequest);
  });

  test('api gets called appropriately', async () => {
    const result = await SearchPropertiesGateway(postcode);

    expect(makeGetRequest).toHaveBeenCalledWith(
      {url: `/addresses?postcode=${postcode}`}
    )

    expect(result).toEqual(dummyData)
  });

  describe('when api is down', () =>{
    beforeEach(()=>{
      makeGetRequest =  jest.fn().mockRejectedValue(new Error())
    })
    test('an error gets raised', async () => {
      const result = await SearchPropertiesGateway(postcode)
      expect(result).toEqual(1);
      //   .then((res)=>{
      //   expect(res).toEqual(Error('Error searching'));
      // });
    })
  });
});
