console.log('Bannu')
console.log("hi")
let a='10'

console.log(typeof a)
console.log(typeof Number(a))

const path=require('path')
var pathobj=path.parse(__filename)
console.log(pathobj)

const os1=require('os')
console.log(os1.totalmem())
console.log(os1.freemem())
console.log(os1.uptime())
console.log(os1.type())
console.log(os1.release())

const eventemitter=require('events')
const { EventEmitter } = require('stream')
const emitter=new eventemitter()
emitter.on('Message',function(){
    console.log('heyy listened')
})
emitter.emit('Message')
