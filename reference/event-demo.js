const EventEmitter = require('events')

class MyEmitter extends EventEmitter {}

// init object
const myEmitter = new MyEmitter()
// add listener
myEmitter.on('event', () => {
  console.log('an event ocurred')
})
// call event
myEmitter.emit('event')
myEmitter.emit('event')
myEmitter.emit('event')
myEmitter.emit('event')
