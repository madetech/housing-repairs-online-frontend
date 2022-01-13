const {saveRepairGateway} = require('../gateways');

module.exports = async function (context, req) {

  context.log('JavaScript HTTP trigger function processed a request.');
  const results = await saveRepairGateway(req.body);

  context.res = {
    body: results
  };
};
