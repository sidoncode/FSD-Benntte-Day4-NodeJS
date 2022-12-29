// Readable Stream //
var fs = require('fs');
var data;

// create a readable stream

var readerStream = fs.createReadStream('streamInput.txt')

// set the encoding to be utf-8

readerStream.setEncoding('UTF8');

// Handle stream events -> data, end and error events

readerStream.on('data',function(chunk){

    data = data + chunk;

});

readerStream.on('end',function(){
    console.log(data)
})

readerStream.on('error',function(){
    console.log(data)
})

console.log('Program Ended')