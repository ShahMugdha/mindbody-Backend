var axios = require('axios');
const { json } = require('body-parser');
const asyncHandler = require('../middleware/asyncHandler');
const SalesRep = require('../models/SalesRep');

exports.addSalesRep = asyncHandler(async(req, res) => {
  const { FirstName, LastName, SalesRepNumber, SalesRepNumbers } = req.body;
	const createSalesRep = new SalesRep({
		FirstName: FirstName,
    LastName: LastName,
    SalesRepNumber: SalesRepNumber,
    SalesRepNumbers: SalesRepNumbers
	});
	const salesRep = await createSalesRep.save();
	console.log(createSalesRep, "create");
	if (!salesRep) {
		return next(new ErrorResponse("Error creating salesRep", 404));
	}
	return res.json({ success: true, result: createSalesRep });
})