const express = require('express')
const router = express.Router()

// Require the controllers
const controller = require('../controllers/status.controller')

// a simple test url to check that all of our files are communicating correctly.
router.post('/saveSlots', controller.saveSlots)
router.get('/freeSlots/', controller.freeSlots)
router.get('/occupiedSlots', controller.occupiedSlots)

module.exports = router
