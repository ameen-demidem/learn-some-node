const http = require('http');

const url = process.argv[2] || '';

http.get(url, response => {
  response.setEncoding('utf8');
  response.on('error', error => console.error('Something wrong heppened: ', error));
  response.on('data', data => console.log(data));
});
