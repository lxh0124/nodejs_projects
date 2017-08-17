const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const EventEmitter = require('events');
const date = require('./date.js');

date.format(new Date);


class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

myEmitter.once('event', (a, b) => {
  console.log('an event occurred!', this );
});

myEmitter.on('event', (a, b) => {
  console.log('an event occurred2!', this );
});


process.on('uncaughtException', (err) => {
  console.error('whoops! there was an error');
});


myEmitter.emit('event', 'a', 'b');
console.log('max listener = ' + myEmitter.getMaxListeners());


const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.on('connection', (stream) => {
  console.log('someone connected!');
});

console.log('testing github....');

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
