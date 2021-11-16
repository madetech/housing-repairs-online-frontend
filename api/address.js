import SearchPropertiesGateway from '../gateways/SearchPropertiesGateway';

async (context, req) => {
  // build some Azure function compatibility layer.
  const util = {
    send: data => {
      Object.assign(context.res, {
        body: data
      });
      return util;
    },
    status: code => {
      Object.assign(context.res, {
        status: code
      });
      return util;
    }
  };
  // Inlines the default function here.
  const NextFunction = async function (req, res) {
    const result = await SearchPropertiesGateway(req.query.postcode);

    return res.status(200).json(result)
  };
  // CALLS the function here.
  await NextFunction(req, util);
  context.done();
});
