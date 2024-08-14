const fs = require('fs');
const http = require('http');
const path = require('path');
const WebSocket = require('ws');
const url = require('url');
const IP4 = require('./helpers/ip4.js')
const [locations] = require("./helpers/htmlLoader.js")

const server = http.createServer((req, res) => {

    let filePath
    switch (req.url) {
        case "/":
            filePath = path.join(__dirname, './mobile/default.html');
            break
        case "/display":
            filePath = path.join(__dirname, './display/default.html');
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
        sendToDisplay({ type: 'htmlFiles', data: { locations: locations } })

    } else {
        sendToWebClients({ type: 'htmlFiles', data: { locations: locations } })
    }
    // On receiving a message from web client, send to Max
    ws.on('message', message => {
        let oscAddress = '/max'; // Replace with your desired OSC address
        let oscMessage;
        if (String(message) === "Click") {
        }
        // Ensure the message is in a format compatible with OSC
        oscMessage = String(message); // Convert to string explicitly
        oscClient.send(oscAddress, oscMessage);
        console.log(`Message: ${oscMessage}`)
        if (voting) {
            if (oscMessage === "choice1") {
                choice1++
            }
            else {
                choice2++
            }
        }
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


function sendSectionChange(scene) {
    sendToWebClients({ type: "section", data: scene })
    sendToDisplay({ type: "section", data: scene })
}

let voting = false
let choice1 = 0
let choice2 = 0

function triggerVote() {
    voting = true
    sendToWebClients({ type: "section", data: "Vote", choices: ["choice 1", "choice 2"] }) // send currentLocation.choices[0] and [1]
    sendToDisplay({ type: "section", data: "Vote" }) // in display, make visible the choice prompt + image
    setTimeout(() => {
        if (choice1 === choice2) { endVote(2) }
        else { endVote(choice1 > choice2 ? 0 : 1) }
        voting = false;
        choice1 = 0;
        choice2 = 0;
    }, 5000)
}

function endVote(winner) {
    switch (winner) {
        case (0):
            // choice 1
            sendToWebClients({ type: "selection", data: winner })
            sendToDisplay({ type: "selection", data: winner })

            console.log("CHOICE 1 WINS")
            break
        case (1):
            // choice 2
            console.log("CHOICE 2 WINS")
            break
        case (2):
            // tie
            console.log("IT'S A TIE")
            break
    }
}





const { Client, Server } = require('node-osc');

//Declare OSC client at local port 3333 to send to Max
const oscClient = new Client('127.0.0.1', 3333);

//Declare OSC Server at port local 8001 to listen from Max
const oscServer = new Server(8001, '127.0.0.1'); // Replace with your port and IP

// When OSC Server receives a message, send it as a string to all Web Clients
oscServer.on('message', (msg, rinfo) => {
    console.log(msg)
    if (msg[0] === "scene") {
        sendSectionChange(msg[1])
    } else if (msg[0] === "vote") {
        triggerVote()
    }
    const msgObj = { type: msg[0], data: msg[1] }
    sendToWebClients(msgObj);
});



module.exports = [
    sendToWebClients,
    sendToDisplay,
    sendSectionChange
]
