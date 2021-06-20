var axios = require('axios');
const { json } = require('body-parser');
const asyncHandler = require('../middleware/asyncHandler');
const Staff = require('../models/Staff');

exports.feedStaff = asyncHandler((req, res) => {
  var config = {
    method: 'get',
    url: 'https://api.mindbodyonline.com/public/v6/staff/staff?siteId=-99',
    headers: { 
      'Content-Type': 'application/json', 
      'Api-Key': 'd5ba29dfa59146c5b8fbb1cae12edaab', 
      'SiteId': '-99' 
    }
  };    
  axios(config)
  .then(function (response) {
    const staffData = response.data;    
    console.log(staffData, "All Staff");
    //Staff.insertMany(staffData);
    return res.json(response.data)
  })
  .catch(function (error) {
    console.log(error);
  });
})