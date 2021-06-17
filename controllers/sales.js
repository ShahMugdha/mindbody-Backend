var axios = require('axios');
const { json } = require('body-parser');
const asyncHandler = require('../middleware/asyncHandler');
const Sale = require('../models/Sale');
const SaleService = require('../models/SaleService');

exports.feedSale = asyncHandler((req, res) => {
  var config = {
    method: 'get',
    url: 'https://api.mindbodyonline.com/public/v6/sale/sales?siteId=-99',
    headers: { 
      'Content-Type': 'application/json', 
      'Api-Key': 'd5ba29dfa59146c5b8fbb1cae12edaab', 
      'SiteId': '-99' 
    }
  };    
  axios(config)
  .then(function (response) {
    const saleData = response.data;    
    console.log(saleData, "All Sales");
    //Sale.insertMany(saleData);
    return res.json(response.data)
  })
  .catch(function (error) {
    console.log(error);
  });
})

exports.saleService = asyncHandler((req, res) => {
  var config = {
    method: 'get',
    url: 'https://api.mindbodyonline.com/public/v6/sale/services?siteId=-99',
    headers: { 
      'Content-Type': 'application/json', 
      'Api-Key': 'd5ba29dfa59146c5b8fbb1cae12edaab', 
      'SiteId': '-99' 
    }
  };    
  axios(config)
  .then(function (response) {
    const saleServiceData = response.data;    
    console.log(saleServiceData, "All Sales Services");
    //SaleService.insertMany(saleServiceData);
    return res.json(response.data)
  })
  .catch(function (error) {
    console.log(error);
  });
})