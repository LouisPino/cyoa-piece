document.addEventListener("DOMContentLoaded", function () {

    let display1, display2
    initializeWebSocket(location.hostname)
    function initializeWebSocket(ip) {
        const socket = new WebSocket(`ws://${ip}:8000/display`);
        // Confirm connection success
        socket.onopen = function (e) {
            console.log("WebSocket connection established!");
        };

        // Run when message is received from server (Max -> Server -> Client)
        socket.onmessage = function (event) {
            let msg = JSON.parse(event.data)
            console.log(msg)

            switch (msg.type) {
                case "ip-address":
                    const ipAddress = msg.data;
                    // initializeWebSocket(ipAddress);
                    new QRCode(document.getElementById("qrcode"), `http://${ipAddress}:8000`);
                    break
                case `htmlFiles`:
                    console.log(msg.data)
                    display1 = msg.data[0]
                    display2 = msg.data[1]
                    break
                case "section":
                    sectionChange(msg.data)
            }
        };
    }



    const mainEl = document.getElementById("display-main")


    function toggleHTML(section) {
        if (section % 2 == 0) {
            mainEl.innerHTML = display1
        } else {
            mainEl.innerHTML = display2
        }

    }

    function sectionChange(section) {
        toggleHTML(section)
    }
});


