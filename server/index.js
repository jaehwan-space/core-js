const server = require('live-server');

const parmas = {
  host: 'localhost',
  port: 3000,
  open: false,
  root: './client'
}

server.start(parmas);