const jsonData = require('./db_final.json');

const getData = (code) => {
    let voisins = []
    const com = jsonData.find( (el) => {
        if(el.CODE_POSTALE.length === 4) {
            console.log("b ",el.CODE_POSTALE)
            el.CODE_POSTALE = "0"+el.CODE_POSTALE
            console.log("a ",el.CODE_POSTALE)
        }
        return el.CODE_POSTALE === code
    });
    if (com) {
        voisins = jsonData.filter(el => el.DEP === com.DEP && el.CODE_POSTALE !== code);
        return {
            ville: com,
            dept: voisins
        }
    }
    else {
        return [];
    }
}

exports.getData = getData