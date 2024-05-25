const path = require('path')
const http = require('http')
const fs = require('fs')
const uuid = require('uuid')
const ContentType = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': '	text/javascript',
  '.json': 'application/json',
  '.jpg': 'image/jpeg',
  '.png': 'image/png',
}

const server = http.createServer((req, res) => {
  let url = req.url === '/' ? '/index.html' : req.url

  let filePath = path.join(__dirname, 'public', url)

  let extname = path.extname(filePath)

  let contentType = ContentType[extname]

  console.log(contentType)
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // page not found
        fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
          if (err) throw new Error(err)
          res.writeHead(200, { 'Content-type': ContentType['.html'] })
          res.end(content, 'utf-8')
        })
      } else {
        // some server error
        res.writeHead(500)
        res.end(`Server Error: ${err.code}`)
      }
    } else {
      res.writeHead(200, { 'Content-type': contentType })
      res.end(content, 'utf-8')
    }
  })

  // if (req.url === '/') {
  //   let filePath = path.parse(path.join(__dirname, 'public', 'index'))
  //   console.log(filePath)
  //   fs.readFile(path.join(__dirname, 'public', 'index'), (err, content) => {
  //     if (err) {
  //       throw new Error(err)
  //     }
  //     res.writeHead(200, { 'Content-type': 'text/html' })
  //     res.end(content)
  //   })
  // }

  // if (req.url === '/about') {
  //   fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
  //     res.writeHead(200, { 'Content-type': 'text/html' })
  //     res.end(content)
  //   })
  // }

  // // restful api
  // if (req.url === '/api/users') {
  //   const users = [
  //     { name: 'Alice', age: 40, id: uuid.v4() },
  //     { name: 'Benny', age: 30, id: uuid.v4() },
  //     { name: 'Catherine', age: 20, id: uuid.v4() },
  //   ]
  //   res.writeHead(200, { 'Content-type': 'application/json' })
  //   res.end(JSON.stringify(users))
  // }
  // let filePath
})

const PORT = process.env.PORT || 5000

server.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`)
})
