// Set up socket connection from client to server
let socket = new WebSocket('ws://10.0.0.162:8000');

// Confirm connection success
socket.onopen = function(e) {
    console.log("Connection established!");
};


// Button text by section, probably set up to be a dictionary instead for easier use later
const greenBtnContent = ["A", "Left", "Swarm", "Attack!"];
const redBtnContent = ["B", "Right", "Cave", "Run!"];


// Run when message is received from server (Max -> Server -> Client)
socket.onmessage = function(event) {
    // split address and value
    let maxMsg = event.data.split(",");

    // Look for newSection address
    if (maxMsg[0] === "/newSection") {
        // Temporary button rendering / text changing to test connections
        let val = maxMsg[1]
        document.getElementById('green-btn').textContent = greenBtnContent[val];
        document.getElementById('red-btn').textContent = redBtnContent[val];
        if(val === "4"){
            document.getElementById('blue-btn').style.display = "block";
            document.getElementById('green-btn').style.display = "none"
        document.getElementById('red-btn').style.display = "none"
        }

    }

    // Change counter text for testing connections
    document.getElementById('numberDisplay').textContent = event.data.slice(4);
};



// Send message from client to server
function sendToServer(msg) {
    socket.send(msg);
}


// Add event listeners to send "A" and "B" to server on respective button clicks
document.getElementById('green-btn').addEventListener('click', () => sendToServer('A'));
document.getElementById('red-btn').addEventListener('click', () => sendToServer('B'));
