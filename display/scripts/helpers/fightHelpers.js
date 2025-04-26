let charSize = .8
let defaultY = 50
let defaultX = 0

function throwHats() {
    console.log("throw hat!", characters.p.hat)
    setTimeout(() => {
        focusChar("pino")
    }, 1000)
    setTimeout(() => {
        enemySpin()
    }, 2000)
    setTimeout(() => {
        unfocusChar("pino")
    }, 4000)
    setTimeout(() => {

    }, 8000)
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

function deviceDrop() {
    console.log("drop!", characters.p.device)
    setTimeout(() => {
        focusChar("pino")
    }, 1000)
    setTimeout(() => {
        unfocusChar("pino")
    }, 5000)
    enemyFlatten()
}
function hatSpike() {
    // Create the hatSpikeEl image element
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
        // Slide hatSpikeEl up
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
        // Slide hatSpikeEl down
        hatSpikeEl.style.bottom = '-600px'; // Move it back down
    }, 4000);

    setTimeout(() => {
        // Optional: remove it after it's hidden
        hatSpikeEl.remove();
    }, 5000);

    console.log("spike!", characters.j.hat);
}

function noisyBonk() {
    console.log("bonk!", characters.j.device)
    enemySpin()
    setTimeout(() => {
        focusChar("jaz")
    }, 1000)
    setTimeout(() => {
        unfocusChar("jaz")
    }, 5000)
}

function collarRoll() {
    console.log("throw collar!", characters.j.collar)
    hopChar("npc")
    enemySpin()
    setTimeout(() => {
        focusChar("jaz")
    }, 1000)
    setTimeout(() => {
        unfocusChar("jaz")
    }, 5000)
}

function duoAttack() {
    console.log("throw hat!", characters.p.hat)
    console.log("throw collar!", characters.j.collar)
    setTimeout(() => {
        focusChar("pino")
        focusChar("jaz")
    }, 1000)
    setTimeout(() => {
        unfocusChar("pino")
        unfocusChar("jaz")
    }, 5000)
}

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