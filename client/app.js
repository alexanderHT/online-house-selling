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
      imageUrl: '',
      lat: '',
      lng: ''
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
      x = 0
      y = 0
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
    editOneHouse: function (editid) {},
    preEditOneHouse: function (editid) {
      $('#modal-edit-home').modal('open')
      axios.get(`http://localhost:3000/api/houses/${editid}`)
        .then(function (response) {
          app.editHouse.name = response.data.name
          app.editHouse.description = response.data.description
          app.editHouse.imageUrl = response.data.imageUrl
          // add maps to modal form
          var map2 = new GMaps({
            div: '#map2',
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
          // add marker
          map.addMarker({
            lat: -12.043333,
            lng: -77.028333,
            title: 'Lima',
            click: function (e) {
              alert('You clicked in this marker')
            }
          })
        })
        .catch(function (error) {
          console.log(error)
        })
    }
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
