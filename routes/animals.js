const router = require('express').Router()
const animalsCtrl = require('../controllers/animals.js')

router.get('/', animalsCtrl.index)
router.post('/', animalsCtrl.create)
router.put('/:id', animalsCtrl.update)
router.delete('/:id', animalsCtrl.delete)

module.exports = router