const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');
const Data = require('./data');

const API_PORT = 8080;
const app = express();
app.use(cors());
const router = express.Router();

const dbRoute =
  'mongodb+srv://user:useruser@tamkeen-besmart-assignment-c8sua.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(dbRoute, { useNewUrlParser: true });
let db = mongoose.connection;
db.once('open', () => console.log('Connected to DB'));
db.on('error', console.error.bind(console, 'DB connection error:'));

app.use(express.urlencoded({extended:false}))
app.use(express.json())

const server = app.listen(8080, () => {
        const host = server.address().address,
              port = server.address().port;
              console.log("App listening at http://%s:%s: ", host, port);
        });
        
