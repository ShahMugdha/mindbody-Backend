const mongoose = require('mongoose');

const paginationResponseSchema = new mongoose.Schema({
  RequestedLimit:{
    type:Number,
    default: 0
  },
  RequestedOffset:{
    type:Number,
    default: 0
  },
  PageSize:{
    type:Number,
    default: 0
  },
  TotalResults:{
    type:Number,
    default: 0
  }
})

const avaibilitiesSchema = new mongoose.Schema({
  Id: Number,
  Location: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'locations'
  }
})

const staffSchema = new mongoose.Schema({
  PaginationResponse: {
    type: paginationResponseSchema
  },
  Staff: [{
    Id: Number,
    avaibilities: avaibilitiesSchema
  }]
})

module.exports = mongoose.model('staff', staffSchema);