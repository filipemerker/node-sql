const path = require('path')

const root = path.dirname(process.mainModule.filename)

module.exports = {
    root,
    views: path.join(root, 'views'),
}