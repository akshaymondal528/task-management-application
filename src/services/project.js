// Local Imports
const { knex } = require('../database/db');
const { generateid } = require('../utils/generateid');
const { ERROR, SUCCESS } = require('../helpers/constant');
const { CONST_CREDENTIALS } = require('../config/env');

/**
 * @function addProject
 * @description function to add project
 * @param (req)
 * @author Akshay Mondal
 */
exports.addProject = async (req) => {
    try {
        let reqData = req.body;
        let uid = generateid();
        let userid = req.user.uid;
        reqData.uid = uid;
        reqData.user_id = userid;
        let addProject = await knex('projects').insert(reqData).returning('*');
        if (addProject.length === 0) return ERROR.PROJECT.PROJECT_NOT_ADD;
        SUCCESS.PROJECT.ADD_PROJECT.data = addProject[0];
        return SUCCESS.PROJECT.ADD_PROJECT;
    } catch (error) {
        ERROR.INTERNAL_SERVER_ERROR.error = error.toString();
        return ERROR.INTERNAL_SERVER_ERROR;
    }
}

/**
 * @function getProject
 * @description function to get project
 * @param (req)
 * @author Akshay Mondal
 */
exports.getProject = async (req) => {
    try {
        let id = req.params.id;
        let projectid = req.query.projectid;
        let whereObj = { user_id: req.user.uid };
        if (id && id !== '') whereObj.uid = id;
        if (projectid && projectid !== '') whereObj.uid = projectid;
        let getProject = await knex('projects').select('*').where(whereObj);
        if (getProject.length === 0) return ERROR.PROJECT.PROJECT_NOT_FOUND;
        for (let data of getProject) {
            let userData = await knex('users').select('first_name', 'last_name', 'email', 'mobile').where({ is_active: true, uid: data.user_id });
            let name = `${userData[0].first_name} ${userData[0].last_name}`;
            let email = userData[0].email;
            let mobile = userData[0].mobile;
            data.user = { name, email, mobile };
        }
        SUCCESS.PROJECT.GET_PROJECT.data = getProject;
        return SUCCESS.PROJECT.GET_PROJECT;
    } catch (error) {
        ERROR.INTERNAL_SERVER_ERROR.error = error.toString();
        return ERROR.INTERNAL_SERVER_ERROR;
    }
}

/**
 * @function updateProject
 * @description function to update project
 * @param (req)
 * @author Akshay Mondal
 */
exports.updateProject = async (req) => {
    try {
        let reqData = req.body;
        let id = req.params.id;
        let projectid = req.query.projectid;
        let whereObj = { user_id: req.user.uid };
        if (!id && !projectid) return ERROR.PROJECT.REQUIRED_PROJECT_ID;
        if (id && id !== '') whereObj.uid = id;
        if (projectid && projectid !== '') whereObj.uid = projectid;
        let updateProject = await knex('projects').update(reqData).where(whereObj);
        console.log(updateProject);
        if (updateProject !== 1) return ERROR.PROJECT.PROJECT_NOT_UPDATE;
        SUCCESS.PROJECT.UPDATE_PROJECT.data = { uid: whereObj.uid };
        return SUCCESS.PROJECT.UPDATE_PROJECT;
    } catch (error) {
        ERROR.INTERNAL_SERVER_ERROR.error = error.toString();
        return ERROR.INTERNAL_SERVER_ERROR;
    }
}