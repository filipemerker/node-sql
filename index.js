const path = require('path')
const express = require('express')
const { urlencoded } = require('body-parser')

const app = express()

app.set('view engine', 'pug')
app.use(urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', require('./routes/admin').routes)
app.use(require('./routes/shop').routes)
app.use(require('./routes/general').routes)

app.listen(3000)
