const express = require('express');
const router = express.Router();

const optionsController = require('../../../controller/api/v1/option_controller');

router.delete('/:id/delete', optionsController.delete); // To delete option 
router.get('/:id/add_vote', optionsController.addVote); // To add vote to the option



module.exports = router;