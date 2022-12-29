buf = new Buffer.alloc(256);
len = buf.write("this is a sample String")

console.log("Octets written: " + len)

console.log("*********************************")



buf1 = new Buffer.alloc(26)
for (var i =0; i<26;i++){

    buf1[i] = i +97
}

console.log(buf1.toString('ascii')); //abcdefghijklmnopqrstuvwxyz
console.log(buf1.toString('ascii',0.5)); // abcde
console.log(buf1.toString('utf8',0.5));// abcde
console.log(buf1.toString(undefined,0,5));// abcde



console.log("Converting Buffer Buf to a JSON Object")

var buf2 = new Buffer("Simply Writing the - sentence")
var json = buf2.toJSON(buf2);

console.log(json)




console.log("Concatenating the Buffers")

var buffers1 = new Buffer("Hi");
var buffers2 = new Buffer("This is Siddharth");
var buffers3 = new Buffer("Happy Learning! :)");

// concatenating the buffers //

var buffers4 = Buffer.concat([buffers1,buffers2])

console.log("Buffer4 Content -> " + buffers4.toString)



console.log("Comparing the Buffers")

var buffers5 = new Buffer("ABC");
var buffers6 = new Buffer("ABCD");
//var results = buffer5.compare(buffers6)

// putting up the conditional statement //

if(result < 0){
    console.log(buffers5 + "comes before " + buffers6)
}
else if(result ==0){
    console.log(buffer5 + " is same as " + buffers6)
}
else{
    console.log(buffers5 + "comes after " + buffers6)
}


// Copying the Buffer //

console.log("Copying the Buffer")

var buffer7 = new Buffer('ABC')

var buffer8 = new Buffer.alloc(3)

buffer7.copy(buffer8)





