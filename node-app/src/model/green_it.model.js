const {Schema} = require("mongoose");
const {db} = require("../lib/mongo.config");

const GreenITSchema = new Schema({
    REG : {
        type : String,
        unique : false,
        required : false,
    },
    DEP : {
            type : String,
            unique : false,
            required : false,
        },
    COM : {
            type : String,
            unique : false,
            required : false,
        },
    LIBCOM : {
            type : String,
            unique : false,
            required : false,
        },
    CODE_POSTALE : {
            type : String,
            unique : false,
            required : false,
        },
    TAUX_PAUVRETE_REG : {
            type : String,
            unique : false,
            required : false,
        },

    TAUX_PAUVRETE_DEP : {
        type : String,
        unique : false,
        required : false,
    },

    TAUX_PAUVRETE_COM : {
            type : String,
            unique : false,
            required : false,
        },
    MENAGE : {
            type : String,
            unique : false,
            required : false,
        },

    TAUX_CHOMAGE_DEP:{
            type : String,
            unique : false,
            required : false,
        },
    TAUX_CHOMAGE_REG:{
            type : String,
            unique : false,
            required : false,
        },
    TAUX_CHOMAGE_COM:{
            type : String,
            unique : false,
            required : false,
        },
    PART_DE_NON_DIPLOME:{
            type : String,
            unique : false,
            required : false,
        },
    PART_DE_NON_DIPLOME_DEP:{
            type : String,
            unique : false,
            required : false,
        },
    PART_DE_NON_DIPLOME_REG:{
            type : String,
            unique : false,
            required : false,
        },
    P16_POP:{
            type : Number,
            unique : false,
            required : false,
        },
    MENAGE_REG:{
            type : Number,
            unique : false,
            required : false,
        },
    P16_POP_REG:{
            type : Number,
            unique : false,
            required : false,
        },
    INDICATEUR_INTERFACE_NUMERIQUES:{
            type : Number,
            unique : false,
            required : false,
        },
    INDICATEUR_ACCES_INFORMATION:{
            type : Number,
            unique : false,
            required : false,
        },
    INDICATEUR_COMPETENCES_ADMINISTRATIVES:{
            type : Number,
            unique : false,
            required : false,
        },
    INDICATEUR_CAPACITE_USAGES_NUMERIQUES:{
            type : Number,
            unique : false,
            required : false,
        },
    INDICE_FRAGILITE:{
            type : Number,
            unique : false,
            required : false,
        },
    INDICE_FRAGILITE_DEP:{
            type : Number,
            unique : false,
            required : false,
        },
    INDICE_FRAGILITE_REG:{
            type : Number,
            unique : false,
            required : false,
        }

});

const GreenIT = db.model("GreenIT", GreenITSchema);
module.exports = {GreenIT};