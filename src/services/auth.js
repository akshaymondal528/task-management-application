// Global Imports
const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken');

// Local Imports
const { knex } = require('../database/db');
const { generateid } = require('../utils/generateid');
const { createToken } = require('../utils/createToken')
const { ERROR, SUCCESS } = require('../helpers/constant');
const { CONST_CREDENTIALS } = require('../config/env');

/**
 * @function registerUser
 * @description function to register user
 * @param (req)
 * @author Akshay Mondal
 */
exports.registerUser = async (req) => {
    try {
        let reqData = req.body;
        let checkEmail = await knex('users').select('*').where({ is_active: true, email: reqData.email });
        if (checkEmail && Array.isArray(checkEmail) && checkEmail.length > 0) return ERROR.EMAIL_EXIST;
        let checkMobile = await knex('users').select('*').where({ is_active: true, mobile: reqData.mobile });
        if (checkMobile && Array.isArray(checkMobile) && checkMobile.length > 0) return ERROR.MOBILE_EXIST;
        if (reqData.password !== reqData.confirmPassword) return ERROR.CONFIRM_PASSWORD_NOT_MATCH;
        delete reqData.confirmPassword;
        let uid = generateid();
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(reqData.password, salt);
        reqData.uid = uid;
        reqData.password = hashPassword;
        let registerUser = await knex('users').insert(reqData).returning('uid');
        if (registerUser.length === 0) return ERROR.USER.USER_NOT_REGISTER;
        SUCCESS.USER.REGISTRATION.data = registerUser[0];
        return SUCCESS.USER.REGISTRATION;
    } catch (error) {
        ERROR.INTERNAL_SERVER_ERROR.error = error.toString();
        return ERROR.INTERNAL_SERVER_ERROR;
    }
}

/**
 * @function loginUser
 * @description function to login user
 * @param (req)
 * @author Akshay Mondal
 */
exports.loginUser = async (req) => {
    try {
        let reqData = req.body;
        let checkEmail = await knex('users').select('*').where({ is_active: true, email: reqData.email });
        if (checkEmail.length === 0) return ERROR.INVALID_CREDENTIALS;
        let { password, auth_key, ...rest } = checkEmail[0];
        if (password && await bcrypt.compare(reqData.password, password)) {
            const token = await createToken(rest);
            await knex('users').update({ auth_key: token }).where({ is_active: true, email: reqData.email });
            rest.token = token;
            SUCCESS.USER.LOGIN.data = rest;
            return SUCCESS.USER.LOGIN;
        }
        return ERROR.INVALID_CREDENTIALS;
    } catch (error) {
        ERROR.INTERNAL_SERVER_ERROR.error = error.toString();
        return ERROR.INTERNAL_SERVER_ERROR;
    }
}

/**
 * @function logoutUser
 * @description function to logout user
 * @param (req)
 * @author Akshay Mondal
 */
exports.logoutUser = async (req) => {
    try {
        await knex('users').update({ auth_key: null }).where({ is_active: true, uid: req.user.uid });
        return SUCCESS.USER.LOGOUT;
    } catch (error) {
        ERROR.INTERNAL_SERVER_ERROR.error = error.toString();
        return ERROR.INTERNAL_SERVER_ERROR;
    }
}