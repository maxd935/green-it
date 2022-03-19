const express = require("express");
const cors = require("cors");
const response = require('./lib/getData');
// const generatePDF = require('./lib/pdfExport');

const app = express();
const PORT = 8800;


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/api/:code', (req, res) => {
  const code = req.params.code
  res.send(response.getData(code))
});

// Route pour generer PDF (async)
// Problem d'import/export
// app.get('/api/pdf/:text', (req, res) => {
//   const text = req.params.code
//   generatePDF(text)
//   res.redirect('/src/pdf_export/rapport-"+text+".pdf');
// });

app.get('/', (req, res) => {
  res.send("hello world ")
});
app.listen(PORT, () => {
    console.log("Server is running on port " + PORT);
});