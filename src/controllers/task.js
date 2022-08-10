// Local Imports
const { ERROR } = require('../helpers/constant');
const taskService = require('../services/task');
const { successResponse, errorResponse, errorResponseCatch } = require('../helpers/response');

/**
 * @function addTask
 * @description function to add task
 * @method POST
 * @param (req res)
 * @author Akshay Mondal
 */
exports.addTask = async (req, res) => {
    try {
        const addTask = await taskService.addTask(req);
        if (!addTask.error) {
            if (addTask.success === true) {
                successResponse(res, addTask.success, addTask.statuscode, addTask.message, addTask.data);
            } else {
                errorResponse(res, addTask.success, addTask.statuscode, addTask.message, addTask.data);
            }
        } else {
            errorResponseCatch(res, addTask.success, addTask.statuscode, addTask.message, addTask.error);
        }
    } catch (error) {
        errorResponseCatch(res, ERROR.INTERNAL_SERVER_ERROR.success, ERROR.INTERNAL_SERVER_ERROR.statuscode, ERROR.INTERNAL_SERVER_ERROR.message, error.toString());
    }
};

/**
 * @function getTask
 * @description function to get task
 * @method GET
 * @param (req res)
 * @author Akshay Mondal
 */
exports.getTask = async (req, res) => {
    try {
        const getTask = await taskService.getTask(req);
        if (!getTask.error) {
            if (getTask.success === true) {
                successResponse(res, getTask.success, getTask.statuscode, getTask.message, getTask.data);
            } else {
                errorResponse(res, getTask.success, getTask.statuscode, getTask.message, getTask.data);
            }
        } else {
            errorResponseCatch(res, getTask.success, getTask.statuscode, getTask.message, getTask.error);
        }
    } catch (error) {
        errorResponseCatch(res, ERROR.INTERNAL_SERVER_ERROR.success, ERROR.INTERNAL_SERVER_ERROR.statuscode, ERROR.INTERNAL_SERVER_ERROR.message, error.toString());
    }
};

/**
 * @function updateTask
 * @description function to update task
 * @method PUT
 * @param (req res)
 * @author Akshay Mondal
 */
exports.updateTask = async (req, res) => {
    try {
        const updateTask = await taskService.updateTask(req);
        if (!updateTask.error) {
            if (updateTask.success === true) {
                successResponse(res, updateTask.success, updateTask.statuscode, updateTask.message, updateTask.data);
            } else {
                errorResponse(res, updateTask.success, updateTask.statuscode, updateTask.message, updateTask.data);
            }
        } else {
            errorResponseCatch(res, updateTask.success, updateTask.statuscode, updateTask.message, updateTask.error);
        }
    } catch (error) {
        errorResponseCatch(res, ERROR.INTERNAL_SERVER_ERROR.success, ERROR.INTERNAL_SERVER_ERROR.statuscode, ERROR.INTERNAL_SERVER_ERROR.message, error.toString());
    }
};