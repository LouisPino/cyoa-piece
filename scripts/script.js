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
                startVote(currentLocation)
                break
            case "location":
                currentLocation = msg.data.currentLocation
                console.log(msg.data.currentLocation)
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
    mainEl.innerHTML = extras[1]
    let choice1El = document.getElementById('choice-1')
    let choice2El = document.getElementById('choice-2')
    choice1El.innerHTML = section.choices[0]
    choice2El.innerHTML = section.choices[1]
    choice1El.addEventListener('click', () => handleVote("choice1"));
    choice2El.addEventListener('click', () => handleVote("choice2"));
}

function handleVote(vote) {
    sendToServer(vote)
    mainEl.innerHTML = extras[0]
}

function sectionChange(section) {
    currentLocation = section
    toggleHTML()
}

// Add event listeners to send "A" and "B" to server on respective button clicks

