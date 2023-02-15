const router = require('express').Router()
const animalsCtrl = require('../controllers/animals.js')

router.post('/', animalsCtrl.create)

module.exports = router