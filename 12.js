const http = require('http');
const map = require('through2-map');

const port = Number(process.argv[2]) || 8000;
const server = http.createServer((req, res) => {
  if (req.method !== 'POST') return res.end();

  res.writeHead(200, {'Content-Type': 'text/plain'});
  req
    .pipe(map(chunk => chunk.toString().toUpperCase()))
    .pipe(res);
});

server.listen(port);

