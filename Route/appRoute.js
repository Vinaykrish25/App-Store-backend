const express = require('express');
const { getAllApps } = require('../Controller/appController');

const router = express.Router();

router.get('/', getAllApps);
// router.get('/', );
// router.get('/', );
// router.get('/', );

module.exports = router;
