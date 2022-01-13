// import SearchPropertiesGateway from './SearchPropertiesGateway';
// import AvailableAppointmentsGateway from './AvailableAppointmentsGateway';
const axios = require('axios');

const helpers = require('./helpers')(axios);

const searchPropertiesGateway = require('./SearchPropertiesGateway')(helpers.makeGetRequest);

module.exports = {
  searchPropertiesGateway,
  // AvailableAppointmentsGateway
};
