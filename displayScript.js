document.addEventListener("DOMContentLoaded", function () {
    const initialSocket = new WebSocket(`ws://${location.hostname}:8000/display`);
    initialSocket.onopen = function (e) {
        console.log("Initial connection established!");
    };

    initialSocket.onmessage = function (event) {
        let msg = JSON.parse(event.data)
        switch (msg.type) {
            case `htmlFiles`:
                display1 = msg.data[0]
                display2 = msg.data[1]
                break
            case "ip-address":
                const ipAddress = msg.data;
                initializeWebSocket(ipAddress);
                new QRCode(document.getElementById("qrcode"), `http://${ipAddress}:8000`);
                initialSocket.close();
            case "counter":
                renderCounter(msg.data)
            case "section":
                sectionChange(msg.data)
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


