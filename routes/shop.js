const path = require('path')
const express = require('express')
const adminData = require('./admin')

const router = express.Router()

router.get('/', (req, res) => {
  const prods = adminData.products

  res.render('shop', { prods, pageTitle: 'Shop', path: '/' })
})

exports.routes = router
