const express = require('express');
const router = express.Router();

// questions routes
router.use('/question', require('./question'))


// options routes
router.use('/options', require('./option'));

module.exports = router;