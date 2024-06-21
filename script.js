// Temporary WebSocket connection to get the IP address
const initialSocket = new WebSocket(`ws://${location.hostname}:8000`);

initialSocket.onopen = function (e) {
    console.log("Initial connection established!");
};

initialSocket.onmessage = function (event) {
    const data = JSON.parse(event.data);
    if (data.type === 'ip-address') {
        const ipAddress = data.ip;
        initializeWebSocket(ipAddress);
        initialSocket.close();
    }
};

function initializeWebSocket(ip) {
    const socket = new WebSocket(`ws://${ip}:8000`);

    // Confirm connection success
    socket.onopen = function (e) {
        console.log("WebSocket connection established!");
    };

    // Button text by section, probably set up to be a dictionary instead for easier use later
    const greenBtnContent = ["A", "Left", "Swarm", "Attack!"];
    const redBtnContent = ["B", "Right", "Cave", "Run!"];

    // Run when message is received from server (Max -> Server -> Client)
    socket.onmessage = function (event) {
        // split address and value
        let maxMsg = event.data.split(",");
        console.log(maxMsg)
        // Look for newSection address
        switch (maxMsg[0]) {
            case "/newSection":
                // Temporary button rendering / text changing to test connections
                let val = maxMsg[1]
                document.getElementById('green-btn').textContent = greenBtnContent[val];
                document.getElementById('red-btn').textContent = redBtnContent[val];
                if (val === "4") {
                    document.getElementById('blue-btn').style.display = "block";
                    document.getElementById('green-btn').style.display = "none";
                    document.getElementById('red-btn').style.display = "none";
                }
                break
            case "/counter":
                document.getElementById('numberDisplay').textContent = maxMsg[1];

        }

    };

    // Send message from client to server
    function sendToServer(msg) {
        socket.send(msg);
    }

    // Add event listeners to send "A" and "B" to server on respective button clicks
    document.getElementById('green-btn').addEventListener('click', () => sendToServer('A'));
    document.getElementById('red-btn').addEventListener('click', () => sendToServer('B'));
}