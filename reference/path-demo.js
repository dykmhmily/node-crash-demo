const path = require('path')

// basename
console.log(path.basename(__filename))

// dirname
console.log(path.dirname(__filename))

// extension
console.log(path.extname(__filename))

// path object
const parsePath = path.parse(__filename)
console.log(parsePath)

// resolve
console.log(path.resolve(__dirname, 'reference', 'path_demo.js'))
console.log(path.resolve(__dirname, '../index.js'))
