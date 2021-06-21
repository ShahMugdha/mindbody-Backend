const mongoose = require('mongoose');

const Amenity = new mongoose.Schema({
  Id: Number,
  Name: String
})

const Location = new mongoose.Schema({
  AdditionalImageURLs: [{
    type: String
  }],
  Address : String,
  Address2: String,
  Amenities: [{
    type: Amenity
  }],
  Description: String,
  HasClasses: Boolean,
  Id: Number,
  Latitude: Number,
  Longitude: Number,
  Name: String,
  Phone: String,
  PhoneExtension: String,
  PostalCode: String,
  SiteID: Number,
  StateProvCode: String,
  Tax1: Number,
  Tax2: Number,
  Tax3: Number,
  Tax4: Number,
  Tax5: Number,
  TotalNumberOfRatings: Number,
  AverageRating: Number,
  TotalNumberOfDeals: Number
})

const locationSchema = new mongoose.Schema({
  Locations: {
    type: Location
  }
})

module.exports = mongoose.model('locations', locationSchema);