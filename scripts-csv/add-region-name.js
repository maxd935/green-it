const fileJSON = './json/db_avec_calcul2.json'
const fs = require('fs')

const jsonData= require(fileJSON); 
const mapping = [
    {
      "code": "1",
      "name": "Guadeloupe"
    },
    {
      "code": "2",
      "name": "Martinique"
    },
    {
      "code": "3",
      "name": "Guyane"
    },
    {
      "code": "4",
      "name": "La Réunion"
    },
    {
      "code": "6",
      "name": "Mayotte"
    },
    {
      "code": "11",
      "name": "Île-de-France"
    },
    {
      "code": "24",
      "name": "Centre-Val de Loire"
    },
    {
      "code": "27",
      "name": "Bourgogne-Franche-Comté"
    },
    {
      "code": "28",
      "name": "Normandie"
    },
    {
      "code": "32",
      "name": "Hauts-de-France"
    },
    {
      "code": "44",
      "name": "Grand Est"
    },
    {
      "code": "52",
      "name": "Pays de la Loire"
    },
    {
      "code": "53",
      "name": "Bretagne"
    },
    {
      "code": "75",
      "name": "Nouvelle-Aquitaine"
    },
    {
      "code": "76",
      "name": "Occitanie"
    },
    {
      "code": "84",
      "name": "Auvergne-Rhône-Alpes"
    },
    {
      "code": "93",
      "name": "Provence-Alpes-Côte d'Azur"
    },
    {
      "code": "94",
      "name": "Corse"
    },
    {
      "code": "COM",
      "name": "Collectivités d'Outre-Mer"
    }
   ]


   const h = jsonData.map( el => {
       const f = mapping.find( v => v.code === el.REG+"")
       if (f) {
        el.LIB_REG = f.name
       } else {
        el.LIB_REG = ""
       } 

       return el;
       
   })

   const jsonString = JSON.stringify(h)
          fs.writeFile('./json/db_final.json', jsonString, err => {
              if (err) {
                  console.log('Error writing file', err)
              } else {
                  console.log('Successfully wrote file')
              }
          })