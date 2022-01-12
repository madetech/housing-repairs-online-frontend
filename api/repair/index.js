const SaveRepairGateway = require('../gateways/SaveRepairGateway');

module.exports = async function (context, req) {

  context.log('JavaScript HTTP trigger function processed a request.');
  // const results = await SaveRepairGateway(req.body);

  context.res = {
    body: 'ABCD1234'
  };
};
