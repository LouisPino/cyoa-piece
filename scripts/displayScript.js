document.addEventListener("DOMContentLoaded", function () {
    let locations
    let extras
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
                    extras = msg.data.extras
                    break
                case "section":
                    sectionChange(locations[msg.data.name])
                    break
                case "vote":
                    switch (msg.data.type) {
                        case "skin":
                            toggleSkinHTML(msg.data.item)
                            break
                    }
                    break
            }
        };
    }



    const mainEl = document.getElementById("display-main")


    function toggleHTML(section) {
        mainEl.innerHTML = section.html.display
    }
    function toggleSkinHTML(item) {
        mainEl.innerHTML = extras.filter((extra) => (extra.name === "skin"))[0].content
        const choice1El = document.getElementById("skin-choice1")
        const choice2El = document.getElementById("skin-choice2")
        const choice3El = document.getElementById("skin-choice3")
        const choice4El = document.getElementById("skin-choice4")
        const choice5El = document.getElementById("skin-choice5")
        const promptEl = document.getElementById("skin-prompt")
        choice1El.src = item.choices[0].img
        choice2El.src = item.choices[1].img
        choice3El.src = item.choices[2] ? item.choices[2].img : ""
        choice4El.src = item.choices[3] ? item.choices[3].img : ""
        choice5El.src = item.choices[4] ? item.choices[4].img : ""
        promptEl.innerHTML = item.prompt
    }

    function sectionChange(section) {
        toggleHTML(section)
        setCharacterSprites(section.movingSprites)
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


