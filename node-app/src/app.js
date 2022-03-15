const express = require("express");
const cors = require("cors");
//require("./lib/mongo");

const app = express();
const PORT = 6000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.get('/', function (req, res) {
    res.send('Hello World!');
  });

app.listen(PORT, () => {
    console.log("Livraison Server is running on port " + PORT);
});