// Local Imports
const { CONST_CREDENTIALS } = require('../config/env');
const { checkToken } = require('../middlewares/checkToken')
const auth = require('./auth');
const project = require('./project');
const task = require('./task');

const apiRoutePrefix = CONST_CREDENTIALS.API_ROUTE_PREFIX;

exports.apiRoute = (app) => {
    app.use(apiRoutePrefix, auth);
    app.use(apiRoutePrefix, checkToken, project);
    app.use(apiRoutePrefix, checkToken, task);
};