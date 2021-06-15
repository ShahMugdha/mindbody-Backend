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

const PurchasedItem = new mongoose.Schema({
    SaleDetailId: {
        type: Number
    },
    Id:{
        type: Number
    },
    IsService:{
        type: Boolean,
        default: false
    },
    BarcodeId:{
        type: String
    },
    Description:{
        type: String,
        default: ""
    },
    ContractId:{
        type: Number
    },
    CategoryId:{
        type: Number
    },
    SubCategoryId:{
        type: Number
    },
    UnitPrice:{
        type: Number,
        default: 0
    },
    Quantity:{
        type: Number,
        default: 0
    },
    DiscountPercent:{
        type: Number,
        default: 0
    },
    DiscountAmount:{
        type: Number,
        default: 0
    },
    Tax1:{
        type: Number
    },
    Tax2:{
        type: Number
    },
    Tax3:{
        type: Number
    },
    Tax4:{
        type: Number
    },
    Tax5:{
        type: Number
    },
    TaxAmount:{
        type: Number
    },
    TotalAmount:{
        type: Number
    },
    Notes:{
        type: String,
        default: ""
    },
    Returned:{
        type: Boolean,
        default: false
    },
    PaymentRefId:{
        type: Number
    },
    ExpDate:{
        type: Date,
        default: Date.now
    },
    ActiveDate:{
        type: Date,
        default: Date.now
    }
})

const SalePayment = new mongoose.Schema({
    Amount:{
        type: Number
    },
    Method:{
        type: Number
    },
    Type:{
        type: String,
        default: ""
    },
    Notes:{
        type: String,
        default: ""
    },
    TransactionId:{
        type: Number
    }
})

const saleSchema = new mongoose.Schema({
    SaleDate:{
        type:Date,
        default:Date.now
    },
    SaleTime:{
        type: String,
        default: ""
    },
    SaleDateTime:{
        type:Date,
        default:Date.now
    },
    SalesRepId:{
        type: Number,
    },
    ClientId:{
        type: String
    },
    PurchasedItems: [{
        type: PurchasedItem
    }],
    LocationId:{
        type: Number
    },
    Payments: [{
        type: SalePayment
    }],
})

const GetSalesResponse = new mongoose.Schema({
    PaginationResponse: {
        type: paginationResponseSchema
    },
    Sales: [{
        type: saleSchema
    }]
})

module.exports = mongoose.model('Sales',GetSalesResponse);