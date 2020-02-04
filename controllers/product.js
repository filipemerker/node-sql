const Product = require('../models/Product')

exports.add = async (req, res) => {
  try {
    const { title = '', description = '' } = req.body
    const product = new Product({ title, description })

    await product.save()
    res.redirect('/')
  } catch (err) {
    console.log(err)
  }
}

exports.new = (req, res) => {
  res.render('add-product', { pageTitle: 'Add Product', path: '/admin/add-product' })
}