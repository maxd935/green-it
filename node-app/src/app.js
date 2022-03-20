const express = require("express");
const fs = require('fs')
const cors = require("cors");
const response = require('./lib/getData');
const generatePDF = require('./lib/pdfExport');

const app = express();
const PORT = (process.env.PORT || 5000);


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/api/:code', (req, res) => {
  const code = req.params.code
  res.send(response.getData(code))
});

// Route pour telecharger PDF
app.get('/download-pdf/:code', function(req, res){
  const code = req.params.code
  res.download("src/pdf_export/rapport-" + code + ".pdf");
});

// Route pour generer PDF
app.get('/api/pdf/:code', (req, res) => {
  const code = req.params.code
  generatePDF(code)
  .then(resp => {
    if(resp)
    res.redirect('/download-pdf/'+code)
  })
  .catch(res.status(500))
});


app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});