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
      //'Cookie': 'TS01334c2e=01c8c98c89920c36d8dbeefdf5411a1cff77ec9891a8df9245965bc7c154dd5706c19d215ac8ce609e1e2d7c80ba01bee21ca2b69f; __cflb=02DiuFkqqzCCQ4gSuJXWA5knzDBAED8cb3SNHsFcWbH2C',
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
      //'Cookie': 'TS01334c2e=01c8c98c89920c36d8dbeefdf5411a1cff77ec9891a8df9245965bc7c154dd5706c19d215ac8ce609e1e2d7c80ba01bee21ca2b69f; __cflb=02DiuFkqqzCCQ4gSuJXWA5knzDBAED8cb3SNHsFcWbH2C',
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