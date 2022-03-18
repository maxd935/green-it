const csv = require('csv-parser')
const fs = require('fs')

const resultsCSV = [];

/**
 * Extractor CSV to JSON
 * Mapping des données
 * Ecriture des données
 * 
 * @param {string} fileCSV path CSV file
 * @param {string} fileJSON path JSON file
*/
function buildJSON(fileCSV, fileJSON){
    // extractor CSV to JSON
    fs.createReadStream(fileCSV)
      .pipe(csv())
      .on('data', (data) => {
        resultsCSV.push(data)
      })
      .on('end', () => {
          t1 = resultsCSV.filter(el => el.sexe === "T")
          t2 = t1.filter(el => el.an === "2018")
        
            // Ecriture des données
            const jsonString = JSON.stringify(t2)
            fs.writeFile(fileJSON, jsonString, err => {
                if (err) {
                  console.log('Error writing file', err)
                } else {
                  console.log('Successfully wrote file')
                }
            })
      });
  }

  buildJSON('csv/taux-chomage-com.csv', './json/taux-chomage.json')