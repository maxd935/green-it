const express = require("express");
const cors = require("cors");
const {connect} = require('./lib/mongo.config')
require('dotenv').config()
const {GreenIT} = require('./model/green_it.model')

const app = express();
const PORT = 5500;

connect()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.post('/',(req,res)=>{
  const green_it = new GreenIT({
    ...req.body
  });

  green_it.save()
  .then(() => res.status(201).json('success'))
  .catch(error => res.status(500).json({error}))
})

app.get('/', async (req, res)=> {
  GreenIT.find()
        .sort({title : 1})
        .then(data => res.status(200).json(data))
        .catch(error => res.status(500).json({ error}))
});

app.listen(PORT, () => {
    console.log("Livraison Server is running on port " + PORT);
});