const router = require('express').Router()
const animalsCtrl = require('../controllers/animals.js')

router.get('/', animalsCtrl.index)
router.post('/', animalsCtrl.create)
router.put('/:id', animalsCtrl.update)

module.exports = router