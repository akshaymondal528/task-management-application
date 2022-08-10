// Global Imports
const router = require('express').Router();

// Local Imports
const auth = require('../controllers/auth');
const { checkToken } = require('../middlewares/checkToken')


router.post('/register-user', auth.registerUser);
router.post('/login-user', auth.loginUser);
router.get('/logout-user', checkToken, auth.logoutUser);

module.exports = router;