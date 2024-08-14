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
            console.log(msg)

            switch (msg.type) {
                case "ip-address":
                    const ipAddress = msg.data;
                    console.log(msg)
                    // initializeWebSocket(ipAddress);
                    new QRCode(document.getElementById("qrcode"), `http://${ipAddress}:8000`);
                    break
                case `htmlFiles`:
                    locations = msg.data["locations"]
                    break
                case "section":
                    sectionChange(locations[msg.data])
                    break
                case "selection":
                    renderSelection(msg.data)
            }
        };
    }



    const mainEl = document.getElementById("display-main")


    function toggleHTML(section) {
        mainEl.innerHTML = section.html.display
        setCharacterSprites(section.movingSprites)
        console.log(section)
        // switch (section) {

        // case "Default":
        //     mainEl.innerHTML = display
        //     break
        // case "forestNorth":
        //     mainEl.innerHTML = locations.forestNorth.html.display
        //     setCharacterSprites(moving = true)
        //     break
        // case "forestSouth":
        //     mainEl.innerHTML = locations.forestSouth.html.display
        //     setCharacterSprites(moving = false)
        //     break
    }
    // }

    function sectionChange(section) {
        toggleHTML(section)
    }

    function renderSelection(winner) {
        mainEl.innerHTML = "THE WINNER IS " + winner
    }


    function setCharacterSprites(moving) {
        const wizardEl = document.getElementById("wizardSprite")
        const jesterEl = document.getElementById("jesterSprite")
        if (moving) {
            wizardEl.src = "../characters/jester1.gif"
            jesterEl.src = "../characters/jester2.gif"
        } else {
            wizardEl.src = "../characters/jester1.jpg"
            jesterEl.src = "../characters/jester2.jpg"
        }
    }

});


