var axios = require('axios');
const { json } = require('body-parser');
const asyncHandler = require('../middleware/asyncHandler');
const Client = require('../models/Client');

exports.feedClient = asyncHandler((req, res) => {
  var config = {
    method: 'get',
    url: 'https://api.mindbodyonline.com/public/v6/client/clients?siteId=-99',
    headers: { 
      'Content-Type': 'application/json', 
      'Api-Key': 'd5ba29dfa59146c5b8fbb1cae12edaab', 
      'SiteId': '-99' 
    }
  };    
  axios(config)
  .then(function (response) {
    const clientData = response.data;    
    console.log(clientData, "All Clients");
    //Client.insertMany(clientData);
    return res.json(response.data)
  })
  .catch(function (error) {
    console.log(error);
  });
})

exports.addClient = asyncHandler(async(req, res) => {
  const { FirstName, LastName, Email } = req.body;
  /* const createClient = new Client({
    FirstName: FirstName,
    LastName: LastName,
    Email: Email
  }); 
  //await createClient.save();
	console.log(createClient, "create"); */
  var config = {
    method: 'post',
    url: 'https://api.mindbodyonline.com/public/v6/client/addclient?siteId=-99',
    headers: { 
      'Content-Type': 'application/json', 
      'Api-Key': 'd5ba29dfa59146c5b8fbb1cae12edaab', 
      'SiteId': '-99' 
    },
    data: {
      "FirstName": FirstName,
      "LastName": LastName,
      "Email": Email
    }
  };    
  axios(config)
  .then(function (response) {
    const clientData = response.data;  
    const client = new Client(clientData);
    client.save();
    console.log(clientData, "Added Client");
    return res.json(response.data)
  })
  .catch(function (error) {
    console.log(error);
  });
})