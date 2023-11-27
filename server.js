const { Client, Server } = require('node-osc');
const fs = require('fs');
const http = require('http');
const path = require('path');
const WebSocket = require('ws');

//Declare OSC client at local port 3333 to send to Max
const oscClient = new Client('127.0.0.1', 3333);


//Declare OSC Server at port local 8001 to listen from Max
const oscServer = new Server(8001, '127.0.0.1'); // Replace with your port and IP

// When OSC Server receives a message, send it as a string to all Web Clients
oscServer.on('message', (msg, rinfo) => {
    sendToWebClients(msg.toString());
});


//Create HTTP Server, no idea about types
const server = http.createServer((req, res) => {
    let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
    let extname = String(path.extname(filePath)).toLowerCase();
    let mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
    };

    // no idea
    let contentType = mimeTypes[extname] || 'application/octet-stream';

    //Get html/css/js and write as response to client.
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

// Listen on port 8000 for http requests
server.listen(8000);


// Initiate Web Socket Server to piggyback on HTTP Server port
const wss = new WebSocket.Server({ server });
let connectedClients = [];

// On connection to web client, add to list of web clients
wss.on('connection', ws => {
    connectedClients.push(ws)
    // On receiving a message from web client, send to Max
    ws.on('message', message => {
        let oscAddress = '/myAddress'; // Replace with your desired OSC address
        let oscMessage;

        // Ensure the message is in a format compatible with OSC
        oscMessage = String(message); // Convert to string explicitl
        oscClient.send(oscAddress, oscMessage);
        console.log(oscMessage)
    });
    ws.on('close', () => {
    });
});


//Send data to all web clients
function sendToWebClients(data) {
    if (connectedClients.length) {
        for (webClient of connectedClients) {
            webClient.send(data)

        }
    }
}

// Send /reset 0 to max when server starts, resets max counter
oscClient.send("/reset", 0);