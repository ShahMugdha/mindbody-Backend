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

const locationSchema = new mongoose.Schema({
  PaginationResponse: {
    type: paginationResponseSchema
  },
  Locations: [{
    Id: Number
  }]
})

module.exports = mongoose.model('locations', locationSchema);