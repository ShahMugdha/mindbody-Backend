var axios = require('axios');
const asyncHandler = require('../middleware/asyncHandler');
const User = require('../models/User');

const getUserToken = asyncHandler((req, res) => {
  var data = JSON.stringify({
    "Username": "Siteowner",
    "Password": "apitest1234"
  });
  
  var config = {
    method: 'post',
    url: 'https://api.mindbodyonline.com/public/v6/usertoken/issue',
    headers: { 
      'Api-Key': 'd5ba29dfa59146c5b8fbb1cae12edaab', 
      'SiteId': '-99', 
      'Content-Type': 'application/json', 
      //'Cookie': 'TS01334c2e=01c8c98c89920c36d8dbeefdf5411a1cff77ec9891a8df9245965bc7c154dd5706c19d215ac8ce609e1e2d7c80ba01bee21ca2b69f; __cflb=02DiuFkqqzCCQ4gSuJXWA5knzDBAED8cb3SNHsFcWbH2C'
    },
    data : data
  };  
  axios(config)
  .then(function (response) {
    console.log(JSON.stringify(response.data));
    return res.json(response.data)
    //User.create(response.data)
  })
  .catch(function (error) {
  console.log(error);
  return error
  });
})

module.exports = getUserToken;