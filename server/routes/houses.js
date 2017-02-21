var express = require('express')
var router = express.Router()
const controllerHouse = require('../controllers/controller.house.js')

/* GET houses listing. */
router.get('/', controllerHouse.getAllHouse)
/* GET one house */
router.get('/:id', controllerHouse.getOneHouse)
/* create one data house */
router.post('/', controllerHouse.createOneHouse)
/* edit one data house */
router.put('/', controllerHouse.editOneHouse)
/* delete one data house */
router.delete('/:id', controllerHouse.deleteOneHouse)

module.exports = router
