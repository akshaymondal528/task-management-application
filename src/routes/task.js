// Global Imports
const router = require('express').Router();

// Local Imports
const task = require('../controllers/task');

router.post('/add-task', task.addTask);
router.get('/get-task/:id?', task.getTask);
router.put('/update-task/:id?', task.updateTask);

module.exports = router;