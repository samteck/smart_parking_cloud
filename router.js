var express = require('express')
var router  = express.Router()

router.get(('/saveSlots'),(req,res,next)=>{
  console.log("Time" + Date.now())
  next()
})

router.get(('/saveSlots'),(req,res)=>{
  res.send("This is save slot function")
})

router.get(('/freeSlots'),(req,res)=>{
  res.send("This API will give free slots")
})

router.get(('/occupiedSlots'),(req,res)=>{
  res.send("This API will give occupied slots")
})

module.exports = router
