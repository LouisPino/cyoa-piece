const socket = new WebSocket(`ws://${location.hostname}:8000`);
initializeWebSocket()

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
        // split address and value
        let maxMsg = event.data.split(",");
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
            case "/section":
                console.log(maxMsg)
                toggleHTML(maxMsg[1])
        }

    };

    // Send message from client to server
    function sendToServer(msg) {
        socket.send(msg);
    }
    const mainEl = document.getElementById("main")

    function toggleHTML(count) {
        if (count % 2 == 0) {
            mainEl.innerHTML = `
                <button id="green-btn" class="btn"> A </button>
    <button id="red-btn" class="btn"> B </button>
    <button id="click-btn" class="btn"> Click </button>
    <button id="blue-btn" class="btn"> Tap Me!!! </button>
    <div id="numberDisplay">0</div>
            `
            document.getElementById('green-btn').addEventListener('click', () => sendToServer('A'));
            document.getElementById('red-btn').addEventListener('click', () => sendToServer('B'));
            document.getElementById('click-btn').addEventListener('click', () => sendToServer('Click'));
        } else {
            mainEl.innerHTML = `
    <button id="click-btn" class="btn"> Click </button>
    <button id="blue-btn" class="btn"> Tap Me!!! </button>
    <div id="numberDisplay">0</div>
`
            document.getElementById('click-btn').addEventListener('click', () => sendToServer('Click'));
        }

    }

    // Add event listeners to send "A" and "B" to server on respective button clicks
    document.getElementById('green-btn').addEventListener('click', () => sendToServer('A'));
    document.getElementById('red-btn').addEventListener('click', () => sendToServer('B'));
    document.getElementById('click-btn').addEventListener('click', () => sendToServer('Click'));

}