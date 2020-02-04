const router = require('express').Router()
const path = require('path')
const paths = require('../util/paths')

router.use((req, res) => {
    res.render('404', { pageTitle: 'Not found' })
})

exports.routes = router