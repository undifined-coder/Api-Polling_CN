// including required packages
const express = require('express');
const cookieParser = require('cookie-parser');
const port = 3000;
const db = require('./config/mongoose');

const app = express(); 

//middlewares for  encoding decoding 
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());

// routes setup
app.use('/', require('./routes/index'));

// server is listening at given port
app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return;
    }

    console.log(`server is up and running at port ${port}`);

})