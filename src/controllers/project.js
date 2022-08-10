// Local Imports
const { ERROR } = require('../helpers/constant');
const projectService = require('../services/project');
const { successResponse, errorResponse, errorResponseCatch } = require('../helpers/response');

/**
 * @function addProject
 * @description function to add project
 * @method POST
 * @param (req res)
 * @author Akshay Mondal
 */
exports.addProject = async (req, res) => {
    try {
        const addProject = await projectService.addProject(req);
        if (!addProject.error) {
            if (addProject.success === true) {
                successResponse(res, addProject.success, addProject.statuscode, addProject.message, addProject.data);
            } else {
                errorResponse(res, addProject.success, addProject.statuscode, addProject.message, addProject.data);
            }
        } else {
            errorResponseCatch(res, addProject.success, addProject.statuscode, addProject.message, addProject.error);
        }
    } catch (error) {
        errorResponseCatch(res, ERROR.INTERNAL_SERVER_ERROR.success, ERROR.INTERNAL_SERVER_ERROR.statuscode, ERROR.INTERNAL_SERVER_ERROR.message, error.toString());
    }
};

/**
 * @function getProject
 * @description function to get project
 * @method GET
 * @param (req res)
 * @author Akshay Mondal
 */
exports.getProject = async (req, res) => {
    try {
        const getProject = await projectService.getProject(req);
        if (!getProject.error) {
            if (getProject.success === true) {
                successResponse(res, getProject.success, getProject.statuscode, getProject.message, getProject.data);
            } else {
                errorResponse(res, getProject.success, getProject.statuscode, getProject.message, getProject.data);
            }
        } else {
            errorResponseCatch(res, getProject.success, getProject.statuscode, getProject.message, getProject.error);
        }
    } catch (error) {
        errorResponseCatch(res, ERROR.INTERNAL_SERVER_ERROR.success, ERROR.INTERNAL_SERVER_ERROR.statuscode, ERROR.INTERNAL_SERVER_ERROR.message, error.toString());
    }
};

/**
 * @function updateProject
 * @description function to update project
 * @method PUT
 * @param (req res)
 * @author Akshay Mondal
 */
exports.updateProject = async (req, res) => {
    try {
        const updateProject = await projectService.updateProject(req);
        if (!updateProject.error) {
            if (updateProject.success === true) {
                successResponse(res, updateProject.success, updateProject.statuscode, updateProject.message, updateProject.data);
            } else {
                errorResponse(res, updateProject.success, updateProject.statuscode, updateProject.message, updateProject.data);
            }
        } else {
            errorResponseCatch(res, updateProject.success, updateProject.statuscode, updateProject.message, updateProject.error);
        }
    } catch (error) {
        errorResponseCatch(res, ERROR.INTERNAL_SERVER_ERROR.success, ERROR.INTERNAL_SERVER_ERROR.statuscode, ERROR.INTERNAL_SERVER_ERROR.message, error.toString());
    }
};