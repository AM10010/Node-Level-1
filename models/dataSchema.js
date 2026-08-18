const mongoose = require('mongoose');
const Schema = mongoose.Schema

const dataSchema = new Schema({
    nameForm: String
})

const Data = mongoose.model('Data', dataSchema);

module.exports = Data;