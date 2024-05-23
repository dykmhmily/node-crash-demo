const http = require('http')

// create server instance
const server = http.createServer((req, res) => {
  res.end('hello world!')
})

server.listen(5000, () => {
  console.log('server listening....')
})
