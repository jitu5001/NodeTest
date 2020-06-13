const Person = require('./person');
const Event = require('./reference/event');
console.log('Hello node......');

//object
const personObj = new Person('Jitu', 40);
personObj.Greetings();

//event
const myEventObj = new Event();
myEventObj.on('message',function (callback) {
console.log('listener listened');
})
myEventObj.log('message','Hi')

//http
const http = require('http');
http.createServer((req,res) => {
    console.log("hello world")
    res.end("My first page");
}).listen(5005,() => console.log('Server running'));
