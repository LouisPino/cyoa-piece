const socket = new WebSocket(`ws://${location.hostname}:8000`);
initializeWebSocket()
let locations
let extras
let scripts
let currentLocation
function initializeWebSocket() {
    /////////////////Communcation
    // Confirm connection success
    socket.onopen = function (e) {
        console.log("WebSocket connection established!");
    };


    // Run when message is received from server (Max -> Server -> Client)
    socket.onmessage = function (event) {
        let msg = JSON.parse(event.data)
        switch (msg.type) {
            case `initialFileServe`:
                locations = msg.data["locations"]
                extras = msg.data["extras"]
                scripts = msg.data["scripts"]
                break
            case "section":
                sectionChange(locations[msg.data.name])
                break
            case "selection":
                renderSelection(msg.data)
                break
            // case "intermission":
            //     intermissionStart()
            //     break
            case "vote":
                switch (msg.data.type) {
                    case "path":
                        startVote(currentLocation)
                        break
                    case "skin":
                        currentLocation = "skin"
                        startSkinVote(msg.data.item)
                        break
                }
                break
            case "location":
                currentLocation = msg.data.currentLocation
                sectionChange(currentLocation)
                break
            case "character":
                lookUp()
                break
        }
    };
}

// Send message from client to server
function sendToServer(msg) {
    socket.send(JSON.stringify(msg));
}



/////////////////////Style
function adjustHeight() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
}
function adjustWidth() {
    const vw = window.innerWidth * 0.01;
    document.documentElement.style.setProperty('--vw', `${vw}px`);
}

window.addEventListener('resize', adjustHeight);
adjustHeight(); // Initial adjustment

window.addEventListener('resize', adjustWidth);
adjustWidth(); // Initial adjustment

/////////////////////Vote
const voteLength = 10000

function startVote(section) {
    mainEl.innerHTML = extras.filter((extra) => (extra.name === "vote"))[0].content//get vote html
    let choice1El = document.getElementById('choice-1')
    let choice2El = document.getElementById('choice-2')
    // let prompt = document.getElementById('vote-prompt-mobile')
    // prompt.innerText = section.choicePrompt
    // choice1El.innerHTML = section.choices[0]
    // choice2El.innerHTML = section.choices[1]
    choice1El.addEventListener('click', () => handleVote("choice1"));
    choice2El.addEventListener('click', () => handleVote("choice2"));
}



function startSkinVote(item) {
    mainEl.innerHTML = extras.filter((extra) => (extra.name === "character"))[0].content
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


function handleVote(vote) {
    sendToServer({ type: "vote", val: vote })
    mainEl.innerHTML = extras.filter((extra) => (extra.name === "thank"))[0].content
}

/////////////////////Section
const mainEl = document.getElementById("main")
function toggleHTML() {
    mainEl.innerHTML = currentLocation.html.mobile
}

function renderSelection(winner) {
    mainEl.innerHTML = "THE WINNER IS " + winner
}

function sectionChange(section) {
    currentLocation = section
    toggleHTML()
    getAndRunScript(currentLocation.name)
}

function lookUp() {
    mainEl.innerHTML = '<h1 class="look-up">↑</h1>'
}


// function intermissionStart() {
//     console.log("it is intermission now")
// }

function getAndRunScript(locationName) {
    const scriptObj = scripts.filter(script => script.name === locationName)[0];
    eval(scriptObj.content);
}

//TEST WITH JAZ, LEAVE IN FOR ANDROID USERS IF IT WORKS
// Select the element we want to make fullscreen.
// Often 'document.documentElement' or a specific element like a video container.
// const elem = document.documentElement;

// // Cross-browser function for requesting fullscreen
// function openFullscreen() {
//     if (elem.requestFullscreen) {
//         elem.requestFullscreen();
//     } else if (elem.mozRequestFullScreen) { /* Firefox */
//         elem.mozRequestFullScreen();
//     } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
//         elem.webkitRequestFullscreen();
//     } else if (elem.msRequestFullscreen) { /* IE/Edge */
//         elem.msRequestFullscreen();
//     }
// }


// document.getElementById("fullscreenBtn").addEventListener("click", openFullscreen);
