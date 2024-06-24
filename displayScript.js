document.addEventListener("DOMContentLoaded", function () {
    const initialSocket = new WebSocket(`ws://${location.hostname}:8000/display`);
    initialSocket.onopen = function (e) {
        console.log("Initial connection established!");
    };

    initialSocket.onmessage = function (event) {
        const data = JSON.parse(event.data);
        if (data.type === 'ip-address') {
            const ipAddress = data.ip;
            initializeWebSocket(ipAddress);
            new QRCode(document.getElementById("qrcode"), `http://${ipAddress}:8000`);
            document.getElementById('ip-address').textContent = `IP ADDRESS: ${ipAddress}`;
            initialSocket.close();
        }
    };

    function initializeWebSocket(ip) {
        const socket = new WebSocket(`ws://${ip}:8000/display`);
        // Confirm connection success
        socket.onopen = function (e) {
            console.log("WebSocket connection established!");
        };

        // Run when message is received from server (Max -> Server -> Client)
        socket.onmessage = function (event) {
            if (event.data.split('"')[7]) {
                document.getElementById('ip-address').textContent = `IP ADDRESS: ${event.data.split('"')[7]}`;
            } else {
                console.log(event.data)
            }
        };
    }
});


