var axios = require('axios');
const { json } = require('body-parser');
const asyncHandler = require('../middleware/asyncHandler');
const Location = require('../models/Location');

exports.feedLocation = asyncHandler((req, res) => {
  var config = {
    method: 'get',
    url: 'https://api.mindbodyonline.com/public/v6/site/locations?siteId=-99',
    headers: { 
      'Content-Type': 'application/json', 
      'Api-Key': 'd5ba29dfa59146c5b8fbb1cae12edaab', 
      'SiteId': '-99' 
    }
  };    
  axios(config)
  .then(function (response) {
    const locationData = response.data;    
    console.log(locationData, "All Locations");
    //Location.insertMany(locationData);
    return res.json(response.data)
  })
  .catch(function (error) {
    console.log(error);
  });
})