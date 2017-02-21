var mongoose = require('mongoose')
var Schema = mongoose.Schema

// create a schema
var houseSchema = new Schema({
  name: String,
  location: String,
  description: String,
  imageUrl: String,
  lat: Number,
  lng: Number
})

// the schema is useless so far
// we need to create a model using it
var House = mongoose.model('House', houseSchema)

// make this available to our house in our Node applications
module.exports = House
