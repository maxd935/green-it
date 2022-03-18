const fs = require('fs')

const fileJSON = './json/db_avec_calcul2.json'

let jsonData= require(fileJSON);

// jsonData =jsonData.map(el => {
//     res = jsonData.filter(element => element.REG == el.REG)
//     indices=0
//     res.map(elres => indices+=parseFloat(elres.INDICE_FRAGILITE))
//     console.log(indices)
//     console.log(res.lentgh())
//     el.INDICE_FRAGILITE_REG=parseFloat((indices/res.lentgh).toFixed(2))
//     return el;
// })


// const reduced = jsonData.reduce(function(m, d){
//       if(!m[d.REG]){
//         m[d.REG] = {...d, count: 1};
//         return m;
//       }
//       m[d.REG].REG = d.REG;
//       m[d.REG].INDICE_FRAGILITE += d.INDICE_FRAGILITE;
    
//       m[d.REG].count += 1;
//       return m;
//     },{});
    
//     // Create new array from grouped data and compute the average
//     const result = Object.keys(reduced).map(function(k){
//        const item  = reduced[k];
//        return {
//       DEP: item.REG,
//       INDICE_FRAGILITE_REG: parseFloat((item.INDICE_FRAGILITE/item.count).toFixed(2))
//        }
//     })
//     console.log(result)


const tab_reg = [
    { DEP: 1, INDICE_FRAGILITE_REG: 0 },
    { DEP: 2, INDICE_FRAGILITE_REG: 100.83 },
    { DEP: 3, INDICE_FRAGILITE_REG: 0 },
    { DEP: 4, INDICE_FRAGILITE_REG: 104.2 },
    { DEP: 11, INDICE_FRAGILITE_REG: 74.83 },
    { DEP: 24, INDICE_FRAGILITE_REG: 71.65 },
    { DEP: 27, INDICE_FRAGILITE_REG: 67.19 },
    { DEP: 28, INDICE_FRAGILITE_REG: 66.48 },
    { DEP: 32, INDICE_FRAGILITE_REG: 69.2 },
    { DEP: 44, INDICE_FRAGILITE_REG: 69.67 },
    { DEP: 52, INDICE_FRAGILITE_REG: 75.83 },
    { DEP: 53, INDICE_FRAGILITE_REG: 77.91 },
    { DEP: 75, INDICE_FRAGILITE_REG: 75.71 },
    { DEP: 76, INDICE_FRAGILITE_REG: 73.67 },
    { DEP: 84, INDICE_FRAGILITE_REG: 74.24 },
    { DEP: 93, INDICE_FRAGILITE_REG: 75.69 },
    { DEP: 94, INDICE_FRAGILITE_REG: 0 }
  ]


    // Mapping données
    resJSON = jsonData.map(elementJSON => {
      res = tab_reg.find(element => elementJSON.REG == element.DEP)
        elementJSON.INDICE_FRAGILITE_REG=res.INDICE_FRAGILITE_REG
        return elementJSON;
    });
    const jsonString = JSON.stringify(resJSON)
    
    // Ecriture des données
    fs.writeFile('./json/db_avec_calcul2.json', jsonString, err => {
        if (err) {
          console.log('Error writing file', err)
        } else {
          console.log('Successfully wrote file')
          const jsonData= require(fileJSON); 
          console.log(jsonData);
        }
    })