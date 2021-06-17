const express = require('express');
const router = express.Router();
const {feedClient, addClient} = require('../controllers/clients');

router.get("/", feedClient);
router.post("/add-client", addClient);

module.exports = router;