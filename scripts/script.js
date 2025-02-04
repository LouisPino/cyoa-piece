const socket = new WebSocket(`ws://${location.hostname}:8000`);
initializeWebSocket()
let locations
let extras
let currentLocation
function initializeWebSocket() {
    // Confirm connection success
    socket.onopen = function (e) {
        console.log("WebSocket connection established!");
    };

    // Run when message is received from server (Max -> Server -> Client)
    socket.onmessage = function (event) {
        let msg = JSON.parse(event.data)
        switch (msg.type) {
            case `htmlFiles`:
                locations = msg.data["locations"]
                extras = msg.data["extras"]
                break
            case "section":
                sectionChange(locations[msg.data.name])
                break
            case "selection":
                renderSelection(msg.data)
                break
            case "intermission":
                intermissionStart()
                break
            case "vote":
                switch (msg.data.type) {
                    case "path":
                        startVote(currentLocation)
                        break
                    case "skin":
                        startSkinVote(msg.data.item)
                        break
                }
                break
            case "location":
                currentLocation = msg.data.currentLocation
                sectionChange(currentLocation)
                break
        }
    };
}
// Send message from client to server
function sendToServer(msg) {
    socket.send(JSON.stringify(msg));
}


const voteLength = 100
const mainEl = document.getElementById("main")
function toggleHTML() {
    mainEl.innerHTML = currentLocation.html.mobile
}

function renderSelection(winner) {
    mainEl.innerHTML = "THE WINNER IS " + winner
}

function startVote(section) {
    mainEl.innerHTML = extras.filter((extra) => (extra.name === "vote"))[0].content
    let choice1El = document.getElementById('choice-1')
    let choice2El = document.getElementById('choice-2')
    let prompt = document.getElementById('vote-prompt-mobile')
    prompt.innerText = section.choicePrompt
    choice1El.innerHTML = section.choices[0]
    choice2El.innerHTML = section.choices[1]
    choice1El.addEventListener('click', () => handleVote("choice1"));
    choice2El.addEventListener('click', () => handleVote("choice2"));
}

function handleVote(vote) {
    sendToServer(vote)
    mainEl.innerHTML = extras.filter((extra) => (extra.name === "thank"))[0].content
}

function sectionChange(section) {
    currentLocation = section
    toggleHTML()
    if (currentLocation.name === "sampletest") {
        let btnEl1 = document.querySelector(".sample-btn1")
        btnEl1.addEventListener("click", () => { sendToServer({ type: "sample", val: "drum 1" }) })
        let btnEl2 = document.querySelector(".sample-btn2")
        btnEl2.addEventListener("click", () => { sendToServer({ type: "sample", val: "drum 2" }) })
        let btnEl3 = document.querySelector(".sample-btn3")
        btnEl3.addEventListener("click", () => { sendToServer({ type: "sample", val: "drum 3" }) })
        let btnEl4 = document.querySelector(".sample-btn4")
        btnEl4.addEventListener("click", () => { sendToServer({ type: "sample", val: "synth 1" }) })
    } else if (currentLocation.name === "kingdom") {
        let textEls = document.querySelectorAll(".text")
        let texts = []
        let textBodyEl = document.querySelector(".text-body")
        for (el of textEls) {
            texts.push(el.innerText)
            el.remove()
        }
        let i = 0; // Index for texts array

        function typeText() {
            if (i < texts.length) {
                const text = texts[i];
                let j = 0; // Index for characters in the current text

                function typeCharacter() {
                    if (j < text.length) {
                        textBodyEl.innerHTML += text[j];
                        j++;
                        setTimeout(typeCharacter, 50); // Type the next character
                    } else {
                        textBodyEl.innerHTML += "<br>"; // Add a line break after the text
                        i++;
                        setTimeout(typeText, 1000); // Move to the next text
                    }
                }

                typeCharacter(); // Start typing the current text
            }
        }

        typeText(); // Start typing texts
    }
}


function startSkinVote(item) {
    mainEl.innerHTML = extras.filter((extra) => (extra.name === "skin"))[0].content
    const choice1El = document.getElementById("skin-choice1")
    const choice2El = document.getElementById("skin-choice2")
    const choice3El = document.getElementById("skin-choice3")
    const choice4El = document.getElementById("skin-choice4")
    const choice5El = document.getElementById("skin-choice5")
    choice1El.src = item.choices[0].img
    choice2El.src = item.choices[1].img
    choice3El.src = item.choices[2] ? item.choices[2].img : ""
    choice4El.src = item.choices[3] ? item.choices[3].img : ""
    choice5El.src = item.choices[4] ? item.choices[4].img : ""
    choice1El.addEventListener('click', () => handleVote("choice1"));
    choice2El.addEventListener('click', () => handleVote("choice2"));
    choice3El.addEventListener('click', () => handleVote("choice3"));
    choice4El.addEventListener('click', () => handleVote("choice4"));
    choice5El.addEventListener('click', () => handleVote("choice5"));
}

function intermissionStart() {
    console.log("it is intermission now")
}