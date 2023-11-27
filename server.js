const { Client } = require('node-osc');
const client = new Client('127.0.0.1', 3333);
const fs = require('fs');
const http = require('http');
const path = require('path');

const OSC = require('node-osc');
const oscServer = new OSC.Server(8000, '127.0.0.1'); // Replace with your port and IP

oscServer.on('message', (msg, rinfo) => {
    sendToWebClient(msg.toString());
});
 
const server = http.createServer((req, res) => {
  let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
  let extname = String(path.extname(filePath)).toLowerCase();
  let mimeTypes = {
      '.html': 'text/html',
      '.js': 'text/javascript',
      '.css': 'text/css',
      // add other mime types as needed
  };

  let contentType = mimeTypes[extname] || 'application/octet-stream';

  fs.readFile(filePath, (error, content) => {
      if (error) {
          if (error.code == 'ENOENT') {
              // File not found
              fs.readFile(path.join(__dirname, '404.html'), (error, content) => {
                  res.writeHead(404, { 'Content-Type': 'text/html' });
                  res.end(content, 'utf-8');
              });
          } else {
              // Some server error
              res.writeHead(500);
              res.end(`Sorry, check with the site admin for error: ${error.code} ..\n`);
          }
      } else {
          // Success
          res.writeHead(200, { 'Content-Type': contentType });
          res.end(content, 'utf-8');
      }
  });
});
server.listen(8000);

const WebSocket = require('ws');
let connectedClient = null;
const wss = new WebSocket.Server({ server });

wss.on('connection', ws => {
  connectedClient = ws;
  ws.on('message', message => {
    let oscAddress = '/myAddress'; // Replace with your desired OSC address
    let oscMessage;
    console.log(message)


    // Ensure the message is in a format compatible with OSC
      oscMessage = String(message); // Convert to string explicitl
      client.send(oscAddress, oscMessage);
  });
  ws.on('close', () => {
    connectedClient = null;
});
});

function sendToWebClient(data) {
  if (connectedClient) {
      connectedClient.send(data);
  }
}
client.send("/reset", 0);


function sendToServer(msg) {
  socket.send(msg);
}