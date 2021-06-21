var axios = require('axios');
const { json } = require('body-parser');
const asyncHandler = require('../middleware/asyncHandler');
const Location = require('../models/Location');

exports.feedLocation = asyncHandler((req, res, next) => {
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
    const locationData = response.data.Locations; 
    //Location.insertMany(locationData);
    console.log(locationData, "All Locations");
    return res.json({ success: true, result: response.data.Locations });
  })
  .catch(function (error) {
    console.log(error);
  });
})

exports.getLocations = asyncHandler(async(req, res, next) => {
  const allLocations = await Location.find();
	if (!allLocations) {
		return next(new ErrorResponse("Error Retriving Locations", 404));
	}
	return res.status(200).json({ success: true, result: allLocations });
})