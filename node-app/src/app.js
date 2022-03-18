const express = require("express");
const cors = require("cors");
const {connect} = require('./lib/mongo.config')
require('dotenv').config()
const {GreenIT} = require('./model/green_it.model')
const ObjectID = require('mongoose').Types.ObjectId;

const app = express();
const PORT = 8800;

connect()


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/:id', (req, res) => {

  if (!ObjectID.isValid(req.params.id)) {
      return res.status(400).send('L\'object ID is not valid  : ' + req.params.id)
  }

  //Check if the current object id exists
  const green_it__id_exists = GreenIT.exists({_id: req.params.id});
  if (!green_it__id_exists) {
      return res.status(404).send('object ID not found')
  }
  else{
    GreenIT.findById({_id: req.params.id})
          .then(data => res.status(200).json(data))
          .catch(error => res.status(500).json({error}));
  }
});

app.listen(PORT, () => {
    console.log("Livraison Server is running on port " + PORT);
});