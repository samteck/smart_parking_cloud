const express = require('express')		//import express framework 
const router = express.Router()			//created router object using express framework

// Require the controllers so that routes can be forwareded to appropriate function
const controller = require('../controllers/status.controller')

// Routes the API to the appropriate function in controller.js
router.post('/saveSlots', controller.saveSlots)
router.get('/freeSlots', controller.freeSlots)
router.get('/occupiedSlots', controller.occupiedSlots)
router.get('/', controller.home)

//export the module
module.exports = router
