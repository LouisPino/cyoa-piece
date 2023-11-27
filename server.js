const { Client, Server } = require('node-osc');
const fs = require('fs');
const http = require('http');
const path = require('path');
const WebSocket = require('ws');

//Declare OSC client at local port 3333 to send to Max
const client = new Client('127.0.0.1', 3333);


//Declare OSC Server at port local 8000
const oscServer = new Server(8000, '127.0.0.1'); // Replace with your port and IP

// When OSC Server receives a message, send it as a string to Web Client
oscServer.on('message', (msg, rinfo) => {
    sendToWebClient(msg.toString());
});


//Create Web Server, 
const server = http.createServer((req, res) => {
    let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
    let extname = String(path.extname(filePath)).toLowerCase();
    let mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
    };

    // 
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

// Listen on port 8000
server.listen(8000);


// Initiate Web Socket Server 
let connectedClients = [];
const wss = new WebSocket.Server({ server });

// On connection to web client, 
wss.on('connection', ws => {
    connectedClients.push(ws)
    ws.on('message', message => {
        let oscAddress = '/myAddress'; // Replace with your desired OSC address
        let oscMessage;


        // Ensure the message is in a format compatible with OSC
        oscMessage = String(message); // Convert to string explicitl
        client.send(oscAddress, oscMessage);
        console.log(oscMessage)
    });
    ws.on('close', () => {
        connectedClients = [];
    });
});



//Send data to Web client
function sendToWebClient(data) {
    if (connectedClients.length) {
        for (webClient of connectedClients) {
            webClient.send(data)

        }
        client.send(data);
    }
}



// // Initiate Web Socket Server 
// let connectedClient = null;
// const wss = new WebSocket.Server({ server });

// // On connection to web client, 
// wss.on('connection', ws => {
//     connectedClient = ws;
//     ws.on('message', message => {
//         let oscAddress = '/myAddress'; // Replace with your desired OSC address
//         let oscMessage;


//         // Ensure the message is in a format compatible with OSC
//         oscMessage = String(message); // Convert to string explicitl
//         client.send(oscAddress, oscMessage);
//         console.log(oscMessage)
//     });
//     ws.on('close', () => {
//         connectedClient = null;
//     });
// });



// //Send data to Web client
// function sendToWebClient(data) {
//     if (connectedClient) {
//         connectedClient.send(data);
//     }
// }

// Send /reset 0 to max when server starts, resets max counter
client.send("/reset", 0);