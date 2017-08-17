const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const EventEmitter = require('events');
var moment = require('moment');
var log = console.log.bind(console);

class MyEmitter extends EventEmitter { }
const myEmitter = new MyEmitter();

myEmitter.once('event', (a, b) => {
  console.log('an event occurred!', this);
});

myEmitter.on('event', (a, b) => {
  console.log('an event occurred2!', this);
});

process.on('uncaughtException', (err) => {
  console.error('whoops! there was an error');
});


myEmitter.emit('event', 'a', 'b');
console.log('max listener = ' + myEmitter.getMaxListeners());

console.log('testing github 3....');

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
console.log(moment().format('dddd'));

http.get('http://nodejs.org/dist/index.json', (res) => {
  const { statusCode } = res;
  const contentType = res.headers['content-type'];

  log(statusCode)
  log(contentType)

  res.setEncoding('utf8');
  let rawData = '';
  res.on('data', (chunk) => { rawData += chunk} );
  res.on('end', () => {
    try {
      const parsedData = JSON.parse(rawData);
      log(parsedData);
    } catch (e) {
      log(e.message);
    }
  });
});


