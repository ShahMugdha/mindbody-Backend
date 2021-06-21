const express = require('express');
const router = express.Router();
const {feedLocation, getLocations} = require('../controllers/locations');

router.post("/", feedLocation);
router.get("/all-locations", getLocations);
module.exports = router;