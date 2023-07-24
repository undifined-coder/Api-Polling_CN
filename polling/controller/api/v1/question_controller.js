
const Question = require('../../../model/question');
const Option = require('../../../model/options');


//create a question 
 
module.exports.create = async function (req, res) {

   try {

        const { title } = req.body;
        const existingQuestion = await Question.findOne({ 'title': title });

       if (existingQuestion) {
            return res.status(401).json({
                message: 'Question is already exist',
                status: 'failure',
                data: [{ id: existingQuestion._id }]
            });
            //console.log("problem")
        }

        const question = await Question.create({ 'title': title });

        return res.status(200).json({
            message: 'Question create',
            data: [question]
        });

    } 
    catch (error) {
        console.log('ERROR CREATING QUESTION: ', error);
        return res.status(500).json({
            message: 'Internal server error',
            status: 'failure',
            data: []
        });
    }

   


}

// delete a question
 
module.exports.delete = async function (req, res) {



    try {

        const questionId = req.params.id;

        if (!questionId) {
            return res.status(404).json({
                message: 'Empty Question id',
                status: 'failure',
                data: []
            });
        };

        const question = await Question.findById(questionId);

        if (!question) {
            return res.status(404).json({
                message: 'Invalid Question id',
                status: 'failure',
                data: []
            });
        };

        await Option.deleteMany({ '_id': { $in: question.options } });
        await Question.findByIdAndDelete(questionId);


        return res.status(200).json({
            message: 'Quesion deleted',
            data: []
        });


    } catch (error) {
        console.log("ERROR DELETE QUESTION ", error);
        return res.status(500).json({
            message: 'Internal server error',
            status: 'failure',
            data: []
        });
    }


}


//* get details of question
 
module.exports.getQuestion = async function (req, res) {
    try {

        const questionId = req.params.id;

        if (!questionId) {
            return res.status(404).json({
                message: 'Empty Question id',
                status: 'failure',
                data: []
            });
        };

        const question = await Question.findById(questionId);

        if (!question) {
            return res.status(404).json({
                message: 'Invalid Question id',
                status: 'failure',
                data: []
            });
        };

        await question.populate(
            { path: 'options',
             select: '-question_id' });

        return res.status(200).json({
            data: [question]
        })


    } catch (error) {
        console.log("ERROR GET QUESTION ", error);
        return res.status(500).json({
            message: 'Internal server error',
            status: 'failure',
            data: []
        });
    }
} 