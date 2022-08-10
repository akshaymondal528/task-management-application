// Local Imports
const { knex } = require('../database/db');
const { generateid } = require('../utils/generateid');
const { ERROR, SUCCESS } = require('../helpers/constant');
const { CONST_CREDENTIALS } = require('../config/env');

/**
 * @function addTask
 * @description function to add task
 * @param (req)
 * @author Akshay Mondal
 */
exports.addTask = async (req) => {
    try {
        let reqData = req.body;
    } catch (error) {
        ERROR.INTERNAL_SERVER_ERROR.error = error.toString();
        return ERROR.INTERNAL_SERVER_ERROR;
    }
}

/**
 * @function getTask
 * @description function to get task
 * @param (req)
 * @author Akshay Mondal
 */
exports.getTask = async (req) => {
    try {

    } catch (error) {
        ERROR.INTERNAL_SERVER_ERROR.error = error.toString();
        return ERROR.INTERNAL_SERVER_ERROR;
    }
}

/**
 * @function updateTask
 * @description function to update task
 * @param (req)
 * @author Akshay Mondal
 */
exports.updateTask = async (req) => {
    try {

    } catch (error) {
        ERROR.INTERNAL_SERVER_ERROR.error = error.toString();
        return ERROR.INTERNAL_SERVER_ERROR;
    }
}