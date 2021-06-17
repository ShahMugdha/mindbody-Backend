const express = require('express');
const router = express.Router();
const {addSalesRep} = require('../controllers/salesRep');

//router.get("/", feedClient);
router.post("/add", addSalesRep);

module.exports = router;