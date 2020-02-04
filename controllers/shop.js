const Product = require('../models/Product')

exports.get404 = (req, res) => {
    res.render('404', { pageTitle: 'Not found' })
}

exports.getHome = async (req, res) => {
  try {
    const prods = await Product.fetchAll()
    console.log(prods)

    res.render('shop', { prods, pageTitle: 'Shop', path: '/' })
  } catch(err) {
    console.log(err)
  }
  
}