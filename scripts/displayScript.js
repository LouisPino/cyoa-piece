document.addEventListener("DOMContentLoaded", function () {
    let locations
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
            switch (msg.type) {
                case "ip-address":
                    const ipAddress = msg.data;
                    // initializeWebSocket(ipAddress);
                    new QRCode(document.getElementById("qrcode"), `http://${ipAddress}:8000`);
                    break
                case `htmlFiles`:
                    locations = msg.data["locations"]
                    break
                case "section":
                    sectionChange(locations[msg.data.name])
                    break
                case "selection":
                    renderSelection(msg.data)
            }
        };
    }



    const mainEl = document.getElementById("display-main")


    function toggleHTML(section) {
        mainEl.innerHTML = section.html.display
    }

    function sectionChange(section) {
        toggleHTML(section)
        setCharacterSprites(section.movingSprites)
    }

    function renderSelection(winner) {
        mainEl.innerHTML = "THE WINNER IS " + winner
    }


    function setCharacterSprites(moving) {
        const wizardEl = document.getElementById("wizardSprite")
        const jesterEl = document.getElementById("jesterSprite")
        if (moving) {
            if (wizardEl) { wizardEl.src = "../characters/wizard.gif" };
            if (jesterEl) { jesterEl.src = "../characters/jester.gif" };
        } else {
            if (wizardEl) { wizardEl.src = "../characters/wizard.jpg" };
            if (jesterEl) { jesterEl.src = "../characters/jester.jpg" };
        }
    }

});


