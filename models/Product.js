const fs = require('fs').promises
const path = require('path')

const products = []
const productsPath = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json')

class Product {
  constructor({ title, description }) {
    this.title = title
    this.description = description
  }

  getData = () => {
    const { title, description } = this

    return { title, description }
  }

  save = () => new Promise(async (resolve, reject) => {
    try {
      const products = await (
        fs
          .readFile(productsPath)
          .catch(() => JSON.stringify([]))
          .then(content => JSON.parse(content))
      )

      await fs.writeFile(productsPath, JSON.stringify([
        ...products,
        this.getData()
      ]))

      resolve(this)
    } catch (err) {
      reject(err)
    }
  })

  static fetchAll = () => (
    fs
      .readFile(productsPath)
      .catch(() => JSON.stringify([]))
      .then(content => JSON.parse(content))
  )
}

module.exports = Product