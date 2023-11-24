const { Client } = require('node-osc');
const client = new Client('127.0.0.1', 3333);

const OSC = require('node-osc');

const oscServer = new OSC.Server(41234, '127.0.0.1'); // Replace with your port and IP

oscServer.on('message', (msg, rinfo) => {
    console.log(`Message received: ${msg}`);
    // Process the message as needed
});

console.log('OSC Server is listening.');

const {createServer} = require("http");
let server = createServer((request, response) => {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(`
  <button onclick="sendToServer('A')" style="background-color: green; height: 100px; width: 100px;"> A </button>
  <button onclick="sendToServer('B')" style="background-color: red; height: 100px; width: 100px;"> B </button>

  <script>
    let socket = new WebSocket('ws://localhost:8000');
    socket.onopen = function(e) {
      console.log("Connection established!");
    };
    function sendToServer(msg) {
      socket.send(msg);
    }
  </script>
    `);
  response.end();
});
server.listen(8000);
console.log("Listening! (port 8000)");


const WebSocket = require('ws');

const wss = new WebSocket.Server({ server });

wss.on('connection', ws => {
  ws.on('message', message => {
    let oscAddress = '/myAddress'; // Replace with your desired OSC address
    let oscMessage;

    // Ensure the message is in a format compatible with OSC
      oscMessage = String(message); // Convert to string explicitl
      console.log(message)
    client.send(oscAddress, oscMessage);
  });
});