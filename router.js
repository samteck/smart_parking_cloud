var express = require('express')
var router  = express.Router()
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());


router.use(express.json());

var sam


// Middleware function to save the time of the saveSlot request
router.use(('/saveSlots'),(req,res,next)=>{
  console.log("Time" + Date.now())
  next()
})

router.post(('/saveSlots'),(req,res)=>{
  //res.send("This is save slot function")
  sam = req.body
  res.send(sam)
  console.log(JSON.stringify(req.headers));
  console.log(req.body);

  //console.log(req.body)
})

router.get(('/freeSlots'),(req,res)=>{
//  res.json({hello:'you''})
  res.send(sam)
})

router.get(('/occupiedSlots'),(req,res)=>{
  res.send("This API will give occupied slots")
})

module.exports = router
