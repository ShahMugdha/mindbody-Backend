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

const serviceSchema = new mongoose.Schema({
  Price: {
    type: Number,
    default: 0
  },
  OnlinePrice: {
    type: Number,
    default: 0
  },
  TaxIncluded: {
    type: Number,
    default: 0
  },
  ProgramId: {
    type: Number
  },
  TaxRate: {
    type: Number,
    default: 0
  },
  ProductId: {
    type: Number
  },
  Id: {
    type: String,
    default: ''
  },
  Name: {
    type: String,
    default: ''
  },
  Count: {
    type: Number,
    default: 0
  },
  SellOnline: {
    type: Boolean,
    default: false
  },
  Type: {
    type: String,
    default: ''
  },
  ExpirationType: {
    type: String,
    default: ''
  },
  ExpirationUnit: {
    type: String,
    default: ''
  },
  ExpirationLength: {
    type: String,
    default: ''
  },
  RevenueCategory: {
    type: String,
    default: ''
  },
  MembershipId: {
    type: Number
  },
  SellAtLocationIds: [{
    type: Number,
    default: 0
  }],
  UseAtLocationIds: [{
    type: Number,
    default: 0
  }],
  Priority: {
    type: String,
    default: ''
  },
  IsIntroOffer: {
    type: Boolean,
    default: false
  },
  IntroOfferType: {
    type: String,
    default: ''
  },
  IsThirdPartyDiscountPricing: {
    type: Boolean,
    default: false
  },
  Program: {
    type: String,
    default: ''
  },
  Discontinued: {
    type: Boolean,
    default: false
  }
})

const GetServicesResponse = new mongoose.Schema({
  PaginationResponse: {
    type: paginationResponseSchema
  },
  Services: [{
    type: serviceSchema
  }]
})

module.exports = mongoose.model('SaleServices', GetServicesResponse);