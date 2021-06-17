const mongoose = require('mongoose');

const SalesRepSchema = new mongoose.Schema({
  FirstName: {
    type: String,
    default: ''
  },
  Id: {
    type: Number
  },
  LastName: {
    type: String,
    default: ''
  },
  SalesRepNumber: {
    type: Number,
    default: 0
  },
  SalesRepNumbers: [{
    type: Number,
    default: 0
  }]
})

module.exports = mongoose.model('salesRep', SalesRepSchema);