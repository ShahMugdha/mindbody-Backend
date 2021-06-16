const express = require('express');
const router = express.Router();
const {feedSale, saleService} = require('../controllers/sales');
//const saleService = require('../controllers/sales')

router.post("/", feedSale);
router.post("/services", saleService);

module.exports = router;