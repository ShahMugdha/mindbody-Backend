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

const ClientSuspensionInfo = new mongoose.Schema({
  BookingSuspended: {
    type: Boolean,
    default: false
  },
  SuspensionStartDate: {
    type: Date,
    default: Date.now
  },
  SuspensionEndDate: {
    type: Date,
    default: Date.now
  },
})

const CustomClientFieldValue = new mongoose.Schema({
  Value: {
    type: String
  },
  Id: {
    type: Number
  },
  DataType: {
    type: String
  },
  Name: {
    type: String
  }
})

ClientCreditCard = new mongoose.Schema({
  Address: {
    type: String
  },
  CardHolder: {
    type: String
  },
  CardNumber: {
    type: String
  },
  CardType: {
    type: String
  },
  City: {
    type: String
  },
  ExpMonth: {
    type: String
  },
  ExpYear: {
    type: String
  },
  LastFour: {
    type: String
  },
  PostalCode: {
    type: String
  },
  State: {
    type: String
  }
})

const AssignedClientIndex = new mongoose.Schema({
  Id: {
    type: Number
  },
  ValueId: {
    type: Number
  }
})

const Relationship = new mongoose.Schema({
  Id: {
    type: Number
  },
  RelationshipName1: {
    type: String
  },
  RelationshipName2: {
    type: String
  }
})

const ClientRelationship = new mongoose.Schema({
  RelatedClientId: {
    type: String
  },
  Relationship: {
    type: Relationship
  },
  RelationshipName: {
    type: String
  },
  Delete: {
    type: Boolean,
    default: false
  }
})

const Liability = new mongoose.Schema({
  AgreementDate: {
    type: Date,
    default: Date.now
  },
  IsReleased: {
    type: Boolean,
    default: true
  },
  ReleasedBy: {
    type: Number,
    default: 0
  }

})

const SalesRep = new mongoose.Schema({
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

const ClientWithSuspensionInfo = new mongoose.Schema({
  SuspensionInfo: {
    type: ClientSuspensionInfo
  },
  AppointmentGenderPreference: {
    type: String,
  },
  BirthDate: {
    type: String,
  },
  Country: {
    type: String,
  },
  CreationDate: {
    type: Date,
    default: Date.now
  },
  CustomClientFields: [{
    type: CustomClientFieldValue
  }],
  ClientCreditCard: {
    type: ClientCreditCard
  },
  ClientIndexes: [{
    type: AssignedClientIndex
  }],
  ClientRelationships: [{
    type: ClientRelationship
  }],
  FirstAppointmentDate: {
    type: Date,
    default: Date.now
  },
  FirstName: {
    type: String,
    default: ''
  },
  Id:{
    type: String
  },
  LastName: {
    type: String,
    default: ''
  },
  Liability: {
    type: Liability
  },
  LiabilityRelease: {
    type: Boolean,
    default: true
  },
  UniqueId:{
    type: Number
  },
  Email: {
    type: String,
    default: ''
  },
  MobilePhone: {
    type: Number
  },
  AccountBalance: {
    type: Number
  },
  Gender: {
    type: String
  },
  Active: {
    type: Boolean,
    default: true
  },
  SalesRep: [{
    type: SalesRep
  }],
  Status: {
    type: String,
    default: 'Active'
  },
  Action: {
    type: String
  }
})

const GetClientsResponse = new mongoose.Schema({
  PaginationResponse: {
    type: paginationResponseSchema
  },
  Clients: [{
    type: ClientWithSuspensionInfo
  }]
})

module.exports = mongoose.model('clients', GetClientsResponse);