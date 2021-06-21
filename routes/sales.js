const express = require('express');
const router = express.Router();
const {feedSale, getSales, saleService} = require('../controllers/sales');

router.post("/", feedSale);
router.get("/all-sales", getSales);
router.post("/services", saleService);

module.exports = router;