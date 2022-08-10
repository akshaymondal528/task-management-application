// Local Imports
const { ERROR } = require('../helpers/constant');
const authService = require('../services/auth');
const { successResponse, errorResponse, errorResponseCatch } = require('../helpers/response');

/**
 * @function registerUser
 * @description function to register user
 * @method POST
 * @param (req res)
 * @author Akshay Mondal
 */
exports.registerUser = async (req, res) => {
    try {
        const registerUser = await authService.registerUser(req);
        if (!registerUser.error) {
            if (registerUser.success === true) {
                successResponse(res, registerUser.success, registerUser.statuscode, registerUser.message, registerUser.data);
            } else {
                errorResponse(res, registerUser.success, registerUser.statuscode, registerUser.message, registerUser.data);
            }
        } else {
            errorResponseCatch(res, registerUser.success, registerUser.statuscode, registerUser.message, registerUser.error);
        }
    } catch (error) {
        errorResponseCatch(res, ERROR.INTERNAL_SERVER_ERROR.success, ERROR.INTERNAL_SERVER_ERROR.statuscode, ERROR.INTERNAL_SERVER_ERROR.message, error.toString());
    }
};

/**
 * @function loginUser
 * @description function to login user
 * @method POST
 * @param (req res)
 * @author Akshay Mondal
 */
exports.loginUser = async (req, res) => {
    try {
        const loginUser = await authService.loginUser(req);
        if (!loginUser.error) {
            if (loginUser.success === true) {
                successResponse(res, loginUser.success, loginUser.statuscode, loginUser.message, loginUser.data);
            } else {
                errorResponse(res, loginUser.success, loginUser.statuscode, loginUser.message, loginUser.data);
            }
        } else {
            errorResponseCatch(res, loginUser.success, loginUser.statuscode, loginUser.message, loginUser.error);
        }
    } catch (error) {
        errorResponseCatch(res, ERROR.INTERNAL_SERVER_ERROR.success, ERROR.INTERNAL_SERVER_ERROR.statuscode, ERROR.INTERNAL_SERVER_ERROR.message, error.toString());
    }
};

/**
 * @function logoutUser
 * @description function to logout user
 * @method POST
 * @param (req res)
 * @author Akshay Mondal
 */
exports.logoutUser = async (req, res) => {
    try {
        const logoutUser = await authService.logoutUser(req);
        if (!logoutUser.error) {
            if (logoutUser.success === true) {
                successResponse(res, logoutUser.success, logoutUser.statuscode, logoutUser.message, logoutUser.data);
            } else {
                errorResponse(res, logoutUser.success, logoutUser.statuscode, logoutUser.message, logoutUser.data);
            }
        } else {
            errorResponseCatch(res, logoutUser.success, logoutUser.statuscode, logoutUser.message, logoutUser.error);
        }
    } catch (error) {
        errorResponseCatch(res, ERROR.INTERNAL_SERVER_ERROR.success, ERROR.INTERNAL_SERVER_ERROR.statuscode, ERROR.INTERNAL_SERVER_ERROR.message, error.toString());
    }
};