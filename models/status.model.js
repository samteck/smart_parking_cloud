const mongoose = require('mongoose')	//imported mongoose to define a schema
const Schema = mongoose.Schema			//created a schema object with mongoose

//define a schema for the DB entries
let StatusSchema = new Schema({
  
  timeStamp: {type: Date, required: true},
  occupiedSlot: {type: Array, required: true},
  unoccupiedSlot: {type: Array, required: true},
  
})

// export the module
module.exports = mongoose.model('Status', StatusSchema)
