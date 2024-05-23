const fs = require('fs')
const path = require('path')

// create folder
fs.mkdir(path.join(__dirname, 'test'), {}, (err) => {
  if (err) throw err
  console.log('Folder create...')
})

// create and write to file
fs.writeFile(path.join(__dirname, 'test', 'hello.txt'), 'Hello World!', (err) => {
  if (err) throw err
  console.log('File written...')

  // append file
  fs.appendFile(path.join(__dirname, 'test', 'hello.txt'), 'I love Node.js!', (err) => {
    if (err) throw err
    console.log('File written...')
  })
})

// this will overwrite exist content
// if u wanna append, use above appendFile API
fs.writeFile(path.join(__dirname, 'test', 'hello.txt'), 'I love Node.js!', (err) => {
  if (err) throw err
  console.log('File create...')
})

// read file
// second argument sets utf8, default will be raw buffer
fs.readFile(path.join(__dirname, 'test', 'hello.txt'), 'utf8', (err, data) => {
  if (err) throw err
  console.log(data)
})

// rename file
fs.rename(path.join(__dirname, 'test', 'hello.txt'), path.join(__dirname, 'test', 'helloWorld.txt'), (err) => {
  if (err) throw err
  console.log('File renamed...')
})
