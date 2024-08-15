const socket = new WebSocket(`ws://${location.hostname}:8000`);
initializeWebSocket()
let locations
let extras
let currentLocation
function initializeWebSocket() {
    // Confirm connection success
    socket.onopen = function (e) {
        console.log("WebSocket connection established!");
    };

    // Run when message is received from server (Max -> Server -> Client)
    socket.onmessage = function (event) {
        let msg = JSON.parse(event.data)
        switch (msg.type) {
            case `htmlFiles`:
                locations = msg.data["locations"]
                extras = msg.data["extras"]
                break
            case "section":
                sectionChange(locations[msg.data.name])
                break
            case "selection":
                renderSelection(msg.data)
                break
            case "vote":
                switch (msg.data.type) {
                    case "path":
                        startVote(currentLocation)
                        break
                    case "skin":
                        startSkinVote(msg.data.vote)
                        break
                }
                break
            case "location":
                currentLocation = msg.data.currentLocation
                sectionChange(currentLocation)
                break
        }
    };
}
// Send message from client to server
function sendToServer(msg) {
    socket.send(msg);
}



const mainEl = document.getElementById("main")
function toggleHTML() {
    mainEl.innerHTML = currentLocation.html.mobile
}

function renderSelection(winner) {
    mainEl.innerHTML = "THE WINNER IS " + winner
}

function startVote(section) {
    mainEl.innerHTML = extras.filter((extra) => (extra.name === "vote"))[0].content
    let choice1El = document.getElementById('choice-1')
    let choice2El = document.getElementById('choice-2')
    choice1El.innerHTML = section.choices[0]
    choice2El.innerHTML = section.choices[1]
    choice1El.addEventListener('click', () => handleVote("choice1"));
    choice2El.addEventListener('click', () => handleVote("choice2"));
}

function handleVote(vote) {
    sendToServer(vote)
    mainEl.innerHTML = extras.filter((extra) => (extra.name === "thank"))[0].content
}

function sectionChange(section) {
    currentLocation = section
    toggleHTML()
}


function startSkinVote() {
    mainEl.innerHTML = extras[1]
    let choice1El = document.getElementById('choice-1')
    let choice2El = document.getElementById('choice-2')
    choice1El.innerHTML = section.choices[0]
    choice2El.innerHTML = section.choices[1]
    choice1El.addEventListener('click', () => handleVote("choice1"));
    choice2El.addEventListener('click', () => handleVote("choice2"));
}