const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//creating a new schema to log the Kudos//
var KudoSchema = new Schema({
    title: String,
    message: String
})

const Kudo = mongoose.model('Kudo',KudoSchema);

module.exports = Kudo;