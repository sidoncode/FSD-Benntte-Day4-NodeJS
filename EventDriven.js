//impor the events module //
var events = require('events')

// create a eventEmmiters object
var eventsEmmiters = new events.EventEmitter();

// create a event handler as follows
var connectHandler = function connected(){
    console.log('Connection Succesful')

    // fire the data_received event
    eventsEmmiters.emit('data_received')

}


// bind the connection event with the handler
eventsEmmiters.on('connection',connectHandler);

// Bind the data_recieved event with the annoymous function //
eventsEmmiters.on('data_received',function(){

    console.log('data received successfully')
});

// Fire the connection Event
eventsEmmiters.emit('connection')


console.log("Program Ended")