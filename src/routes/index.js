// Local Imports
const { CONST_CREDENTIALS } = require('../config/env');
const auth = require('./auth');

const apiRoutePrefix = CONST_CREDENTIALS.API_ROUTE_PREFIX;

exports.apiRoute = (app) => {
    app.use(apiRoutePrefix, auth);
};