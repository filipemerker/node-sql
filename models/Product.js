const products = []

class Product {
  constructor({ title, description }) {
    this.title = title
    this.description = description
  }

  save = () => products.push({
    title: this.title,
    description: this.description,
  })

  static fetchAll = () => new Promise(resolve => resolve(products))
}

module.exports = Product