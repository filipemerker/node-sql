const FileStorage = require('../helpers/FileStorage')

class Product {
  constructor({ title, description }) {
    this.title = title
    this.description = description
  }

  getData = () => {
    const { title, description } = this

    return { title, description }
  }

  save = () => FileStorage.appendToFile(this.getData())

  static fetchAll = () => FileStorage.readFile()
}

module.exports = Product