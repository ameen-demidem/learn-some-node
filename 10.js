const net = require('net');
const moment = require('moment');

const server = net.createServer(socket => {
  socket.end(moment().format('YYYY-MM-DD HH:mm') + '\n');
});

const port = Number(process.argv[2]) || 8000;
server.listen(port);
