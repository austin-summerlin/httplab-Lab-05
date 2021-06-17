/* eslint-disable keyword-spacing */
const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');
const fsPromises = require('fs').promises;

const app = net.createServer(socket => {
  socket.on('data', data => {
    const request = parseRequest(data.toString());

    if (request.method === 'GET' && request.path === '/') {
      socket.end(createResponse({ body: 'hi', contentType: 'text/plain' }));

    } else if (request.method === 'POST' && request.path === '/echo') {
      socket.end(createResponse({ body: request.body, contentType: 'text/plain' }));

    } else if (request.method === 'GET' && request.path === '/red') {
      socket.end(createResponse({ body: '<h1>red</h1>' }));

    } else if (request.method === 'GET' && request.path === '/green') {
      socket.end(createResponse({ body: '<h1>green</h1>' }));

    } else if (request.method === 'GET' && request.path === '/blue') {
      socket.end(createResponse({ body: '<h1>blue</h1>' }));
    
    } else if (request.method === 'GET' && request.path === '/index.html') {
      return fsPromises.readFile('public/index.html', 'utf8')
        .then(contents => socket.end(createResponse({ body: contents })))
        .catch(err => console.log(err));
    
    } else {
      socket.end(createResponse({
        body: 'Not Found',
        status: '404 Not Found',
        contentType: 'text/plain'
      }));
    }
  });
});

module.exports = app;
