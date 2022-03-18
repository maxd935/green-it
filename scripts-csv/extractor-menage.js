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
*/
function buildJSON(fileCSV, fileJSON){
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
            resCSV = resultsCSV.filter(elementCSV => elementCSV.COM == parseInt(elementJSON.COM))
            menageCSV=0
            resCSV.map(el => menageCSV+=parseInt(el.C16_MENPSEUL))
            elementJSON.MENAGE=menageCSV
              return elementJSON;
          });
          const jsonString = JSON.stringify(resJSON)
          
          // Ecriture des données
          fs.writeFile(fileJSON, jsonString, err => {
              if (err) {
                console.log('Error writing file', err)
              } else {
                console.log('Successfully wrote file')
                const jsonData= require(fileJSON); 
                console.log(jsonData);
              }
          })
        });
    });
}


buildJSON('csv/menage.csv', './json/moyenne3.json')