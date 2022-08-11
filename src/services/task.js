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
        let uid = generateid();
        reqData.uid = uid;
        let addTask = await knex('tasks').insert(reqData).returning('*');
        if (addTask.length === 0) return ERROR.TASK.TASK_NOT_ADD;
        SUCCESS.TASK.ADD_TASK.data = addTask[0];
        return SUCCESS.TASK.ADD_TASK;
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
        let id = req.params.id;
        let { taskid, projectid } = req.query;
        let whereObj = {};
        if (id && id !== '') whereObj.uid = id;
        if (taskid && taskid !== '') whereObj.uid = taskid;
        if (projectid && projectid !== '') whereObj.project_id = projectid;
        let getTask = await knex('tasks').select('*').where(whereObj);
        if (getTask.length === 0) return ERROR.PROJECT.PROJECT_NOT_FOUND;
        for (let data of getTask) {
            let projectData = await knex('projects').select('*').where({ is_active: true, uid: data.project_id });
            let userData = await knex('users').select('first_name', 'last_name', 'email', 'mobile').where({ is_active: true, uid: projectData[0].user_id });
            let project = projectData[0].project;
            let is_complete = projectData[0].is_complete;
            let name = `${userData[0].first_name} ${userData[0].last_name}`;
            let email = userData[0].email;
            let mobile = userData[0].mobile;
            let user = { name, email, mobile };
            data.project = { project, is_complete, user }
        }
        SUCCESS.TASK.GET_TASK.data = getTask;
        return SUCCESS.TASK.GET_TASK;
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
        let reqData = req.body;
        let id = req.params.id;
        let taskid = req.query.taskid;
        let whereObj = {};
        if (!id && !taskid) return ERROR.TASK.REQUIRED_TASK_ID;
        if (id && id !== '') whereObj.uid = id;
        if (taskid && taskid !== '') whereObj.uid = taskid;
        let updateTask = await knex('tasks').update(reqData).where(whereObj);
        if (updateTask !== 1) return ERROR.TASK.TASK_NOT_UPDATE;
        SUCCESS.TASK.UPDATE_TASK.data = { uid: whereObj.uid };
        return SUCCESS.TASK.UPDATE_TASK;
    } catch (error) {
        ERROR.INTERNAL_SERVER_ERROR.error = error.toString();
        return ERROR.INTERNAL_SERVER_ERROR;
    }
}