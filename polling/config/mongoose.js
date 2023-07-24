const mongoose=require('mongoose');

mongoose.connect('mongodb://0.0.0.0:27017/polling');

const db=mongoose.connection;

db.on('error',console.error.bind(console,'error on connection to database'));

db.once('open',function()
{
    console.log('Succesfully connected to database');
})

