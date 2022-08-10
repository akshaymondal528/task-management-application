// Global imports
const jwt = require("jsonwebtoken");

// Local imports
const { knex } = require('../database/db');
const { CONST_CREDENTIALS } = require("../config/env");
const { errorResponse, errorResponseUnauth } = require("../helpers/response");
const { ERROR } = require("../helpers/constant");

/**
 * @function checkToken
 * @description function to check token for user
 * @param (req res next)
 * @author Akshay Mondal
 */
exports.checkToken = async (req, res, next) => {
    try {
        const token = req.headers.authorization.split("Bearer ")[1];
        let userData = await knex('users').select('*').where({ is_active: true, auth_key: token });
        if (userData.length === 0) return errorResponseUnauth(res, ERROR.UNAUTH.success, ERROR.UNAUTH.statuscode, ERROR.UNAUTH.message);
        jwt.verify(token, CONST_CREDENTIALS.AUTH_SECRET, async (err, encoded) => {
            if (err) return errorResponseUnauth(res, ERROR.UNAUTH.success, ERROR.UNAUTH.statuscode, ERROR.UNAUTH.message);
            req.user = {
                uid: encoded.uid,
                email: encoded.username,
                isActive: encoded.isActive,
            };
            next();
        });
    } catch (error) {
        errorResponseUnauth(res, ERROR.UNAUTH.success, ERROR.UNAUTH.statuscode, ERROR.UNAUTH.message);
    }
};