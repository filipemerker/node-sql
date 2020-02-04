const router = require('express').Router()
const productController = require('../controllers/product')

router.get('/add-product', productController.new)

router.post('/add-product', productController.add)

module.exports = router