const {Schema} = require("mongoose");
const {db} = require("../lib/mongo.config");

const GreenITSchema = new Schema({
    city : {
        type : String,
        unique : false,
        required : false,
    },

    department : {
        type : String,
        unique : false,
        required : false
    },

    //Code postal
    zip_code : {
        type : String,
        unique : false,
        required : false
    },

    //s'exprime en pourcentage => 0.17 par exemple
    moyenne_regionale_part_personnes : {
        type : Schema.Types.Decimal128,
        unique : false,
        required : false
    },

    //s'exprime en pourcentage => 0.17 par exemple
    moyenne_regionale_part_personnes_chomage : {
        type : Schema.Types.Decimal128,
        unique : false,
        required : false
    },

    //Ex : compétences administratives
    axe_du_modele : {
        type : String,
        unique : false,
        required : false
    },

    //s'exprime en pourcentage => 0.17 par exemple
    part_des_personnes : {
        type : Schema.Types.Decimal128,
        unique : false,
        required : false
    },

    //s'exprime en pourcentage => 0.17 par exemple, part totale des personnes au chomage
    part_total_personnes_chomage : {
        type : Schema.Types.Decimal128,
        unique : false,
        required : false
    },

    point_1 : {
        type : Number,
        unique : false,
        required : false
    },

    point_2 : {
        type : Number,
        unique : false,
        required : false
    },

    sum_of_points : {
        type : Number,
        unique : false,
        required : false
    },

    fragility_score : {
        type : Number,
        unique : false,
        required : false
    }
})


const GreenIT = db.model("GreenIT", GreenITSchema);
module.exports = {GreenIT};