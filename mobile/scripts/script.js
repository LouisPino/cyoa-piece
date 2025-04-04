const socket = new WebSocket(`ws://${location.hostname}:8000`);
initializeWebSocket()
let locations
let extras
let scripts
let locationScripts
let currentLocation
let fighting = true
function initializeWebSocket() {
    /////////////////Communcation
    // Confirm connection success
    socket.onopen = function (e) {
        console.log("WebSocket connection established!");
    };
    // Run when message is received from server (Max -> Server -> Client)
    socket.onmessage = function (event) {
        let msg = JSON.parse(event.data)
        switch (msg.type) {
            case `initialFileServe`:
                voteLength = msg.data["voteLength"]
                winnerLength = msg.data["winnerLength"]
                promptLength = msg.data["promptLength"]
                locations = msg.data["locations"]
                extras = msg.data["extras"]
                scripts = msg.data["scripts"]
                locationScripts = msg.data["locationScripts"]
                break
            case "section":
                sectionChange(locations[msg.data.name])
                break
            case "selection":
                renderSelection(msg.data)
                break
            // case "intermission":
            //     intermissionStart()
            //     break
            case "vote":
                switch (msg.data.type) {
                    case "path":
                        startVote("section", currentLocation)
                        break
                    case "skin":
                        currentLocation = "skin"
                        startVote("character", { item: msg.data.item, choices: skinChoices[msg.data.item] })
                        break
                    case "lookup":
                        lookUp()
                        break
                }
                break
            case "location":
                currentLocation = msg.data.currentLocation
                sectionChange(currentLocation)
                break
            case "characters":
                switch (msg.route) {
                    case "characterData":
                        storeCharacters(msg.characters);
                        break;
                }
            case "bossFight":
                if (msg.data === "endFight") {
                    endFight()
                }
                break
        }
    };
}

// Send message from client to server
function sendToServer(msg) {
    socket.send(JSON.stringify(msg));
}

/////////////////////Section
const mainEl = document.getElementById("main")
function toggleHTML() {
    mainEl.innerHTML = currentLocation.html.mobile
}

function renderSelection(winner) {
    mainEl.innerHTML = "THE WINNER IS " + winner
}

function sectionChange(section) {
    currentLocation = section
    removePino()
    removeJaz()
    toggleHTML()
    runLocationScript(currentLocation.name)
}

function runLocationScript(locationName) {
    const locationScriptObj = locationScripts.filter(script => script.name === locationName)[0];
    eval(locationScriptObj?.content);
}



function endFight() {
    fighting = false
    const xEl = document.getElementById("bad-guy")
    xEl.innerHTML = "I am in fact dead."
}

