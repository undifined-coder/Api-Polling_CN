const express = require('express');
const router = express.Router();


const questionsController = require('../../../controller/api/v1/question_controller');
const optionsController = require('../../../controller/api/v1/option_controller');

router.post('/create', questionsController.create); // To create question
router.delete('/:id/delete', questionsController.delete); // To delete question
router.get('/:id', questionsController.getQuestion); // To get question object | details

router.post('/:id/options/create', optionsController.create); // To create option

module.exports = router;
