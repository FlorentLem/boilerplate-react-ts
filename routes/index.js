const router = require('express').Router();

// Import routes from api folder
const user = require('./api/users.routes');

// Routes
router.use('/users', user);

module.exports = router;
