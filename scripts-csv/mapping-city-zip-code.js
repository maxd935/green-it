const csv = require('csv-parser')
const fs = require('fs')
let resultsCSV = [];
fs.createReadStream('./csv/cities.csv')
      .pipe(csv())
      .on('data', (data) => {
        resultsCSV.push(data)
      })
      .on('end', () => {
          resultsCSV = resultsCSV.map( el => {
              return el.name+", "+el.zip_code
          })

          const jsonString = JSON.stringify(resultsCSV)
          fs.writeFile('./json/cities.json', jsonString, err => {
              if (err) {
                  console.log('Error writing file', err)
              } else {
                  console.log('Successfully wrote file')
              }
          })
      });