const fs = require('fs');
const http = require('http');
const path = require('path');
const WebSocket = require('ws');
const url = require('url');
const IP4 = require('./helpers/ip4.js')
const [locations, mobileExtras, displayExtras] = require("./helpers/htmlLoader.js")
const [skinOptions, characters] = require("./characters/default.js")
let currentLocation
const voteLength = 10000

/////////////////////////Initialize server
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
        sendToDisplay({ type: 'htmlFiles', data: { locations: locations, extras: displayExtras } })

    } else {
        sendToWebClients({ type: 'htmlFiles', data: { locations: locations, extras: mobileExtras } })
        ws.send(JSON.stringify({ type: "location", data: { currentLocation: currentLocation } }))
    }
    // On receiving a message from web client, send to Max
    ws.on('message', message => {
        console.log(`Client Message: ${message}`)
        if (voting) {
            handleVote(message)
        }
    });
    ws.on('close', () => {
        connectedClients = connectedClients.filter((client) => client.id != ws.id)
    })
});






///////////////////////////Sending data to web clients
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


function sendSectionChange(location) {
    currentLocation = location
    sendToWebClients({ type: "section", data: location })
    sendToDisplay({ type: "section", data: location })
}




////////////////////////voting
let voting = false
let choices = { choice1: 0, choice2: 0, choice3: 0, choice4: 0, choice5: 0, }

function handleVote(vote) {
    choices[vote] += 1
}


function triggerVote() {
    voting = true
    sendToWebClients({ type: "vote", data: { type: "path" } })
    sendToDisplay({ type: "vote", data: { type: "path" } }) // in display, make visible the choice prompt + image
    setTimeout(() => {
        endVote(tallyVotes())
    }, voteLength)
}

function endVote(winner) {
    switch (winner) {
        case (0):
            // choice 1
            oscClient.send("/switch", currentLocation.paths[0])
            console.log("CHOICE 1 WINS")
            break
        case (1):
            // choice 2
            oscClient.send("/switch", currentLocation.paths[1])
            console.log("CHOICE 2 WINS")
            break
    }
    voting = false;
    resetChoices()
}

function skinVoting() {
    Object.entries(skinOptions).forEach(([k, v], index) => {
        setTimeout(() => {
            triggerSkinVote(k, v);
        }, index * voteLength * 2);

        // Move this logic outside the loop so it only runs once after all voting rounds
        if (index === Object.keys(skinOptions).length - 1) {
            setTimeout(() => {
                oscClient.send("/switch", "kingdom");
                voting = false;
            }, (index + 1) * voteLength * 2); // Ensure this runs after the last vote
        }
    });
}

function resetChoices() {
    for (let key in choices) {
        choices[key] = 0;
    }
}
const choiceMap = {
    choice1: 0,
    choice2: 1,
    choice3: 2,
    choice4: 3,
    choice5: 4,
}

function tallyVotes() {
    return choiceMap[Object.keys(choices).reduce((a, b) => choices[a] >= choices[b] ? a : b)]
}

function triggerSkinVote(name, obj) {
    voting = true;
    sendToWebClients({ type: "vote", data: { type: "skin", item: obj } });
    sendToDisplay({ type: "vote", data: { type: "skin", item: obj } }); // Display the choice prompt + image

    setTimeout(() => {
        endSkinVote(tallyVotes(), name, obj)
    }, voteLength - 10); // Ensure this runs close to the end of voteLength
}


function endSkinVote(winner, name, obj) {
    characters[obj.character][name] = skinOptions[name].choices[winner]
    sendToDisplay({ type: "vote", data: { type: "skinChoice", item: obj, winner: winner } }); // Display the choice prompt + image
    resetChoices()
}

function intermissionTrigger(){
    sendToWebClients({ type: "intermission"});
    sendToDisplay({ type: "intermission"}); // Display the choice prompt + image

}


/////////////////////OSC

const { Client, Server } = require('node-osc');

//Declare OSC client at local port 3333 to send to Max
const oscClient = new Client('127.0.0.1', 3333);

//Declare OSC Server at port local 8001 to listen from Max
const oscServer = new Server(8001, '127.0.0.1'); // Replace with your port and IP

// When OSC Server receives a message, send it as a string to all Web Clients
oscServer.on('message', (msg, rinfo) => {
    switch (msg[0]) {
        case "scene":
            let location = locations[msg[1]];
            sendSectionChange(location)
            break
        case "vote":
            switch (msg[1]) {
                case "path":
                    triggerVote()
                    break
                case "skin":
                    skinVoting()
                    break
            }
            break
        case "intermission":
            intermissionTrigger()

    }
    const msgObj = { type: msg[0], data: msg[1] }
    sendToWebClients(msgObj);
});



module.exports = [
    sendToWebClients,
    sendToDisplay,
    sendSectionChange
]
