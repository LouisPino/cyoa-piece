console.log("hit")

function welcomeGame() {
    document.addEventListener('DOMContentLoaded', () => {
        // Use a short delay to ensure layout is complete
        setTimeout(() => {
            resizeGameScreen()
        }, 100);
        document.addEventListener('keydown', (e) => {
            if (e.key === "ArrowUp" || e.key === "ArrowDown" || e.key === " ") {
                e.preventDefault()
            }
        });
    });

    //globals
    let gameRunning = false
    let score = 0
    let enemyCount = 0
    let enemyEls = []
    const sprites = ["/mobile/assets/game/Jester.gif", "/mobile/assets/game/Wizard.gif", "/mobile/assets/game/Duo.gif"]
    const standingSprites = ["/mobile/assets/game/Jester_Stand.png", "/mobile/assets/game/Wizard_Stand.png", "/mobile/assets/game/Duo_Stand.png"]
    let spriteCtr = 0
    const enemyGenTimeMinDefault = 1200
    let enemyGenTimeMin = enemyGenTimeMinDefault
    let enemyLoop

    let xDown = null;
    let yDown = null;

    //elements
    const gameBoxEl = document.getElementById("game-box")
    const scoreEl = document.getElementById("score-num")
    const charEl = document.getElementById("game-character-sprite")
    const replaybtnEl = [...document.getElementsByClassName("play-again")];
    const replayModalEl = document.getElementById("replay-modal")
    const modalScoreEl = document.getElementById("modal-score")
    const starEl = document.getElementById("score-star")
    const leaderboardModalNameEl = document.querySelector(".add-to-leaderboard-modal-type-name")
    const defaultLeaderboardHtml = leaderboardModalNameEl.innerHTML
    const addToLeaderboardModalEl = document.getElementById("add-to-leaderboard-modal")
    const addToLeaderboardModalBtnsEl = document.querySelector(".add-to-leaderboard-modal-btns")
    const gameBgEl = document.querySelector(".game-bg")
    const submitPromptBtnEl = document.getElementById("submit-prompt-btn")
    const submitScoreEl = document.getElementById("submit-score")
    const leaderboardFieldEl = document.querySelector(".leaderboard-field")

    //listeners
    document.addEventListener("keydown", handleKey)
    document.addEventListener('touchstart', handleTouchStart, false);
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    replaybtnEl.forEach((btn) => { btn.addEventListener("click", startGame) })
    charEl.addEventListener("click", toggleCharacterSrc)
    starEl.addEventListener("click", () => { alert("Come see Sylvan Legacy live at ArrayMusic on May 15th!") })
    submitScoreEl.addEventListener("click", submitScore)
    submitPromptBtnEl.addEventListener("click", openAddToLeaderboard)
    window.addEventListener("resize", resizeGameScreen)

    //enemies
    class Enemy {
        constructor() {
            this.id = enemyCount;
        }
        enemyCreate() {
            const enemy = document.createElement("img");
            enemy.classList.add("enemy");
            enemy.id = `enemy-${enemyCount}`;
            gameBoxEl.appendChild(enemy);
            enemyEls.push(enemy);
            enemyCount++;

            // Assign a random sprite to the enemy
            if (Math.floor(Math.random() * 2)) {
                enemy.classList.add("spike");
                enemy.src = "/mobile/assets/game/Spike.png"
            }
            else {
                enemy.classList.add("bat");
                enemy.src = "/mobile/assets/game/Bat.png";
            }
            enemy.style.animation = `moveLeft ${1}s linear`;

            const checkCollision = () => {
                if (this.isColliding(enemy, charEl)) {
                    collision();
                }
            };

            const enemyMoveInterval = setInterval(checkCollision, 20);  // Check every 20ms

            enemy.addEventListener('animationend', () => {
                gameBoxEl.removeChild(enemy);  // Remove the enemy from the DOM
                changeScore(1)
                clearInterval(enemyMoveInterval);  // Stop the collision check once enemy is removed
            });
        }

        isColliding(enemy, character) {
            const enemyRect = enemy.getBoundingClientRect();
            const charRect = character.getBoundingClientRect();
            const tolerance = charEl.width / 4
            let effectiveCharTop = charRect.top;
            let effectiveCharBottom = charRect.bottom;

            const transform = window.getComputedStyle(character).transform;
            if (transform && transform !== "none") {
                const matrix = new DOMMatrix(transform);
                effectiveCharTop += matrix.m42;
                effectiveCharBottom += matrix.m42;
            }

            const intersectLeft = Math.max(enemyRect.left, charRect.left);
            const intersectRight = Math.min(enemyRect.right, charRect.right);
            const intersectTop = Math.max(enemyRect.top, effectiveCharTop);
            const intersectBottom = Math.min(enemyRect.bottom, effectiveCharBottom);
            const intersectionWidth = intersectRight - intersectLeft;
            const intersectionHeight = intersectBottom - intersectTop;

            if (intersectionWidth <= 0 || intersectionHeight <= 0) {
                return false;
            }

            return intersectionWidth > tolerance;
        }

    }
    const enemyInstance = new Enemy();

    function generateEnemies() {
        if (gameRunning === false) {
            return
        };

        let enemyGenTime = Math.floor(Math.random() * (700)) + enemyGenTimeMin;
        if (enemyGenTimeMin > 350) {
            enemyGenTimeMin -= 10
        }
        enemyInstance.enemyCreate()
        enemyLoop = setTimeout(generateEnemies, enemyGenTime);
    }

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

    function handleKey(e) {
        if (e.key === "ArrowUp") {
            handleSwipe("up")
        } else if (e.key === "ArrowDown") {
            handleSwipe("down")
        } else if (e.key === " ") {
            toggleCharacterSrc()
        }
    }
    function collision() {
        enemyEls.forEach((el) => {
            el.remove();
        }); modalScoreEl.innerHTML = score
        replayModalEl.style.visibility = "visible"
        // displayLeaderboard()
        gameRunning = false
        setCharStanding()
        clearTimeout(enemyLoop);

    }

    function countDownAndStart() {
        closeLeaderboardModal()
        resizeGameScreen()
        const countdownEl = document.createElement("h1")
        countdownEl.classList.add("countdown")
        gameBoxEl.appendChild(countdownEl)
        countdownEl.innerHTML = "3"
        setTimeout(() => countdownEl.innerHTML = "2", 1000)
        setTimeout(() => countdownEl.innerHTML = "1", 2000)
        setTimeout(() => countdownEl.innerHTML = "Go!", 3000)
        setTimeout(() => {
            countdownEl.remove()
            gameRunning = true
            generateEnemies()
            setCharRunning()
        }, 4000)
    }

    function startGame() {
        replayModalEl.style.visibility = "hidden"
        enemyGenTimeMin = enemyGenTimeMinDefault
        changeScore(0)
        countDownAndStart()
    }


    function toggleCharacterSrc() {
        spriteCtr++
        if (spriteCtr === 3) {
            spriteCtr = 0
        }
        charEl.src = gameRunning ? sprites[spriteCtr] : standingSprites[spriteCtr]
    }

    function setCharRunning() {
        charEl.src = sprites[spriteCtr]
        // gameBgEl.src = "/mobile/assets/game/GameBgGif.gif"
    }

    function setCharStanding() {
        charEl.src = standingSprites[spriteCtr]
        // gameBgEl.src = "BgStill.png"
    }


    function resizeGameScreen() {
        gameBgEl.style.maxHeight = window.visualViewport.height + 'px';
        gameBgEl.style.maxWidth = window.visualViewport.width + 'px';
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0;
        window.scrollTo(0, 0)
    }

    //swipe events
    function handleSwipe(direction) {
        if (direction === "up") {
            jumpCharacter();
        } else if (direction === "down") {
            diveCharacter();
        }
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
        if (evt.target.name === "leaderboard") {
            return;
        } evt.preventDefault();

        if (!xDown || !yDown) {
            return;
        }

        var xUp = evt.touches[0].clientX;
        var yUp = evt.touches[0].clientY;

        var xDiff = xDown - xUp;
        var yDiff = yDown - yUp;

        if (Math.abs(xDiff) > Math.abs(yDiff)) {
            if (xDiff > 0) {
                //Swipe Left
            } else {
                //Swipe Right
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
    }

    //animation
    function jumpCharacter() {
        resetAnimation(charEl, "jump")
    }


    function diveCharacter() {
        resetAnimation(charEl, "dive")
    }

    function resetAnimation(element, animationClass) {
        element.classList.remove("jump", "dive");
        void element.offsetWidth;
        element.classList.add(animationClass);
    }

    //leaderboard
    function openAddToLeaderboard() {
        leaderboardModalNameEl.innerHTML = defaultLeaderboardHtml
        addToLeaderboardModalBtnsEl.appendChild(submitScoreEl)
        submitScoreEl.addEventListener("click", submitScore)
        replayModalEl.style.visibility = "hidden"
        addToLeaderboardModalEl.style.visibility = "visible"
    }
    function closeLeaderboardModal() {
        addToLeaderboardModalEl.style.visibility = "hidden"
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
        document.querySelector(".add-to-leaderboard-modal-type-name").innerHTML = "Thanks!"
        sendToServer({ type: "game-score", val: { name: nameStr, score: score } })
    }
    // async function displayLeaderboard() {
    //     leaderboardFieldEl.innerHTML = "LEADERBOARD <br/><br/>";
    //     // const scores = await fetchLeaderboard();
    //     const scores = [{ name: "tet", score: 20 }]

    //     const scoreElsElements = scores.sort((a, b) => b.score - a.score)
    //         // .slice(0, 5)
    //         .map(score => {
    //             const scoreEl = document.createElement("div");
    //             scoreEl.innerHTML = `${score.name} - ${score.score}`;
    //             scoreEl.classList.add("display-score");
    //             scoreEl.name = "leaderboard"
    //             return scoreEl;
    //         });

    //     scoreElsElements.forEach(el => {
    //         leaderboardFieldEl.appendChild(el);
    //     });
    // }


    resizeGameScreen()
    countDownAndStart()
}


function welcomeGameOld() {
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

welcomeGame()

console.log("hit2")