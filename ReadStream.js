var fs = require('fs');

var data;

// create a readble stream

var readerStream = fs.createReadStream('ReadStreamInput.txt');

// set the endcoding to be utf-8
readerStream.setEncoding('UTF8');


readerStream.on('data',function(chunk) {

    data = data + chunk;

});

readerStream.on('end',function() {
    console.log(data)
})


readerStream.on('error',function() {
    console.log(data)
})

console.log("Program Ended Here line 30")