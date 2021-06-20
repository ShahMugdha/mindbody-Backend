const express = require('express');
const router = express.Router();
const {feedStaff} = require('../controllers/staff');

router.post("/", feedStaff);

module.exports = router;