const fs = require('fs');
const http = require('http');
const path = require('path');
const WebSocket = require('ws');
const url = require('url');
const IP4 = require('./helpers/ip4.js')
const [locations, mobileExtras, displayExtras, displayScripts, mobileScripts, mobileLocationScripts, displayLocationScripts] = require("./helpers/fileLoader.js")
const [characters] = require("./characters/default.js")
let currentLocation = locations["welcome"]
const voteLength = 2000
const winnerLength = 2000
const promptLength = 2000
let gameScores = [
    { "name": "JAZ", "score": 2 },
    { "name": "PNO", "score": 1 },
    { "name": "TLY", "score": 3 }
]
let history = {
    locationsVisited: [],
    madLibWords: [],
    enemies: {},
    buff: ""
}
let voting = false
let attacking = false

const bossMaxHealth = 1
const swipeCountTarget = 3
let bossHealth = bossMaxHealth

const swipeTypes = ["up", "down", "left", "right"]
let swipeType
let swipeCount = 0

const wordTypes = ["noun", "noun", "verb", "verb", "adjective", "adjective"]
const madlibSubmitLength = 45 //seconds
let madlibbing
let madlibTimerInterval = null;

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
        sendToDisplay({ type: 'initialFileServe', data: { locations: locations, extras: displayExtras, scripts: displayScripts, locationScripts: displayLocationScripts, voteLength: voteLength, winnerLength: winnerLength, promptLength: promptLength, swipeCountTarget: swipeCountTarget, characters: characters, wordTypes: wordTypes, madlibSubmitLength: madlibSubmitLength } })
        sendToDisplay({ type: "section", data: currentLocation })
    } else {
        ws.send(JSON.stringify({ type: 'initialFileServe', data: { locations: locations, extras: mobileExtras, scripts: mobileScripts, voteLength: voteLength, locationScripts: mobileLocationScripts, wordTypes: wordTypes, madlibSubmitLength: madlibSubmitLength } }))
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
                sendToDisplay({ type: "audience-sample" })
                break
            case "fx":
                oscClient.send("/fx", data.val)
                break
            case "track":
                oscClient.send("/track", data.val)
                break
            case "game-score":
                gameScores.push(data.val)
                renderGameLeaderboard()
                break
            case "attack":
                handleAttack(data.val)
                break
            case "attacking":
                attacking = data.data
                break
            case "madlib":
                if (data.msg === "start") {
                    sendToWebClients({ type: "madlib", data: "start" })
                    madLibCountdown()
                } else if (data.msg === "end") {
                    madlibbing = false
                    sendToWebClients({ type: "madlib", data: "end" })
                }
                break
            case "madlib-word":
                sendToDisplay({ type: "madlib", route: "word", data: { wordType: data.val.wordType, word: data.val.word } })
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
    sendToWebClients({ type: "history", data: history })
    sendToDisplay({ type: "history", data: history })
    if (currentLocation?.name === "fight") {
        setTimeout(() => {
            newTargetSwipe()
            attacking = false
        }, 4000)
    }
    if (currentLocation.track) {
        setTimeout(() => {
            oscClient.send("/track", currentLocation.track)

        }, currentLocation.transition.time / 2)
    }
}





////////////////////////voting
let choices = { choice1: 0, choice2: 0 }

function handleVote(vote) {
    console.log(vote)
    choices[vote] += 1
    sendToDisplay({ type: "vote", data: { type: "vote-cast", choice: vote } }) // in display, make visible the choice prompt + image
}


function triggerVote(type, item) {
    voting = true
    if (type === "path") {
        if (currentLocation.voteVamp) {
            oscClient.send("/track", currentLocation.voteVamp)
        }
        sendToWebClients({ type: "vote", data: { type: "path" } })
        sendToDisplay({ type: "vote", data: { type: "path", currentLocation: currentLocation } }) // in display, make visible the choice prompt + image
    } else if (type === "skin") {
        sendToWebClients({ type: "vote", data: { type: "skin", item: item } })
        sendToDisplay({ type: "vote", data: { type: "skin", item: item } }) // in display, make visible the choice prompt + image
    }
    setTimeout(() => {
        displayWinner(type, tallyVotes())
    }, voteLength + promptLength)
    setTimeout(() => {
        endVote(type, item, tallyVotes())
    }, voteLength + promptLength + winnerLength)
}



function displayWinner(type, winner) {
    sendToWebClients({ type: "vote", data: { type: "lookup" } })
    switch (type) {
        case "path":
            sendToDisplay({ type: "vote", data: { type: "winner", winner: winner, currentLocation: currentLocation } }) // in display, make visible the choice prompt + image
            break
        case "skin":
            sendToDisplay({ type: "vote", data: { type: "skin-winner", winner: winner } }) // in display, make visible the choice prompt + image
            break
    }
}

function endVote(type, item, winner) {
    switch (type) {
        case "skin":
            characters[item[0]][item.slice(1).toLowerCase()] = winner === 0 ? "A" : "B"
            sendToWebClients({ type: "characters", route: "characterData", characters: characters })
            sendToDisplay({ type: "characters", route: "characterData", characters: characters })
            oscClient.send("/characters", "voted")
            break
        case "path":
            setTimeout(() => {

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
            }, voteLength)
            break
    }
    voting = false;
    resetChoices()
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

// function intermissionTrigger() {
//     sendToWebClients({ type: "intermission" });
//     sendToDisplay({ type: "intermission" }); 
// }


function handleAttack(attackType) {
    if (attacking) { return }
    if (attackType === swipeType) {
        swipeCount++
        if (swipeCount === Math.floor(swipeCountTarget / 3)
            || swipeCount === Math.floor(swipeCountTarget / 3)
            * 2) {
            newTargetSwipe()
        }
        sendToDisplay({ type: "swipeCount", data: swipeCount })
    }
    if (swipeCount === swipeCountTarget) {
        bossHealth--
        swipeCount = 0
        sendToDisplay({ type: "triggerAttack", data: bossHealth / bossMaxHealth })
        if (bossHealth === 0) { endFight() }
    }
}


function newTargetSwipe() {
    swipeType = swipeTypes[Math.floor(Math.random() * 4)]
    sendToWebClients({ type: "swipeType", data: swipeType })
    sendToDisplay({ type: "swipeType", data: swipeType })
}

function endFight() {
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
            switch (msg[1]) {
                case "advance":
                    if (currentLocation.paths[0] === currentLocation.paths[1]) {
                        sendSectionChange(locations[currentLocation.paths[0]])
                    } else {
                        triggerVote("path")
                    }
                    break;
                default:
                    sendSectionChange(locations[msg[1]])
            }
            break
        case "vote":
            switch (msg[1]) {
                case "path":
                    triggerVote("path")
                    break
                case "skin":
                    triggerVote("skin", msg[2])
                    break
            }
            break
        case "characters":
            sendToDisplay({ type: "characters", route: msg[1], data: msg.slice(2) })
            sendToWebClients({ type: "characters", data: msg })
            break
        case "sandbox":
            sendToDisplay({ type: "sandbox", data: { name: msg[1], value: msg[2] ? msg[2] : "" } })
            break
        // case "intermission":
        //     intermissionTrigger()
        //     break
        case "map":
            sendToDisplay({ type: "map", route: msg[1], data: msg.slice(2) })
            sendToWebClients({ type: "map", data: { type: msg[1] } })
            break
        case "madlib":
            sendToDisplay({ type: "madlib", route: msg[1] })
            break
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

setTimeout(renderGameLeaderboard, 2000)


//madlib

function madLibCountdown() {
    let timeLeft = madlibSubmitLength;
    // Send the first message immediately
    sendToWebClients({ type: "madlib-timer", data: timeLeft });
    sendToDisplay({ type: "madlib-timer", data: timeLeft });

    // Clear any existing interval to prevent duplicates
    if (madlibTimerInterval) {
        clearInterval(madlibTimerInterval);
    }

    madlibTimerInterval = setInterval(() => {
        timeLeft--;

        // Send the current time to clients
        sendToWebClients({ type: "madlib-timer", data: timeLeft });
        sendToDisplay({ type: "madlib", route: "timer", data: timeLeft });
        if (timeLeft <= 0) {
            clearInterval(madlibTimerInterval);
            madlibTimerInterval = null;
        }
    }, 1000);
}






module.exports = [
    sendToWebClients,
    sendToDisplay,
    sendSectionChange
]





//week before testing considerations
//All loaction scripts active
//transition times and vote lengths test at full


// irl checks
// all videos are full length?
// all location scripts active?
// voting times set?
// vote tally correct?
// disable hotkeys you don't need