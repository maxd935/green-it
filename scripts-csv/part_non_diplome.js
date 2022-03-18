const csv = require('csv-parser')
const fs = require('fs')

const resultsCSV = [];

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
          t1 = resultsCSV.filter(el => el.sexe === "T")
          t2 = t1.filter(el => el.an === "2018")
jsonReader('./json/taux-chomage.json', (err, p) => {
    if (err) {
      console.log(err);
      return;
    }
    gg = p.map(el => {
        const f = t2.find( p => p.codgeo === el.COM)
        if (f) {
            el.PART_DE_NON_DIPLOME = f.p_nondipl15
        }else {
            el.PART_DE_NON_DIPLOME = 0
        }
        
        return el
    })

   const jsonString = JSON.stringify(gg)
  fs.writeFile('./json/part_des_non_diplomes.json', jsonString, err => {
      if (err) {
          console.log('Error writing file', err)
      } else {
          console.log('Successfully wrote file')
      }
  })
  })
          
      });

      
  }

buildJSON('csv/part_des_non_diplomes.csv', './json/part_des_non_diplomes.json')
