const { Client } = require('node-osc');
const client = new Client('127.0.0.1', 3333);

const OSC = require('node-osc');

const oscServer = new OSC.Server(8000, '127.0.0.1'); // Replace with your port and IP

oscServer.on('message', (msg, rinfo) => {
    console.log(`${msg}`);
    sendToWebClient(msg.toString());
});

const {createServer} = require("http");
let server = createServer((request, response) => {
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(`
  <button id="green-btn" onclick="sendToServer('A')" style="background-color: green; height: 100px; width: 100px;"> A </button>
  <button id="red-btn" onclick="sendToServer('B')" style="background-color: red; height: 100px; width: 100px;"> B </button>
  <div id="numberDisplay">0</div>

  <script>
  const greenBtnContent = ["A", "Left", "Swamp", "Attack!"]
  const redBtnContent = ["B", "Right", "Cave", "Run!"]
    let socket = new WebSocket('ws://localhost:8000');
    socket.onopen = function(e) {
      console.log("Connection established!");
    };

    socket.onmessage = function(event) {
      let maxMsg = event.data.split(",")
      console.log(maxMsg)
      if(maxMsg[0] === "/newSection"){
      document.getElementById('green-btn').textContent = greenBtnContent[maxMsg[1]];
      document.getElementById('red-btn').textContent = redBtnContent[maxMsg[1]];
      }
      document.getElementById('numberDisplay').textContent = event.data.slice(4);
  };
  
  function sendToServer(msg) {
      socket.send(msg);
  }

    function sendToServer(msg) {
      socket.send(msg);
    }
  </script>
    `);
  response.end();
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
