// const {SearchPropertiesGateway} = require('../gateways');
module.exports = async function (context, req) {
  context.log('JavaScript HTTP trigger function processed a request.');
  // const result = await SearchPropertiesGateway(req.query.postcode);

  context.res = {
    status: 200,
    body: [{
      addressLine1: '1 Downing Street',
      addressLine2: 'London',
      postCode: req.query.postcode
    }]
  };
};
