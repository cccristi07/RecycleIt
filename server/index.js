const express = require("express");
const app = express();
const mongodb = require("mongodb");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const morgan = require("morgan");

let db = null;

// app.use(morgan("combined"));
// app.use(bodyParser.json());
// app.use(cors());

app.get("/clients", function(req, res) {
  console.log("DB STUFF");
  db.collection("clients")
    .find()
    .toArray((err, result) => {
      if (err) return console.log(err);
      res.send(result);
    });
});

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});

console.log("haidapida matii mama");
//
// app.listen(3000, function() {
// console.log("Example app listening on port 3000");
// });
//
mongodb.MongoClient.connect(
  "mongodb://localhost:27017",
  { useNewUrlParser: true },
  (err, client) => {
    if (err) return console.log(err);
    console.log("Connected to database");
    db = client.db("recycleit_db");
  }
);
