let charSize = 1
let attacking = false

const attacks = [collarRoll, throwHats, hatSpike, deviceDrop, noisyBonk, robeAura, duoAttack]
let attackIdx = 0



function robeAura() {
    let npcBase = ""
    if (checkHistory("rats")) {
        npcBase = "rat"
    } else if (checkHistory("bats")) {
        npcBase = "bat"
    } else if (checkHistory("isopods")) {
        npcBase = "isopod"
    }
    setTimeout(() => {
        toggleAnimation("robeAura", "pino")
        focusChar("pino")
    }, 10)
    setTimeout(() => {
        toggleAnimation("robeAura", "pino")
        shootLaser()
        setTimeout(() => {
            shootLaser()
        }, 300)
        setTimeout(() => {
            shootLaser()
            decrementHealth()
            shakeChar("npc", 300, 20);
        }, 600)
        setTimeout(() => {
            shootLaser()
            shakeChar("npc", 300, 40);
        }, 900)
        setTimeout(() => {
            shootLaser()
            shakeChar("npc", 1200, 90);
        }, 1200)
    }, 2000)
    setTimeout(() => {
        changeNPCSrc("frog/full.png")
    }, 4300)
    setTimeout(() => {
        flipChar("left", "npc")
    }, 5000)
    setTimeout(() => {
        flipChar("right", "npc")
    }, 6000)
    setTimeout(() => {
        enemySpin()
        changeNPCSrc(`${npcBase}/full.png`)
    }, 7000)
    setTimeout(() => {
        unfocusChar("pino")
        setTimeout(() => {
            resetBattlefield("jaz")
        }, 1000)
    }, 7500)
}


function throwHats() {
    const hatSrcs = [`/display/assets/characters/pino/attacks/throwHats/${characters.p.hat}1.png`, `/display/assets/characters/pino/attacks/throwHats/${characters.p.hat}2.png`, `/display/assets/characters/pino/attacks/throwHats/${characters.p.hat}3.png`]
    const glowEl = document.createElement('img');
    glowEl.src = `/display/assets/characters/pino/attacks/throwHats/glow.png`;

    setTimeout(() => {
        focusChar("pino")
    }, 10)
    setTimeout(() => {
        toggleAnimation("throwHats", "pino")
        function generateHats() {
            let i = 0;  // Counter to control when to stop
            const interval = setInterval(() => {
                // Randomly choose a hat source from the hatSrcs array
                const randomHatSrc = hatSrcs[Math.floor(Math.random() * hatSrcs.length)];

                // Randomly choose a Y position between 500px and 700px
                const randomTop = Math.floor(Math.random() * (800 - 400 + 1)) + 500;

                // Create the hat element
                const hatEl = document.createElement('img');
                hatEl.src = randomHatSrc;
                hatEl.style.position = "absolute";
                hatEl.style.left = "300px";  // Start at X position 300px
                hatEl.style.top = "600px";   // Start at Y position 600px
                hatEl.style.transition = "left 0.5s linear, top 0.5s linear";  // Smooth transition for both left and top

                // Append the hat element to the document or parent container
                document.body.appendChild(hatEl);

                // Move the hat to the right and set the random vertical position
                setTimeout(() => {
                    hatEl.style.left = "1400px";  // Move to the right
                    hatEl.style.top = `${randomTop}px`;  // Move to the random Y position
                }, 0);

                // Remove the hat after it has fully moved (adjusted to match transition duration)
                setTimeout(() => {
                    hatEl.remove();
                }, 500);  // 0.5s after the hat starts moving

                // Stop after 4 seconds
                i++;
                if (i >= 20) {  // 20 hats generated in 4 seconds (1 every 0.2 seconds)
                    clearInterval(interval);
                }
            }, 200); // Generate a new hat every 0.2 seconds
        }

        generateHats(); // Call to start generating hats
    }, 2000)


    setTimeout(() => {
        enemySpin(5000)
        decrementHealth()

    }, 2500)

    setTimeout(() => {
        toggleAnimation("fightNeutral", "pino")
        unfocusChar("pino")
        setTimeout(() => {
            resetBattlefield("jaz")
        }, 1000)
    }, 7000)
}

function collarRoll() {
    const jazDiv = document.getElementById("jaz-char");
    const armsEl = document.createElement('img');
    const weaponEl = document.createElement('img');
    armsEl.src = `/display/assets/characters/jaz/attacks/collarRoll/arms.png`;
    weaponEl.src = `/display/assets/characters/jaz/attacks/collarRoll/${characters.j.collar}.png`;
    weaponEl.id = "collar-weapon"
    armsEl.style.zIndex = 200;
    weaponEl.style.zIndex = 201;
    weaponEl.style.left = "425px";
    weaponEl.style.top = "400px";
    weaponEl.style.position = "absolute";

    setTimeout(() => {
        focusChar("jaz");
    }, 10);

    setTimeout(() => {
        toggleAnimation("collarRoll", "jaz");
        jazDiv.appendChild(armsEl);
        jazDiv.appendChild(weaponEl);
    }, 2000);

    setTimeout(() => {
        weaponEl.style.left = "800px";
        weaponEl.style.top = "400px";
        weaponEl.style.animation = "rotate360Collar .5s linear infinite";
    }, 2200);

    setTimeout(() => {
        hopChar("npc");
        enemySpin();
        decrementHealth()

        // Move weaponEl back to the left, rotate counterclockwise
        weaponEl.style.left = "425px";
        weaponEl.style.top = "400px";
        weaponEl.style.animation = "rotate360Collar .5s linear infinite reverse";
    }, 2900);

    setTimeout(() => {
        unfocusChar("jaz");
        weaponEl.style.animation = "none";

    }, 3700);

    setTimeout(() => {
        armsEl.remove();
        weaponEl.remove();
        setTimeout(() => {
            resetBattlefield("pino")
        }, 1000)
    }, 4700);
}



function collarRollDuo() {
    const jazDiv = document.getElementById("jaz-char");
    const armsEl = document.createElement('img');
    const weaponEl = document.createElement('img');
    armsEl.src = `/display/assets/characters/jaz/attacks/collarRoll/arms.png`;
    weaponEl.src = `/display/assets/characters/jaz/attacks/collarRoll/${characters.j.collar}.png`;
    weaponEl.id = "collar-weapon"
    armsEl.style.zIndex = 200;
    weaponEl.style.zIndex = 201;
    weaponEl.style.left = "425px";
    weaponEl.style.top = "400px";
    weaponEl.style.position = "absolute";

    setTimeout(() => {
        focusChar("jaz");
    }, 10);

    setTimeout(() => {
        toggleAnimation("collarRoll", "jaz");
        jazDiv.appendChild(armsEl);
        jazDiv.appendChild(weaponEl);
    }, 2000);

    setTimeout(() => {
        weaponEl.style.left = "800px";
        weaponEl.style.top = "400px";
        weaponEl.style.animation = "rotate360Collar .5s linear infinite";
    }, 2500);

    setTimeout(() => {
        hopChar("npc");
        enemySpin();
        // Move weaponEl back to the left, rotate counterclockwise
        weaponEl.style.left = "425px";
        weaponEl.style.top = "400px";
        weaponEl.style.animation = "rotate360Collar .5s linear infinite reverse";
    }, 6000);

    setTimeout(() => {
        unfocusChar("jaz");
        weaponEl.style.animation = "none";
    }, 7000);

    setTimeout(() => {
        armsEl.remove();
        weaponEl.remove();
    }, 8000);
}



function noisyBonk() {
    const jazDiv = document.getElementById("jaz-char")
    const armEl = document.createElement('img');
    const weaponEl = document.createElement('img');
    armEl.src = `/display/assets/characters/jaz/attacks/bonk/arm1.png`;
    weaponEl.src = `/display/assets/characters/jaz/attacks/bonk/${characters.j.device}1.png`;
    armEl.style.zIndex = 80
    weaponEl.style.zIndex = 201

    setTimeout(() => {
        toggleAnimation("walk", "jaz")
        changeSize("jaz", 0, .7)
        jumpChar("jaz", -100, 200)
        slideChar("jaz", 500, 100, 2000)
    }, 10)


    setTimeout(() => {
        toggleAnimation("fightNeutral", "jaz")
        jumpChar("jaz", 750, 230)
        changeSize("jaz", 0, 1)
    }, 3030)


    setTimeout(() => {
        jazDiv.appendChild(armEl)
        jazDiv.appendChild(weaponEl)
    }, 3500)

    setTimeout(() => {
        armEl.src = `/display/assets/characters/jaz/attacks/bonk/arm2.png`;
        weaponEl.src = `/display/assets/characters/jaz/attacks/bonk/${characters.j.device}2.png`;
        enemySpin()
        decrementHealth()

    }, 4000)
    setTimeout(() => {
        armEl.src = `/display/assets/characters/jaz/attacks/bonk/arm1.png`;
        weaponEl.src = `/display/assets/characters/jaz/attacks/bonk/${characters.j.device}1.png`;
    }, 4200)


    setTimeout(() => {
        armEl.remove()
        weaponEl.remove()
        setTimeout(() => {
            toggleAnimation("walk", "jaz")
            changeSize("jaz", 0, .7)
            jumpChar("jaz", 550, 200)
            flipChar("left", "jaz")
        }, 100)
        setTimeout(() => {
            slideChar("jaz", 50, 200, 2000)
        }, 150)

        setTimeout(() => {
            toggleAnimation("fightNeutral", "jaz")
            flipChar("right", "jaz")
            setTimeout(() => {
                changeSize("jaz", 1, 1)
                jumpChar("jaz", 50, 300)
            }, 30)
            resetBattlefield("pino")
        }, 2155)
    }, 4200)
}








function duoAttack() {
    throwHats()
    collarRollDuo()
}







function hatSpike() {
    const hatSpikeEl = document.createElement('img');
    hatSpikeEl.src = `/display/assets/characters/jaz/attacks/hatSpikes/${characters.j.hat}.png`; // Leave src blank for now
    hatSpikeEl.style.position = 'fixed';
    hatSpikeEl.style.left = '80%';
    hatSpikeEl.style.bottom = '-600px'; // Start offscreen
    hatSpikeEl.style.transform = 'translateX(-50%)';
    hatSpikeEl.style.transition = 'bottom 0.4s ease';

    document.body.appendChild(hatSpikeEl);

    setTimeout(() => {
        toggleAnimation("hatSpike", "jaz");
        focusChar("jaz");
    }, 10);

    setTimeout(() => {
        hatSpikeEl.style.bottom = '0%'; // Move up to center
    }, 1500);

    setTimeout(() => {
        hopChar("npc", 400, 300);
        shakeChar("npc", 2100, 50);
        decrementHealth()

    }, 1900);

    setTimeout(() => {
        hopChar("npc", 550, 300);
    }, 2600);

    setTimeout(() => {
        hopChar("npc", 700, 400);
    }, 3300);

    setTimeout(() => {
        unfocusChar("jaz");
        hatSpikeEl.style.bottom = '-600px'; // Move it back down
    }, 4000);

    setTimeout(() => {
        hatSpikeEl.remove();
        resetBattlefield("pino")

    }, 5000);
}



function deviceDrop() {
    // Create the deviceEl image element
    const deviceEl = document.createElement('img');
    deviceEl.src = `/display/assets/characters/pino/attacks/deviceDrop/${characters.p.device}.png`; // Set src manually later
    deviceEl.style.position = 'fixed';
    deviceEl.style.top = '-600px'; // Start offscreen above
    deviceEl.style.left = '75%';
    deviceEl.style.transition = 'top 0.5s ease, opacity 1s ease';
    deviceEl.style.opacity = '1';
    deviceEl.style.zIndex = '500';
    document.body.appendChild(deviceEl);

    setTimeout(() => {
        toggleAnimation("deviceDrop", "pino")
        focusChar("pino");
    }, 10);

    setTimeout(() => {
        landCharBounce(deviceEl, 1100, 500, -600)
    }, 2000);

    setTimeout(() => {
        enemyFlatten();
        decrementHealth()

    }, 2500);

    setTimeout(() => {
        slideChar(deviceEl, 1200, -600, 800)
    }, 4000);

    setTimeout(() => {
        deviceEl.remove();
        unfocusChar("pino");
        setTimeout(() => {
            resetBattlefield("jaz")
        }, 1000)
    }, 5000);

}






// enemy reactions
function enemySpin(time = 1800) {
    const spriteEl = document.getElementById("npc");
    spriteEl.classList.remove("smacked-spin");
    void spriteEl.offsetWidth;
    spriteEl.classList.add("smacked-spin");
    setTimeout(() => {
        spriteEl.classList.remove("smacked-spin");
    }, time)
}

function enemyFlatten() {
    const spriteEl = document.getElementById("npc");
    spriteEl.classList.remove("flatten-squash");
    void spriteEl.offsetWidth;
    spriteEl.classList.add("flatten-squash");
    setTimeout(() => {
        spriteEl.classList.remove("flatten-squash");

    }, 2000)
}




// helpers
function focusChar(char) {
    changeSize(char, 1000, 1.7)
    document.getElementById(`${char}-size-ctr`).style.zIndex = 399
}

function unfocusChar(char) {
    changeSize(char, 1000, charSize)
    setTimeout(() => {
        document.getElementById(`${char}-size-ctr`).style.zIndex = 100
        toggleAnimation("fightNeutral", char)
    }, 1000)
}
function shootLaser(color = "red") {
    // Create the laser element
    const laserEl = document.createElement('div');
    if (characters.p.robe === "A") {
        color = "rgb(119, 239, 34)"
    } else {
        color = "rgb(214, 84, 255)"
    }
    laserEl.style.position = "absolute";
    laserEl.style.zIndex = "10";
    laserEl.style.left = "300px";
    laserEl.style.top = "300px";
    laserEl.style.width = "20px";       // Start small
    laserEl.style.height = "8px";        // Laser thickness
    laserEl.style.transformOrigin = "left center"; // Grow from the left side
    laserEl.style.transition = "width 0.2s linear, left .6s linear, top 1s linear";
    laserEl.style.transform = "rotate(20deg)";     // ROTATE 25 degrees immediately
    laserEl.style.boxShadow = `0 0 20px 8px ${color}`;  // <<< Wide blurry glow


    laserEl.style.backgroundColor = color;
    document.body.appendChild(laserEl);

    // Step 1: Grow the laser width
    setTimeout(() => {
        laserEl.style.width = "400px"; // Extend laser (adjust as needed)
    }, 0);

    // Step 2: After short grow delay, move laser
    setTimeout(() => {
        laserEl.style.left = "1100px";
        laserEl.style.top = "800px";
        sendToServer({ type: "fx", val: "lazer.wav" })
    }, 200); // Start moving right after growth

    // Step 3: Remove after reaching destination
    setTimeout(() => {
        laserEl.remove();
    }, 800); // 1 second for movement + 0.2 for grow
}



//health is in %
function triggerAttack() {
    attacking = true
    sendToServer({ type: "attacking", data: attacking })
    attacks[attackIdx]();  // <-- just call it like a normal function
    attackIdx++;
    let powerBarCtr = document.getElementById("power-bar-ctr");
    let powerBar = document.getElementById("power-bar");
    powerBarCtr.style.visibility = "hidden";
    powerBar.style.width = "0";
    changeSwipePrompt()
}

function decrementHealth() {
    let healthBar = document.getElementById("health-bar");
    healthBar.style.width = bossHealth * 100 + "%";
    if (attackIdx === 2) {
        slideBoxY("sprite")
        setTimeout(nextLine, 750)
        setTimeout(() => {
            slideBoxY("none")
        }, 2000)
        setTimeout(() => {
            changeDialogueSprite(`${npcBase}/cry`)
        }, 2500)
    }
    if (bossHealth === 0) {
        let healthBarCtr = document.getElementById("health-bar-ctr");
        healthBar.style.width = "0";
        healthBarCtr.style.visibility = "hidden";
    }
}

function incrementPower() {
    let powerBar = document.getElementById("power-bar");
    powerBar.style.width = swipeCount / swipeCountTarget * 100 + "%";
}

function resetBattlefield(next) {
    attacking = false
    sendToServer({ type: "attacking", data: attacking })
    let powerBarCtr = document.getElementById("power-bar-ctr");
    if (next === "pino") {
        powerBarCtr.style.left = "44px"
    } else {
        powerBarCtr.style.left = "332px"
    }
    if (bossHealth != 0) {
        powerBarCtr.style.visibility = "visible"
        changeSwipePrompt(swipeType)
    } else {
        fightPart2()
    }
}

const swipeMap = {
    up: "↑",
    down: "↓",
    left: "←",
    right: "→"
}

function changeSwipePrompt(swipeType) {
    if (!swipeType) {
        document.getElementById("swipe-prompt-arrow").style.visibility = "hidden"
        document.getElementById("swipe-prompt-text").style.visibility = "hidden"
    } else {
        document.getElementById("swipe-prompt-arrow").src = `/display/assets/fight/${swipeType}.png`
        document.getElementById("swipe-prompt-text").src = "/display/assets/fight/swipePromptText.png"
        document.getElementById("swipe-prompt-arrow").style.visibility = "visible"
        document.getElementById("swipe-prompt-text").style.visibility = "visible"
    }
}



function fightPart2() {
    slideBoxY("sprite")
    setTimeout(nextLine, 750)
    setTimeout(() => {
        slideBoxY("none")
        slideChar("npc", 2000, 200, 3000)
        flipChar("left", "npc")
        hopChar("npc", 100, 200)
        setTimeout(() => {
            hopChar("npc", 100, 200)
        }, 300)
        setTimeout(() => {
            hopChar("npc", 100, 200)
        }, 600)
        setTimeout(() => {
            hopChar("npc", 100, 200)
        }, 900)
        setTimeout(() => {
            hopChar("npc", 100, 200)
        }, 1200)
    }, 7500)
    setTimeout(() => {
        slideBoxY("duo")
        setTimeout(nextLine, 750)
    }, 10000)
    setTimeout(() => {
        slideBoxY("none")
    }, 18000)
}