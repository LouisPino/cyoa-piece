const { Client } = require('node-osc');
const client = new Client('127.0.0.1', 3333);
const fs = require('fs');

const OSC = require('node-osc');
const oscServer = new OSC.Server(8000, '127.0.0.1'); // Replace with your port and IP

oscServer.on('message', (msg, rinfo) => {
    console.log(`${msg}`);
    sendToWebClient(msg.toString());
});
 
const {createServer} = require("http");
let server = createServer((request, response) => {
  fs.readFile('index.html', (err, data) => {
      if (err) {
          response.writeHead(500);
          response.end('Error loading index.html');
      } else {
          response.writeHead(200, {"Content-Type": "text/html"});
          response.end(data);
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

    // Ensure the message is in a format compatible with OSC
      oscMessage = String(message); // Convert to string explicitl
    console.log(oscMessage)
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