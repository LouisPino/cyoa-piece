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
    }

    function setCharStanding() {
        charEl.src = standingSprites[spriteCtr]
    }


    function resizeGameScreen() {
        gameBgEl.style.maxHeight = window.visualViewport.height + 'px';
        gameBgEl.style.maxWidth = window.visualViewport.width + 'px';
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0;
        window.scrollTo(0, 0)
        adjustHeight()
        adjustWidth()
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
        resizeGameScreen()
    }

    //leaderboard
    function submitScore() {
        const badWords = ["ASS", "AZZ", "DJT", "COK", "COQ", "FAG", "FCK", "CUM", "TIT", "KKK", "IDF", "NIG", "NGR", "SEX", "JIZ", "FUC", "FUK", "SHT", "KOK", "DIK", "DIX", "DIC", "DIQ", "DAM", "FAP", "BCH", "BTH"];
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
        resizeGameScreen()

    }

    resizeGameScreen()
    countDownAndStart()
}


welcomeGame()