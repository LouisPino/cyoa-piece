const fs = require('fs');
const http = require('http');
const path = require('path');
const WebSocket = require('ws');
const url = require('url');
const IP4 = require('./helpers/ip4.js')
const [locations, mobileExtras, displayExtras, displayScripts, mobileScripts, mobileLocationScripts, displayLocationScripts] = require("./helpers/fileLoader.js")
const [skinOptions, characters] = require("./characters/default.js")
let currentLocation = locations["welcome"]
const voteLength = 10000
let gameScores = []
let history = {
    locationsVisited: [],
    madLibWords: [],
    enemies: {},
    buff: ""
}
let voting = false

const bossMaxHealth = 15
let bossHealth = bossMaxHealth



/////////////////////////Initialize server
const server = http.createServer((req, res) => {
    let filePath
    switch (req.url) {
        case "/":
            filePath = path.join(__dirname, './mobile/html/default.html');
            break
        case "/display":
            filePath = path.join(__dirname, './display/html/default.html');
            break
        case "/qrcode.min.js":
            filePath = path.join(__dirname, 'qrcode.min.js');
            break;
        default:
            // Ensure static files from /assets, /images, /scripts are served
            filePath = path.join(__dirname, req.url);

            // Security check to prevent directory traversal attacks
            if (!filePath.startsWith(__dirname)) {
                res.writeHead(403);
                res.end('Access Denied');
                return;
            }
    }

    let extname = String(path.extname(filePath)).toLowerCase();
    let mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.gif': 'image/gif',
        '.svg': 'image/svg+xml',
        '.woff': 'font/woff',
        '.woff2': 'font/woff2',
        '.ttf': 'font/ttf',
        '.eot': 'application/vnd.ms-fontobject',
        '.otf': 'font/otf',
        '.json': 'application/json'
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
        sendToDisplay({ type: 'initialFileServe', data: { locations: locations, extras: displayExtras, scripts: displayScripts, locationScripts: displayLocationScripts, voteLength: voteLength } })
        sendToDisplay({ type: "section", data: currentLocation })
    } else {
        ws.send(JSON.stringify({ type: 'initialFileServe', data: { locations: locations, extras: mobileExtras, scripts: mobileScripts, voteLength: voteLength, locationScripts: mobileLocationScripts } }))
        if (!voting) {
            ws.send(JSON.stringify({ type: "section", data: currentLocation }))
        } else {
            ws.send(JSON.stringify({ type: "vote", data: { type: "path" } }))

        }
    }

    // On receiving a message from web client
    ws.on('message', message => {
        console.log(`Client Message: ${message}`)
        data = JSON.parse(message)
        switch (data.type) {
            case "vote":
                if (voting) {
                    handleVote(data.val)
                }
                break
            case "sample":
                oscClient.send("/sample", data.val)
                break
            case "game-score":
                gameScores.push(data.val)
                renderGameLeaderboard()
                break
            case "attack":
                handleAttack(data.val)
                break
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
    history.locationsVisited.push(location)
    sendToWebClients({ type: "section", data: location })
    sendToDisplay({ type: "section", data: location })
}





////////////////////////voting
let choices = { choice1: 0, choice2: 0, choice3: 0, choice4: 0, choice5: 0, }

function handleVote(vote) {
    console.log(vote)
    choices[vote] += 1
    sendToDisplay({ type: "vote", data: { type: "vote-cast", choice: vote } }) // in display, make visible the choice prompt + image

}


function triggerVote() {
    voting = true
    sendToWebClients({ type: "vote", data: { type: "path" } })
    sendToDisplay({ type: "vote", data: { type: "path", currentLocation: currentLocation } }) // in display, make visible the choice prompt + image
    setTimeout(() => {
        endVote(tallyVotes())
    }, voteLength)
}

function endVote(winner) {
    switch (winner) {
        case (0):
            // choice 1
            oscClient.send("/switch", currentLocation.paths[0])
            console.log("CHOICE 1 WINS", choices["choice1"])
            break
        case (1):
            // choice 2
            oscClient.send("/switch", currentLocation.paths[1])
            console.log("CHOICE 2 WINS", choices["choice2"])
            break
    }
    voting = false;
    resetChoices()
}

function skinVoting(character) {
    if (character === "p") {
        console.log("voting for pino")
    } else {
        console.log("voting for jaz")
    }
    Object.entries(skinOptions).forEach(([k, v], index) => {
        setTimeout(() => {
            triggerSkinVote(k, v);
        }, index * voteLength * 2);

        if (character === "j") { //IF JAZ IS SECOND, THIS IS AFTER
            // Move this logic outside the loop so it only runs once after all voting rounds
            if (index === Object.keys(skinOptions).length - 1) {
                setTimeout(() => {
                    oscClient.send("/switch", "intro");
                    voting = false;
                }, (index + 1) * voteLength * 2); // Ensure this runs after the last vote
            }
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

function intermissionTrigger() {
    sendToWebClients({ type: "intermission" });
    sendToDisplay({ type: "intermission" }); // Display the choice prompt + image

}

function handleAttack(attackType) {
    bossHealth--
    sendToDisplay({ type: "bossHealth", data: bossHealth / bossMaxHealth })
    if (bossHealth === 0) { endFight() }

}

function endFight() {
    console.log("you.....you killed him")
    sendToWebClients({ type: "bossFight", data: "endFight" })
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
                case "skinPeen":
                    skinVoting("p")
                    break
                case "skinJaz":
                    skinVoting("j")
                    break
            }
            break
        case "sandbox":
            sendToDisplay({ type: "sandbox", data: { name: msg[1], value: msg[2] ? msg[2] : "" } })
            break
        case "intermission":
            intermissionTrigger()

    }
    const msgObj = { type: msg[0], data: msg[1] }
    sendToWebClients(msgObj);
});




//////////////////////////intro game
function renderGameLeaderboard() {
    let sortedScores = gameScores
        .sort((a, b) => b.score - a.score)
        .map((player, index) => ({
            ...player,
            rank: index + 1
        }));

    sendToDisplay({ type: "game-score", data: sortedScores.slice(0, 5) })
}

















module.exports = [
    sendToWebClients,
    sendToDisplay,
    sendSectionChange
]