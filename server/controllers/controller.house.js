const modelHouse = require('../models/model.house.js')

var controllerHouse = {
  /* get all data house from database */
  getAllHouse: function (req, res) {
    modelHouse.find({}, function (err, data) {
      if (err) throw err
      res.json(data)
    })
  },
  /* get one data house from database */
  getOneHouse: function (req, res) {
    modelHouse.findOne({ _id: req.params.id }, function (err, data) {
      if (err) throw err
      res.json(data)
    })
  },
  /* create one house from database */
  createOneHouse: function (req, res) {
    let newHouse = modelHouse({
      name: req.body.name,
      location: req.body.location,
      description: req.body.description,
      imageUrl: req.body.imageUrl,
      lat: req.body.lat,
      lng: req.body.lng
    })

    newHouse.save(function (err, data) {
      if (err) throw err
      console.log(data)
      res.json(data)
    })
  },
  /* edit one house from database */
  editOneHouse: function (req, res) {
    modelHouse.findOneAndUpdate({ _id: req.body.id },
      {
        $set: {
          name: req.body.name,
          location: req.body.location,
          description: req.body.description
        }
      }, {new: true}, function (err, data) {
        if (err) throw err
        res.json(data)
      })
  },
  /* delete one house from database */
  deleteOneHouse: function (req, res) {
    modelHouse.findOneAndRemove({ _id: req.params.id }, function (err, data) {
      if (err) throw err
      res.json(data)
    })
  }
}

module.exports = controllerHouse
