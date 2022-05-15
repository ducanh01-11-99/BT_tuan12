const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const student = new Schema({
    mssv: String,
    name: String,
    birth: Date,
    address: String
});

module.exports = mongoose.model('student', student);