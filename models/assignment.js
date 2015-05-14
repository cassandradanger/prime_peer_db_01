var mongoose = require('mongoose');
var assignmentSchema = new mongoose.Schema({
    name: String,
    score: Number,
    date_completed: {type: Date, default: Date.now},
});

module.exports = mongoose.model('Assignment', assignmentSchema);