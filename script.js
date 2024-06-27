const socket = new WebSocket(`ws://${location.hostname}:8000`);
initializeWebSocket()
let index1, index2
function initializeWebSocket() {
    // Confirm connection success
    socket.onopen = function (e) {
        console.log("WebSocket connection established!");
    };

    // Button text by section, probably set up to be a dictionary instead for easier use later
    const greenBtnContent = ["A", "Left", "Swarm", "Attack!"];
    const redBtnContent = ["B", "Right", "Cave", "Run!"];

    // Run when message is received from server (Max -> Server -> Client)
    socket.onmessage = function (event) {
        let msg = JSON.parse(event.data)

        switch (msg.type) {
            case `htmlFiles`:
                index1 = msg.data[0]
                index2 = msg.data[1]
                break
            case "newSection":
                break
            case "counter":
                renderCounter(msg.data)
            case "section":
                sectionChange(msg.data)
        }

    };

    // Send message from client to server
    function sendToServer(msg) {
        socket.send(msg);
    }
    const mainEl = document.getElementById("main")

    function toggleHTML(section) {
        if (section % 2 == 0) {
            mainEl.innerHTML = index1
            document.getElementById('green-btn').addEventListener('click', () => sendToServer('A'));
            document.getElementById('red-btn').addEventListener('click', () => sendToServer('B'));
            document.getElementById('click-btn').addEventListener('click', () => sendToServer('Click'));
        } else {
            mainEl.innerHTML = index2
            document.getElementById('click-btn').addEventListener('click', () => sendToServer('Click'));
        }

    }

    function sectionChange(section) {
        toggleHTML(section)
    }

    function renderCounter(val) {
        document.getElementById('numberDisplay').textContent = val;
    }
    // Add event listeners to send "A" and "B" to server on respective button clicks
    document.getElementById('green-btn').addEventListener('click', () => sendToServer('A'));
    document.getElementById('red-btn').addEventListener('click', () => sendToServer('B'));
    document.getElementById('click-btn').addEventListener('click', () => sendToServer('Click'));
}



//Mobile class
