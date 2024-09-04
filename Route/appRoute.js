const express = require('express');
const { getAllApps } = require('../Controller/appController');

//create router
const router = express.Router();

//fetch the data
router.get('/', getAllApps);

//export router
module.exports = router;
