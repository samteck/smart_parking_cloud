const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const route = require('./routes/status.route')

// Set up mongoose connection
const mongoose = require('mongoose');
//let dev_db_url = 'mongodb://someuser:abcd1234@ds123619.mlab.com:23619/productstutorial';
let dev_db_url = 'mongodb://localhost:27017/test';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/', route);
let port = 3000;
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
