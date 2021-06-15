const express = require('express');
const router = express.Router();
const feedUser = require('../controllers/userToken')

router.get("/", feedUser);

module.exports = router;