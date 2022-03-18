const express = require("express");
const cors = require("cors");
require('dotenv').config()
const response = require('./lib/getData');

const app = express();
const PORT = 8800;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/api/:code', (req, res) => {
  const code = req.params.code
  res.send(response.getData(code))
});

app.get('/', (req, res) => {
  res.send("hello world ")
});
app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});