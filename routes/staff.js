const express = require('express');
const router = express.Router();
const {feedStaff, getStaff} = require('../controllers/staff');

router.post("/", feedStaff);
router.get("/all-staff", getStaff);
module.exports = router;