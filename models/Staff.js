const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
  Id: {
    type: Number
  },
  Address: {
    type: String
  },
  Bio: {
    type: String
  },
  City: {
    type: String
  },
  FirstName: {
    type: String
  },
  ImageUrl: {
    type: String
  },
  avaibilities: [{
    Id: {
      type: Number
    },
    Location: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'locations'
    }
  }]
})

const Staff = mongoose.model('staff', staffSchema);
module.exports = Staff;