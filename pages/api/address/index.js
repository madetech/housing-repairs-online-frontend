const { searchPropertiesGateway } = require('../../../gateways');
const { logger } = require('../../../helpers/log');

// supports GET method
export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      let results = await searchPropertiesGateway(req.query.postcode);
      res.status(200).json(results);
    } catch (e) {
      logger.captureException(e);
      let results = new Error('Error searching');
      res.status(500).json(results);
    }
  } else {
    res.status(405);
  }
}
