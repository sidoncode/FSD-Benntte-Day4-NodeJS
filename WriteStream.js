var fs = require('fs');
var data = 'Hi Faculties!'

// Create a writable Stream
var writableStream = fs.createWriteStream("StreamOutput.txt")

// write the data to stream with encoding to be UTF8

writableStream.write(data,'UTF8')

// mark the EOF ( end of FILE)
writableStream.end()

// Handle stream events -> finish and error

writableStream.on('finish',function(){

    console.log("write the completed")
})

writableStream.on('error',function(err){

    console.log(err.stack);
})

console.log("Program Ended")
