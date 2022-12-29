var events = require('events')

var eventEmmiter = new events.EventEmitter();


// listener  #1

var listener1 = function listener1(){
    console.log('listener1 executed successfully')
}


// listener #2
var listener2 = function listener2(){
    console.log('listener2 executed successfully')
}

// Bind the connection event with the listner1 function
eventEmmiter.addListener('connection',listener1)

// Bind the connection event with the listner2 function
eventEmmiter.addListener('connection',listener2)

var eventListeners = require('events').EventEmitter.listenerCount(eventEmmiter,'connection')
console.log(eventListeners + "Listners listenining to Connection Event")

// fire the connection event
eventEmmiter.emit('connection')

// Remove the binding of listener1 function
eventEmmiter.removeListener('connection', listener1)
console.log("Listener1 will not listen now")

// fire the connection event for the other listener //
eventListeners = require('events').EventEmitter.listenerCount(eventEmmiter,'connection')
console.log(eventListeners + " listners listening to connection Event");

console.log('Program Ended')








