const greenBtnContent = ["A", "Left", "Swarm", "Attack!"];
const redBtnContent = ["B", "Right", "Cave", "Run!"];
let socket = new WebSocket('ws://10.0.0.162:8000');

socket.onopen = function(e) {
    console.log("Connection established!");
};

socket.onmessage = function(event) {
    let maxMsg = event.data.split(",");
    if (maxMsg[0] === "/newSection") {
        let val = maxMsg[1]
        document.getElementById('green-btn').textContent = greenBtnContent[val];
        document.getElementById('red-btn').textContent = redBtnContent[val];
        if(val === "4"){
            document.getElementById('blue-btn').style.display = "block";
            document.getElementById('green-btn').style.display = "none"
        document.getElementById('red-btn').style.display = "none"
        }
    }
    document.getElementById('numberDisplay').textContent = event.data.slice(4);
};

function sendToServer(msg) {
    socket.send(msg);
}

document.getElementById('green-btn').addEventListener('click', () => sendToServer('A'));
document.getElementById('red-btn').addEventListener('click', () => sendToServer('B'));
