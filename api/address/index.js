const SearchPropertiesGateway = require('../gateways/SearchPropertiesGateway');

module.exports = async function (context, req) {

  context.log('JavaScript HTTP trigger function processed a request.');
  const results = await SearchPropertiesGateway(req.query.postcode);

  context.res = {
    status: 200,
    body: results
  };
};
