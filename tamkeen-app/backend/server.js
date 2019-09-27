const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors');
const bodyParser = require('body-parser');
const Data = require('./data');
const validators = require('./validators');

const API_PORT = 8080;
const app = express();
app.use(cors());
const router = express.Router();

const dbRoute =
  'mongodb+srv://user:useruser@tamkeen-besmart-assignment-c8sua.mongodb.net/tamkeen?retryWrites=true&w=majority';
mongoose.connect(dbRoute, { useNewUrlParser: true });
let dbCon = mongoose.connection;
dbCon.once('open', () => console.log('Connected to DB'));
dbCon.on('error', console.error.bind(console, 'DB connection error:'));

app.use(express.urlencoded({extended:false}));
app.use(express.json());

const server = app.listen(8080, () => {
        const host = server.address().address,
              port = server.address().port;
              console.log("App listening at http://%s:%s: ", host, port);
        });


/************************** ENDPOINTS ******************************/
app.get('/get-country-list', (req, res) => {
  countries = [];
  dbCon.db.collection("countries", function(err, collection){
      collection.find({}).toArray(function(err, data){
        data.forEach(function (item, index) {
          countries.push(item["country"]);
        });
        res.type("json").send(JSON.stringify(countries));
      });
  });
});

app.get('/get-cities', (req, res) => {
  cities = [];
  dbCon.db.collection("countries", function(err, collection){
      collection.find({"country": req.query.country}).toArray(function(err, data){
        res.type("json").send(JSON.stringify(data[0]['cities']));
      });
  });
});

app.get('/submission-data', (req, res) => {
  // use validators module to validate data
  obj = {
    "name": req.query.name,
    "email": req.query.email,
    "age": req.query.age,
    "country": req.query.country,
    "city": req.query.city
  }
  dbCon.collection("users").insertOne(obj, function(err, res) {
    if (err) {
      console.log('asdas');
      throw err;
    }
    console.log("1 document inserted");
  });
  res.type("json").send(JSON.stringify("Success"));
});
