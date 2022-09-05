const { logger } = require('../../helpers/log');
const { availableAppointmentsGateway } = require('../../gateways');

// Supported methods = GET
export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      let results = await availableAppointmentsGateway({
        repairLocation: req.query.repairLocation,
        repairProblem: req.query.repairProblem,
        repairIssue: req.query.repairIssue,
        locationId: req.query.locationId,
        fromDate: req.query.fromDate,
      });
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
