document.addEventListener("DOMContentLoaded", function () {

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
                    display = msg.data["display"]
                    displaySpace = msg.data["space"]
                    displaySwamp = msg.data["swamp"]
                    break
                case "section":
                    sectionChange(msg.data)
            }
        };
    }



    const mainEl = document.getElementById("display-main")


    function toggleHTML(section) {
        switch (section){
          case "Default":
                mainEl.innerHTML = display
                break           
          case "Space":
            mainEl.innerHTML = displaySpace
            break
          case "Swamp":
            mainEl.innerHTML = displaySwamp
            break
        }

    }

    function sectionChange(section) {
        toggleHTML(section)
    }
});


