const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    note: {
        type: String,
        required: true
    }
});

const noteDB = mongoose.model('notedb', schema);
module.exports = {
    method: noteDB
};