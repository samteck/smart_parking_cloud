const Status = require('../models/status.model')

var id

exports.saveSlots = function (req, res) {
  let status = new Status(
    {
      timeStamp: Date.now(),
      occupiedSlot: req.body.occupiedSlot,
      unoccupiedSlot: req.body.unoccupiedSlot
      
    }
  )
  status.save(function (err,a) {
    if (err) {
      return next(err)
    }
    id = a._id
    console.log("Successfully added Slot details at : " + Date.now() + " with mongoDB ID : " + id)
    res.send('Slots Details Successfully saved')
  })
}


exports.freeSlots = function (req, res) {
  Status.findById(id, function (err, status) {
    if (err) return next(err)
    console.log("====>  /freeSlots call at : " + Date.now() + " from IP Address : " + req.ip)
    res.send(status.unoccupiedSlot)
  })
}


exports.occupiedSlots = function (req, res) {
   Status.findById(id, function (err, status) {
    if (err) return next(err)
    console.log("====>  /occupiedSlots call at : " + Date.now() + " from IP Address : " + req.ip)    
    res.send(status.occupiedSlot)
  })
}

exports.home = function (req, res) {
  console.log("==========> Someone navigated to homepage at : " + Date.now())
  res.send("You have landed the home page, please navigate to appropriate API")
}
