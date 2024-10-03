const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const cors =require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

var apiData =  require('./controller/Usercontroller');
var LoginData =  require('./controller/Logincontroller');
var AdminData =  require('./controller/Admincontroller');

mongoose.connect('mongodb://127.0.0.1:27017/cycleapp', { //dbname
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(cors());
app.use(express.json());
app.use('/',apiData);
app.use('/',LoginData);
app.use('/',AdminData);



// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});