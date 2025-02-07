const socket = new WebSocket(`ws://${location.hostname}:8000`);
initializeWebSocket()
let locations
let extras
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
    console.log("hit")
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
    callFunction(currentLocation.name)
}

function lookUp() {
    mainEl.innerHTML = '<h1 class="look-up">↑</h1>'
}


// function intermissionStart() {
//     console.log("it is intermission now")
// }

function callFunction(locationName) {
    switch (locationName) {
        case `sampletest`:
            let btnEl1 = document.querySelector(".sample-btn1")
            btnEl1.addEventListener("click", () => { sendToServer({ type: "sample", val: "drum 1" }) })
            let btnEl2 = document.querySelector(".sample-btn2")
            btnEl2.addEventListener("click", () => { sendToServer({ type: "sample", val: "drum 2" }) })
            let btnEl3 = document.querySelector(".sample-btn3")
            btnEl3.addEventListener("click", () => { sendToServer({ type: "sample", val: "drum 3" }) })
            let btnEl4 = document.querySelector(".sample-btn4")
            btnEl4.addEventListener("click", () => { sendToServer({ type: "sample", val: "synth 1" }) })
            break
        case "welcome":
            welcomeGame()
            break
        case "kingdom":
            break
    }
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




////////////////////////////Game


function welcomeGame() {
    //globals
    let gameRunning = true
    let score = 0
    let enemyCount = 0
    let enemyEls = []
    const sprites = ["/mobile/assets/game/Wizard.gif", "/mobile/assets/game/Jester.gif", "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWpkczB3NjlxcGlpdmdvYXJyMTk4OHoxcnJpaXpoaDgybXI5eXN2eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/zg0wrBuqsQG72sRByD/giphy.gif"]
    let spriteCtr = 1
    let enemyGenTime = 1000
    var xDown = null;
    var yDown = null;


    //elements
    const gameBoxEl = document.getElementById("game-box")
    const scoreEl = document.getElementById("score")
    const charEl = document.getElementById("game-character-sprite")
    const replaybtnEl = [...document.getElementsByClassName("play-again")];
    const leaderboardModalNameEl = [...document.getElementsByClassName("add-to-leaderboard-modal-type-name")];
    const defaultLeaderboardHtml = leaderboardModalNameEl[0].innerHTML
    const replayModalEl = document.getElementById("replay-modal")
    const modalScoreEl = document.getElementById("modal-score")
    const addToLeaderboardBtnEl = document.getElementById("add-to-leaderboard-btn")
    const addToLeaderboardModalEl = document.getElementById("add-to-leaderboard-modal")
    const addToLeaderboardModalBtnsEl = document.querySelector(".add-to-leaderboard-modal-btns")
    const submitScoreEl = document.getElementById("submit-score")

    //listeners
    document.addEventListener('touchstart', handleTouchStart, false);
    document.addEventListener('touchmove', handleTouchMove, false);
    replaybtnEl.forEach((btn) => { btn.addEventListener("click", startGame) })
    submitScoreEl.addEventListener("click", submitScore)
    addToLeaderboardBtnEl.addEventListener("click", addToLeaderboard)
    charEl.addEventListener("click", toggleCharacterSrc)

    //enemies
    class Enemy {
        constructor() {
            this.height = 50;
            this.width = 50;
            this.id = enemyCount;
        }
        enemyCreate() {
            const enemy = document.createElement("img");
            enemy.classList.add("enemy");
            enemy.id = `enemy-${enemyCount}`;
            gameBoxEl.appendChild(enemy);
            enemyEls.push(enemy);  // Store the created enemy in the array
            enemyCount++;  // Increment the enemy counter

            // Assign a random sprite to the enemy
            if (Math.floor(Math.random() * 2)) {
                enemy.classList.add("cat");
                enemy.src = "/mobile/assets/cat.png";
            } else {
                enemy.classList.add("flower");
                enemy.src = "/mobile/assets/flower.png";
            }

            // Apply the move-left animation
            enemy.style.animation = `moveLeft ${1}s linear`;

            // Check for collision after every movement of the enemy
            const checkCollision = () => {
                if (this.isColliding(enemy, charEl)) {
                    collision(); // Call the collision function if they collide
                }
            };

            // Monitor the enemy's movement to check for collisions
            const enemyMoveInterval = setInterval(checkCollision, 20);  // Check every 20ms

            // Remove the enemy once it's out of view
            enemy.addEventListener('animationend', () => {
                gameBoxEl.removeChild(enemy);  // Remove the enemy from the DOM
                changeScore(1)
                clearInterval(enemyMoveInterval);  // Stop the collision check once enemy is removed
            });
        }

        // Collision detection function
        isColliding(enemy, character) {
            const enemyRect = enemy.getBoundingClientRect();
            const charRect = character.getBoundingClientRect();

            // Get computed transform values
            const transform = window.getComputedStyle(character).transform;

            if (transform && transform !== "none") {
                const matrix = new DOMMatrix(transform);
                const transformedTop = charRect.top + matrix.m42;  // Adjust for Y translation
                const transformedBottom = charRect.bottom + matrix.m42;

                return !(enemyRect.right < charRect.left ||
                    enemyRect.left > charRect.right ||
                    enemyRect.bottom < transformedTop ||
                    enemyRect.top > transformedBottom);
            } else {
                // Regular collision detection if no transform is applied
                return !(enemyRect.right < charRect.left ||
                    enemyRect.left > charRect.right ||
                    enemyRect.bottom < charRect.top ||
                    enemyRect.top > charRect.bottom);
            }
        }

    }
    const enemyInstance = new Enemy();

    function generateEnemies() {
        if (currentLocation.name !== "welcome" || gameRunning === false) return; // Stop if location changes

        enemyGenTime = Math.floor(Math.random() * (1500 - 500 + 1)) + 500;
        enemyInstance.enemyCreate()
        // Call this function again after enemyGenTime milliseconds
        setTimeout(generateEnemies, enemyGenTime);
    }

    // Start the enemy generation loop
    generateEnemies();
    //score
    function changeScore(num) {
        if (num) {
            score++
        } else {
            score = 0
        }
        scoreEl.innerHTML = score
    }



    //events
    function collision() {
        enemyEls.forEach((el) => {
            el.remove();
        }); modalScoreEl.innerHTML = score
        replayModalEl.style.visibility = "visible"
        gameRunning = false
    }

    function startGame() {
        replayModalEl.style.visibility = "hidden"
        addToLeaderboardModalEl.style.visibility = "hidden"
        changeScore(0)  // Reset the score or whatever logic you need
        gameRunning = true
        generateEnemies()

    }


    function toggleCharacterSrc() {
        charEl.src = sprites[spriteCtr]
        spriteCtr++
        if (spriteCtr === 3) {
            spriteCtr = 0
        }
    }

    //swipe events
    function handleSwipe(direction) {
        if (direction === "up") {
            jumpCharacter();
        } else if (direction === "down") {
            diveCharacter();
        }
        sendToServer({ type: "swipe", val: direction });
    }


    function getTouches(evt) {
        return evt.touches
    }

    function handleTouchStart(evt) {
        const firstTouch = getTouches(evt)[0];
        xDown = firstTouch.clientX;
        yDown = firstTouch.clientY;
    };

    function handleTouchMove(evt) {
        evt.preventDefault();  // Prevents screen from scrolling during touch

        if (!xDown || !yDown) {
            return;
        }

        var xUp = evt.touches[0].clientX;
        var yUp = evt.touches[0].clientY;

        var xDiff = xDown - xUp;
        var yDiff = yDown - yUp;

        if (Math.abs(xDiff) > Math.abs(yDiff)) {/*most significant*/
            if (xDiff > 0) {
                // sendToServer({ type: "swipe", val: "left" })
            } else {
                // sendToServer({ type: "swipe", val: "right" })
            }
        } else {
            if (yDiff > 0) {
                handleSwipe("up");
            } else {
                handleSwipe("down");
            }
        }
        /* reset values */
        xDown = null;
        yDown = null;
    };


    //animation
    function jumpCharacter() {
        resetAnimation(charEl, "jump")
    }


    function diveCharacter() {
        resetAnimation(charEl, "dive")
    }

    // Helper to Reset Animation (Allows it to trigger every time)
    function resetAnimation(element, animationClass) {
        element.classList.remove("jump", "dive");  // Remove any existing animation classes
        // Trigger reflow to restart animation
        void element.offsetWidth;
        element.classList.add(animationClass);  // Add new animation class
    }

    //leaderboard
    function addToLeaderboard() {
        leaderboardModalNameEl[0].innerHTML = defaultLeaderboardHtml
        addToLeaderboardModalBtnsEl.appendChild(submitScoreEl)
        submitScoreEl.addEventListener("click", submitScore)
        replayModalEl.style.visibility = "hidden"
        addToLeaderboardModalEl.style.visibility = "visible"
    }

    function submitScore() {
        const badWords = ["ASS", "COK", "FAG", "FCK", "CUM", "TIT", "KKK", "IDF", "NIG", "NGR", "SEX"];
        const inputEl = document.getElementById("score-letter-4")
        let nameStr = inputEl.value.toUpperCase()
        // let nameStr = (inputEls[0].value + inputEls[1].value + inputEls[2].value).toUpperCase()
        submitScoreEl.remove()
        if (badWords.includes(nameStr)) {
            nameStr = "BOO"
            alert("I can't read but this word doesn't shine and sparkle with the council")
            return
        }
        leaderboardModalNameEl[0].innerHTML = "Thanks!"
        sendToServer({ type: "game-score", val: { name: nameStr, score: score } })
    }
}   
