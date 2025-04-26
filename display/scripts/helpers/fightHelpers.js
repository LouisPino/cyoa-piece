let charSize = 1
let defaultY = 50
let defaultX = 0




function robeAura() {
    setTimeout(() => {
        toggleAnimation("robeAura", "pino")
        focusChar("pino")
    }, 1000)
    setTimeout(() => {
        toggleAnimation("robeAura", "pino")
        shootLaser()
        setTimeout(() => {
            shootLaser()
        }, 300)
        setTimeout(() => {
            shootLaser()
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
        // shoot lasers 3 times, 300ms inbetween
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
        changeNPCSrc(`${history.locationsVisited[history.locationsVisited.length - 2].name.slice(0, -1)}/full.png`)
    }, 7000)
    setTimeout(() => {
        unfocusChar("pino")
    }, 7500)

}





function throwHats() {
    const hatSrcs = [`/display/assets/characters/pino/attacks/throwHats/${characters.p.hat}1.png`, `/display/assets/characters/pino/attacks/throwHats/${characters.p.hat}2.png`, `/display/assets/characters/pino/attacks/throwHats/${characters.p.hat}3.png`]
    const glowEl = document.createElement('img');
    glowEl.src = `/display/assets/characters/pino/attacks/throwHats/glow.png`;

    setTimeout(() => {
        focusChar("pino")
    }, 1000)
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
    }, 2500)

    setTimeout(() => {
        toggleAnimation("fightNeutral", "pino")
        unfocusChar("pino")
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
    }, 1000);

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
    }, 1000);

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
    armEl.style.zIndex = 200
    weaponEl.style.zIndex = 201

    setTimeout(() => {
        toggleAnimation("walk", "jaz")
        changeSize("jaz", 0, .7)
        jumpChar("jaz", -100, 200)
        slideChar("jaz", 500, 100, 2000)
    }, 1000)


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
            flipChar("right", "jaz")
            toggleAnimation("fightNeutral", "jaz")
            setTimeout(() => {
                changeSize("jaz", 1, 1)
                jumpChar("jaz", 50, 300)
            }, 30)
        }, 2155)
    }, 4200)
}








function duoAttack() {
    // "throw hat!", characters.p.hat)
    // console.log("throw collar!", characters.j.collar)
    // setTimeout(() => {
    //     focusChar("pino")
    //     focusChar("jaz")
    // }, 1000)
    // setTimeout(() => {
    //     unfocusChar("pino")
    //     unfocusChar("jaz")
    // }, 5000)

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
    }, 1000);

    setTimeout(() => {
        hatSpikeEl.style.bottom = '0%'; // Move up to center
    }, 1500);

    setTimeout(() => {
        hopChar("npc", 400, 300);
        shakeChar("npc", 2100, 50);
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
    }, 5000);
}



function deviceDrop() {
    // Create the deviceEl image element
    const deviceEl = document.createElement('img');
    deviceEl.src = `/display/assets/characters/pino/attacks/deviceDrop/${characters.p.device}.png`; // Set src manually later
    deviceEl.style.position = 'fixed';
    deviceEl.style.top = '-600px'; // Start offscreen above
    deviceEl.style.left = '80%';
    deviceEl.style.transition = 'top 0.5s ease, opacity 1s ease';
    deviceEl.style.opacity = '1';
    deviceEl.style.zIndex = '500';
    document.body.appendChild(deviceEl);

    setTimeout(() => {
        toggleAnimation("deviceDrop", "pino")
        focusChar("pino");
    }, 1000);

    setTimeout(() => {
        landCharBounce(deviceEl, 1200, 500, -600)
    }, 2000);

    setTimeout(() => {
        enemyFlatten();
    }, 2500);

    setTimeout(() => {
        slideChar(deviceEl, 1200, -600, 800)
    }, 4000);

    setTimeout(() => {
        deviceEl.remove();
    }, 5000);

    setTimeout(() => {
        unfocusChar("pino");
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
    document.getElementById(`${char}-size-ctr`).style.zIndex = 1000
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
    laserEl.style.position = "absolute";
    laserEl.style.zIndex = "10";
    laserEl.style.left = "300px";
    laserEl.style.top = "300px";
    laserEl.style.width = "20px";       // Start small
    laserEl.style.height = "8px";        // Laser thickness
    laserEl.style.transformOrigin = "left center"; // Grow from the left side
    laserEl.style.transition = "width 0.2s linear, left .6s linear, top 1s linear";
    laserEl.style.transform = "rotate(20deg)";     // ROTATE 25 degrees immediately

    if (characters.p.robe === "A") {
        color = "green"
    } else {
        color = "purple"
    }
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
    }, 200); // Start moving right after growth

    // Step 3: Remove after reaching destination
    setTimeout(() => {
        laserEl.remove();
    }, 800); // 1 second for movement + 0.2 for grow
}
