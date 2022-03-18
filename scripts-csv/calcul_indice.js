/**
 * Structure d'un document
 * 
 * REG: NUMERO REGION
    DEP: NUMERO DEPARTEMENT
    COM: NUMERO COMMUNE
    LIBCOM: NOM COMMUNE
    CODE_POSTALE: CODE POSTALE
    TAUX_PAUVRETE_REG: % TAUX PAUVRETE REGION - 1. Accès aux interfaces numériques
    TAUX_PAUVRETE_DEP: % TAUX PAUVRETE DEPARTEMENT - 1. Accès aux interfaces numériques
    TAUX_PAUVRETE_COM: % TAUX PAUVRETE COMMUNE - 1. Accès aux interfaces numériques
    MENAGE: %1 PART DES MÉNAGES - 2. Accès à l’information
    TAUX_CHOMAGE_DEP: % TAUX CHOMAGE DEPARTEMENT - 3. Compétences administratives
    TAUX_CHOMAGE_REG: % TAUX CHOMAGE REGION - 3. Compétences administratives
    TAUX_CHOMAGE_COM: % TAUX CHOMAGE COMMUNE - 3. Compétences administratives
    PART_DE_NON_DIPLOME: % TAUX NON DIPLOME COMMUNE - 4. Capacité d’usage des interfaces numériques
    PART_DE_NON_DIPLOME_DEP: % TAUX NON DIPLOME DEPARTEMENT - 4. Capacité d’usage des interfaces numériques
    PART_DE_NON_DIPLOME_REG: % TAUX NON DIPLOME REGION - 4. Capacité d’usage des interfaces numériques
    P16_POP: NOMBRE DE POPULATION PAR COMMUNE
    MENAGE_REG: %1 PART DES MÉNAGES PAR REGION - 2. Accès à l’informatio
    P16_POP_REG: NOMBRE DE POPULATION PAR REGION
*/
const fs = require('fs')


function calcul_point_indicateur(var_commune, var_region){
    var_commune=parseFloat(var_commune)
    var_region=parseFloat(var_region)
    return indicateur = parseFloat(((((var_commune - var_region)/var_region)+1)*100).toFixed(2))
}


function calcul_indice_fragilite(INDICATEUR_INTERFACE_NUMERIQUES, INDICATEUR_ACCES_INFORMATION, INDICATEUR_COMPETENCES_ADMINISTRATIVES, INDICATEUR_CAPACITE_USAGES_NUMERIQUES){
    sum = INDICATEUR_INTERFACE_NUMERIQUES+INDICATEUR_ACCES_INFORMATION+INDICATEUR_COMPETENCES_ADMINISTRATIVES+INDICATEUR_CAPACITE_USAGES_NUMERIQUES
    return parseFloat((sum/4).toFixed(2))
}


const fileJSON = './json/db_sans_calcul.json'

const jsonData= require(fileJSON);
jsonData.map(el => {
    el.INDICATEUR_INTERFACE_NUMERIQUES = calcul_point_indicateur(el.TAUX_PAUVRETE_COM, el.TAUX_PAUVRETE_REG)
    el.INDICATEUR_ACCES_INFORMATION = calcul_point_indicateur(el.MENAGE, el.MENAGE_REG)
    el.INDICATEUR_COMPETENCES_ADMINISTRATIVES = calcul_point_indicateur(el.TAUX_CHOMAGE_COM, el.TAUX_CHOMAGE_REG)
    el.INDICATEUR_CAPACITE_USAGES_NUMERIQUES = calcul_point_indicateur(el.PART_DE_NON_DIPLOME, el.PART_DE_NON_DIPLOME_REG)

    el.INDICE_FRAGILITE = calcul_indice_fragilite(el.INDICATEUR_INTERFACE_NUMERIQUES,el.INDICATEUR_ACCES_INFORMATION,el.INDICATEUR_COMPETENCES_ADMINISTRATIVES,el.INDICATEUR_CAPACITE_USAGES_NUMERIQUES)
})

const jsonString = JSON.stringify(jsonData)
    // Ecriture des données
    fs.writeFile('./json/db_avec_calcul.json', jsonString, err => {
        if (err) {
            console.log('Error writing file', err)
        } else {
        console.log('Successfully wrote file')
        const jsonData= require(fileJSON); 
        console.log(jsonData);
        }
    })