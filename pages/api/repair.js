const { logger } = require('../../helpers/log');
const { saveRepairGateway } = require('../../gateways');

// Supported method = POST
export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      let result = await saveRepairGateway(req.body);
      res.status(200).json(result);
    } catch (e) {
      logger.captureException(e);

      let result = new Error('Error saving');
      res.status(500).json(result);
    }
  } else {
    res.status(405);
  }
}
