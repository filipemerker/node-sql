const fs = require('fs').promises
const path = require('path')

class FileStorage {
  static getPath = () => path.join(path.dirname(process.mainModule.filename), 'data', 'products.json')

  static readFile = () => (
    fs
      .readFile(this.getPath())
      .catch(() => JSON.stringify([]))
      .then(content => JSON.parse(content))
  )

  static appendToFile = async content => {
    try {
      const fileContent = await this.readFile()

      return fs.writeFile(this.getPath(), JSON.stringify([ ...fileContent, content ]))
    } catch (err) {
      console.log(err)
    }
  }
}

module.exports = FileStorage