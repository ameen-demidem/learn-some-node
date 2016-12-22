const http = require('http');
const map = require('through2-map');
const url = require('url');
const moment = require('moment');

const port = Number(process.argv[2]) || 8000;
const server = http.createServer((req, res) => {
  if (req.method !== 'GET') {
    res.writeHead(405, {'Content-Type': 'text/plain'});
    res.end('Expecting GET requests only!');
  }

  const parsedUrl =  url.parse(req.url, true);

  switch (parsedUrl.pathname) {
    case '/api/parsetime':
      respond(parsedUrl.query.iso, res);
      break;

    case '/api/unixtime':
      respond(parsedUrl.query.iso, res, true);
      break;

    default:
      res.writeHead(405, {'Content-Type': 'text/plain'});
      res.end('Wrong route!');
      break;
  }
});

server.listen(port);


function respond (iso, res, unixtime=false) {
  if (iso) {
    const time = moment(iso);
    res.writeHead(200, {'Content-Type': 'application/json'});
    if (unixtime) {
      res.end(JSON.stringify({
        unixtime: time.valueOf()
      }));
    } else {
      res.end(JSON.stringify({
        hour: time.hours(),
        minute: time.minutes(),
        second: time.seconds(),
      }));
    }
  } else {
    res.writeHead(405, {'Content-Type': 'text/plain'});
    res.end('Wrong query!');
  }
}
