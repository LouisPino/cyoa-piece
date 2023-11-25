console.log("hit")
const greenBtnContent = ["A", "Left", "Swarm", "Attack!"];
const redBtnContent = ["B", "Right", "Cave", "Run!"];
let socket = new WebSocket('ws://localhost:8000');

socket.onopen = function(e) {
    console.log("Connection established!");
};

socket.onmessage = function(event) {
    let maxMsg = event.data.split(",");
    console.log(maxMsg);
    if (maxMsg[0] === "/newSection") {
        document.getElementById('green-btn').textContent = greenBtnContent[maxMsg[1]];
        document.getElementById('red-btn').textContent = redBtnContent[maxMsg[1]];
    }
    document.getElementById('numberDisplay').textContent = event.data.slice(4);
};

function sendToServer(msg) {
    socket.send(msg);
}

document.getElementById('green-btn').addEventListener('click', () => sendToServer('A'));
document.getElementById('red-btn').addEventListener('click', () => sendToServer('B'));
