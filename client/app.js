var x = ''
var y = ''

var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    houses: [],
    inputHouse: {
      name: '',
      location: '',
      description: '',
      imageUrl: ''
    },
    editHouse: {
      name: '',
      location: '',
      description: '',
      imageUrl: ''
    }
  },
  methods: {
    getAllHouses: function () {
      axios.get('http://localhost:3000/api/houses')
        .then(function (response) {
          app.houses = response.data
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    createOneHouse: function () {
      axios.post('http://localhost:3000/api/houses', {
        name: app.inputHouse.name,
        location: app.inputHouse.location,
        description: app.inputHouse.description,
        imageUrl: app.inputHouse.imageUrl,
        lat: x,
        lng: y
      })
        .then(function (response) {
          // response from server
          app.houses.push(response.data)

          // reset form create house
          app.inputHouse.name = ''
          app.inputHouse.location = ''
          app.inputHouse.description = ''
          app.inputHouse.imageUrl = ''
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    deleteOneHouse: function (inputid) {
      axios.delete(`http://localhost:3000/api/houses/${inputid}`, {})
        .then(function (response) {
          console.log(response)
          document.getElementById(`${response.data._id}`).remove()
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    editOneHouse: function (editid) {}
  }
})

app.getAllHouses()

// gmaps with modal combination
function openModalCreate () {
  $('#modal-create-home').modal('open')
  var map = new GMaps({
    div: '#map',
    zoom: 11,
    lat: -6.230259,
    lng: 106.8537713,
    click: function (e) {
      map.removeMarkers()
      map.addMarker({
        lat: e.latLng.lat(),
        lng: e.latLng.lng()
      })
      console.log(e.latLng.lat())
      console.log(e.latLng.lng())
      x = e.latLng.lat()
      y = e.latLng.lng()
    }
  })
}
