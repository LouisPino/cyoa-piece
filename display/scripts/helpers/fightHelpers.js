let charSize = 1
let defaultY = 50
let defaultX = 0






function throwHats() {
    const hatSrc = `/display/assets/characters/pino/attacks/throwHats/${characters.p.hat}.png`
    const glowEl = document.createElement('img');
    glowEl.src = `/display/assets/characters/pino/attacks/throwHats/glow.png`;

    console.log("throw hat!", characters.p.hat)
    setTimeout(() => {
        focusChar("pino")
    }, 1000)
    setTimeout(() => {
        toggleAnimation("throwHats", "pino")
        enemySpin()
    }, 2000)
    setTimeout(() => {
        // generate hats
    }, 3000)
    setTimeout(() => {
        enemySpin()
    }, 3500)
    setTimeout(() => {
        toggleAnimation("fightNeutral", "pino")
        unfocusChar("pino")
    }, 5000)
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






function noisyBonk() {
    const jazDiv = document.getElementById("jaz-char")
    const armEl = document.createElement('img');
    const weaponEl = document.createElement('img');
    armEl.src = `/display/assets/characters/jaz/attacks/bonk/arm1.png`;
    weaponEl.src = `/display/assets/characters/jaz/attacks/bonk/${characters.j.device}1.png`;
    armEl.style.zIndex = 200
    weaponEl.style.zIndex = 201

    console.log("bonk!", characters.j.device)
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




function robeAura() {
    console.log("laser!", characters.p.robe)
    changeNPCSrc("frog/full.png")
    setTimeout(() => {
        focusChar("pino")
    }, 1000)
    setTimeout(() => {
        flipChar("left", "npc")
    }, 3000)
    setTimeout(() => {
        flipChar("right", "npc")
    }, 4000)
    setTimeout(() => {
        changeNPCSrc(`${history.locationsVisited[history.locationsVisited.length - 2].name.slice(0, -1)}/full.png`)
    }, 5000)

}





function duoAttack() {
    // console.log("throw hat!", characters.p.hat)
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
    collarRoll()
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
        hopChar("npc", 400, 300);
    }, 2600);

    setTimeout(() => {
        hopChar("npc", 400, 300);
    }, 3300);

    setTimeout(() => {
        unfocusChar("jaz");
        hatSpikeEl.style.bottom = '-600px'; // Move it back down
    }, 4000);

    setTimeout(() => {
        hatSpikeEl.remove();
    }, 5000);

    console.log("spike!", characters.j.hat);
}



function deviceDrop() {
    console.log("drop!", characters.p.device);
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
function enemySpin() {
    const spriteEl = document.getElementById("npc");
    spriteEl.classList.remove("smacked-spin");
    void spriteEl.offsetWidth;
    spriteEl.classList.add("smacked-spin");
}

function enemyFlatten() {
    const spriteEl = document.getElementById("npc");
    spriteEl.classList.remove("flatten-squash");
    void spriteEl.offsetWidth;
    spriteEl.classList.add("flatten-squash");
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