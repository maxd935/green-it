const csv = require('csv-parser')
const fs = require('fs')


let resultsCSV = [];

/**
 * Read file and return callback ou l'error
 * 
 * @param {String} filePath 
 * @param {function} cb 
 */
function jsonReader(filePath, cb) {
    fs.readFile(filePath, (err, fileData) => {
      if (err) {
        return cb && cb(err);
      }
      try {
        const object = JSON.parse(fileData);
        return cb && cb(null, object);
      } catch (err) {
        return cb && cb(err);
      }
    });
}


/**
 * Extractor CSV to JSON
 * Mapping des données
 * Ecriture des données
 * 
 * @param {string} fileCSV path CSV file
 * @param {string} fileJSON path JSON file
 * @param {string} newColumJSON name to new column to JSON
 * @param {string} addColumnCSV name to column addes to JSON from CSV
 * @param {string} columnCSVmapping name to check in CSV to JSON
 * @param {string} columnJSONmapping name to check in JSON to CSV
*/
function buildJSON(fileCSV, fileJSON, newColumJSON, addColumnCSV, columnCSVmapping, columnJSONmapping){
  // extractor CSV to JSON
  fs.createReadStream(fileCSV)
    .pipe(csv())
    .on('data', (data) => {
      resultsCSV.push(data)
    })
    .on('end', () => {
      jsonReader(fileJSON, (err, dataJSON) => {
          if (err) {
            console.log(err);
            return;
          }
          // Mapping données
          resJSON = dataJSON.map(elementJSON => {
            resCSV = resultsCSV.find(elementCSV => elementCSV[columnCSVmapping] == elementJSON[columnJSONmapping]) 
              if (!resCSV || resCSV[addColumnCSV] === "") elementJSON[newColumJSON]=0
              else elementJSON[newColumJSON]=resCSV[addColumnCSV]
              return elementJSON;
          });
          const jsonString = JSON.stringify(resJSON)
          
          // Ecriture des données
          fs.writeFile('./db.json', jsonString, err => {
              if (err) {
                console.log('Error writing file', err)
              } else {
                console.log('Successfully wrote file')
              }
          })
        });
    });
}

buildJSON('csv/region_taux_pauvreté.csv', 'db.json', 'TAUX_PAUVRETE_REG', 'TP6016', 'CODGEO', 'REG')
// buildJSON('csv/Departement_taux_pauvreté.csv', './moyenne2.json', 'TAUX_PAUVRETE_DEP', 'TP6016', 'CODGEO', 'DEP')
// buildJSON('csv/Commune_taux_pauvreté.csv', './moyenne2.json', 'TAUX_PAUVRETE_COM', 'TP6016', 'CODGEO', 'COM')