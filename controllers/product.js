const Product = require('../models/Product')

exports.add = (req, res) => {
  const { title = '', description = '' } = req.body
  const product = new Product({ title, description })

  product.save()
  res.redirect('/')
}

exports.new = (req, res) => {
  res.render('add-product', { pageTitle: 'Add Product', path: '/admin/add-product' })
}