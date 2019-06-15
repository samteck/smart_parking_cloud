const express = require('express');
const router = express.Router();

// Require the controllers
const controller = require('../controllers/status.controller');


// a simple test url to check that all of our files are communicating correctly.
router.post('/saveSlots', controller.saveSlots);
//router.get('/freeSlots', product_controller.test);
//router.get('/occupiedSlots', product_controller.test);
module.exports = router;
