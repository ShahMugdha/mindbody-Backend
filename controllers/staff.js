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
    const staffData = response.data.StaffMembers;    
    //Staff.insertMany(staffData);
    console.log(staffData, "All Staff");
    return res.json({ success: true, result: staffData });
  })
  .catch(function (error) {
    console.log(error);
  });
})

exports.getStaff = asyncHandler(async(req, res, next) => {
  const allStaff = await Staff.find();
	if (!allStaff) {
		return next(new ErrorResponse("Error Retriving Staff", 404));
	}
	return res.status(200).json({ success: true, result: allStaff });
})