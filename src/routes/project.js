// Global Imports
const router = require('express').Router();

// Local Imports
const project = require('../controllers/project');

router.post('/add-project', project.addProject);
router.get('/get-project/:id?', project.getProject);
router.put('/update-project/:id?', project.updateProject);

module.exports = router;