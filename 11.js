const http = require('http');
const fs = require('fs');

const port = Number(process.argv[2]) || 8000;
const fileName = process.argv[3] || './11.html';
const server = http.createServer((req, res) => {
  fs.createReadStream(fileName).pipe(res);
});

server.listen(port);

