const mongoose = require("mongoose");
let db = mongoose.connection

function connect() {
    mongoose.connect(process.env.MONGO_DB_URI,
        {useNewUrlParser: true, useUnifiedTopology: true})
    db.on('connected', () => console.log('Mongoose connected to db named db'))
    db.on('error', (err) => console.log(err.message))
}

module.exports = {db, connect};