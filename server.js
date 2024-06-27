const { Client, Server } = require('node-osc');
const fs = require('fs');
const http = require('http');
const path = require('path');
const WebSocket = require('ws');
const os = require('os');
const url = require('url');


const index1Path = path.join(__dirname, 'index1.html');
const index2Path = path.join(__dirname, 'index2.html');

const index1 = fs.readFileSync(index1Path, 'utf-8');
const index2 = fs.readFileSync(index2Path, 'utf-8');


const display1Path = path.join(__dirname, 'display1.html');
const display2Path = path.join(__dirname, 'display2.html');

const display1 = fs.readFileSync(display1Path, 'utf-8');
const display2 = fs.readFileSync(display2Path, 'utf-8');









function getLocalIPv4() {
    const interfaces = os.networkInterfaces();
    for (const name of Object.keys(interfaces)) {
        for (const iface of interfaces[name]) {
            if (iface.family === 'IPv4' && !iface.internal) {
                return iface.address;
            }
        }
    }
    return '127.0.0.1';
}

const IP4 = getLocalIPv4()


//Declare OSC client at local port 3333 to send to Max
const oscClient = new Client('127.0.0.1', 3333);


//Declare OSC Server at port local 8001 to listen from Max
const oscServer = new Server(8001, '127.0.0.1'); // Replace with your port and IP

// When OSC Server receives a message, send it as a string to all Web Clients
oscServer.on('message', (msg, rinfo) => {
    const msgObj = { type: msg[0], data: msg[1] }
    sendToWebClients(msgObj);
});


//Create HTTP Server, no idea about types
const server = http.createServer((req, res) => {
    let filePath
    switch (req.url) {
        case "/":
            filePath = path.join(__dirname, 'index.html');
            break
        case "/display":
            filePath = path.join(__dirname, 'display.html');
            break
        case "/qrcode.min.js":
            filePath = path.join(__dirname, 'qrcode.min.js');
            break;
        default:
            filePath = path.join(__dirname, req.url);
    }

    let extname = String(path.extname(filePath)).toLowerCase();
    let mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
    };

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
wss.on('connection', (ws, req) => {
    ws.id = Date.now()
    const locationPath = url.parse(req.url).pathname;
    ws.path = locationPath; // Store the path in the ws object
    connectedClients.push(ws)
    if (locationPath === "/display") {
        ws.send(JSON.stringify({ type: 'ip-address', data: IP4 }));
        sendToDisplay({ type: 'htmlFiles', data: [display1, display2] })

    } else {
        sendToWebClients({ type: 'htmlFiles', data: [index1, index2] })

    }
    // On receiving a message from web client, send to Max
    ws.on('message', message => {
        let oscAddress = '/myAddress'; // Replace with your desired OSC address
        let oscMessage;
        if (String(message) === "Click") {
            receiveClick()
        }
        // Ensure the message is in a format compatible with OSC
        oscMessage = String(message); // Convert to string explicitly
        oscClient.send(oscAddress, oscMessage);
        console.log(`Message: ${oscMessage}`)
    });
    ws.on('close', () => {
        connectedClients = connectedClients.filter((client) => client.id != ws.id)
    })
});


//Send data to web clients
function sendToWebClients(data) {
    if (connectedClients.length) {
        for (client of connectedClients) {
            if (client.path === "/") { client.send(JSON.stringify(data)) }

        }
    }
}


function sendToDisplay(data) {
    for (client of connectedClients) {
        if (client.path === "/display") { client.send(JSON.stringify(data)); break }
    }
}

let clickCount = 0
function receiveClick() {
    clickCount++
    console.log(clickCount)
    sendToWebClients({ type: "section", data: clickCount })
}
// Send /reset 0 to max when server starts, resets max counter
oscClient.send("/reset", 0);