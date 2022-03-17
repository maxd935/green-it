const fs = require('fs')

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


jsonReader('./moyenne2.json', (err, dataJSON) => {
    if (err) {
      console.log(err);
      return;
    }
    data = dataJSON.map(el => {
        return obj = {
            REG: el.REG,
            DEP: el.DEP,
            COM: el.COM,
            LIBCOM: el.LIBCOM,
            CODE_POSTALE: el.CODE_POSTALE,
            TAUX_PAUVRETE_REG: el.TAUX_PAUVRETE_REG,
            TAUX_PAUVRETE_DEP: el.TAUX_PAUVRETE_DEP,
            TAUX_PAUVRETE_COM: el.TAUX_PAUVRETE_COM
        }
    })
    const jsonString = JSON.stringify(data)
    
    // Ecriture des données
    fs.writeFile('./moyenne3.json', jsonString, err => {
        if (err) {
          console.log('Error writing file', err)
        } else {
          console.log('Successfully wrote file')
          const jsonData= require('./moyenne3.json'); 
          console.log(jsonData);
        }
    })
  });