const url = require('url')

const myUrl = new URL('https://mywebsite.com:8080/homepage.html?id=100&status=active')

// serialized url
console.log(myUrl.href)
console.log(myUrl.toString())

// host (root domain)
console.log(myUrl.host)
// hostname (does not get port)
console.log(myUrl.hostname)
// pathname
console.log(myUrl.pathname)
// serialized search
console.log(myUrl.search)
// params object
console.log(myUrl.searchParams)
// add param
myUrl.searchParams.append('abc', '123')
console.log(myUrl.searchParams)
// search params iteration
myUrl.searchParams.forEach((ele, key) => {
  console.log(`${key}: ${ele}`)
})
