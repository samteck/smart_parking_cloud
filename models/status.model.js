const mongoose = require('mongoose')
const Schema = mongoose.Schema

let StatusSchema = new Schema({
  
  timeStamp: {type: Date, required: true},
  occupiedSlot: {type: Array, required: true},
  unoccupiedSlot: {type: Array, required: true},
  
})

// Export the model
module.exports = mongoose.model('Status', StatusSchema)
