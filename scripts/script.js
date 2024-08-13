const socket = new WebSocket(`ws://${location.hostname}:8000`);
initializeWebSocket()
let index, indexSpace, indexSwamp, indexVote
function initializeWebSocket() {
    // Confirm connection success
    socket.onopen = function (e) {
        console.log("WebSocket connection established!");
    };

    // Run when message is received from server (Max -> Server -> Client)
    socket.onmessage = function (event) {
        let msg = JSON.parse(event.data)
        console.log(msg.data)
        switch (msg.type) {
            case `htmlFiles`:
                index = msg.data["index"]
                indexSpace = msg.data["space"]
                indexSwamp = msg.data["swamp"]
                indexVote = msg.data["vote"]
                indexThank = msg.data["thank"]
                console.log(indexThank)
                break
            case "section":
                const section = { name: msg.data, choices: ["Left", "Right"] }
                sectionChange(section)
        }

    };
}
// Send message from client to server
function sendToServer(msg) {
    socket.send(msg);
}




const mainEl = document.getElementById("main")
function toggleHTML(section) {
    switch (section.name) {
        case "Space":
            mainEl.innerHTML = indexSpace
            break
        case "Swamp":
            mainEl.innerHTML = indexSwamp
            break
        case "Vote":
            mainEl.innerHTML = indexVote
            let choice1El = document.getElementById('choice-1')
            let choice2El = document.getElementById('choice-2')
            choice1El.innerHTML = section.choices[0]
            choice2El.innerHTML = section.choices[1]
            choice1El.addEventListener('click', () => handleVote("choice1"));
            choice2El.addEventListener('click', () => handleVote("choice2"));
            break
        case "Default":
            mainEl.innerHTML = index
            break
    }

}

function handleVote(vote) {
    sendToServer(vote)
    mainEl.innerHTML = indexThank
}

function sectionChange(section) {
    toggleHTML(section)
}

// Add event listeners to send "A" and "B" to server on respective button clicks

