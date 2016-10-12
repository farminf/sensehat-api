var mongoose = require('mongoose');

var SensehatSchema = new mongoose.Schema({
  sensor: String,
  value: Number,
  timestamp: Number
  //timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Sensehat', SensehatSchema);
