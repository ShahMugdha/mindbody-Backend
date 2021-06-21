const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  AdditionalImageURLs: [{
    type: String
  }],
  Address : {
    type: String
  },
  Address2: {
    type: String
  },
  Amenities: [{
    Id: Number,
    Name: String
  }],
  Description: {
    type: String
  },
  HasClasses: {
    type: Boolean
  },
  Id: {
    type: Number
  },
  Latitude: {
    type: Number
  },
  Longitude: {
    type: Number
  },
  Name: {
    type: String
  },
  Phone: {
    type: String
  },
  PhoneExtension: {
    type: String
  },
  PostalCode: {
    type: String
  },
  SiteID: {
    type: Number
  },
  StateProvCode: {
    type: String
  },
  Tax1: {
    type: Number
  },
  Tax2: {
    type: Number
  },
  Tax3: {
    type: Number
  },
  Tax4: {
    type: Number
  },
  Tax5: {
    type: Number
  },
  TotalNumberOfRatings: {
    type: Number
  },
  AverageRating: {
    type: Number
  },
  TotalNumberOfDeals: {
    type: Number
  }
})

const Location = mongoose.model('locations', locationSchema);
module.exports = Location;