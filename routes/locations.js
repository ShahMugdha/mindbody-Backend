const express = require('express');
const router = express.Router();
const {feedLocation} = require('../controllers/locations');

router.post("/", feedLocation);

module.exports = router;