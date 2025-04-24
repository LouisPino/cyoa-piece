let charSize = .8
let defaultY = 50
let defaultX = 0

function throwHats() {
    console.log("throw hat!", characters.p.hat)
    enemyFlatten()
}

function robeAura() {
    console.log("laser!", characters.p.robe)
    changeNPCSrc("frog/full.png")
    setTimeout(() => {
        flipChar("left", "npc")
    }, 1000)
    setTimeout(() => {
        flipChar("right", "npc")
    }, 2000)
    setTimeout(() => {
        changeNPCSrc(`${history.locationsVisited[history.locationsVisited.length - 2].name.slice(0, -1)}/full.png`)
    }, 3000)
}

function deviceDrop() {
    console.log("drop!", characters.p.device)
    enemyFlatten()
}

function hatSpike() {
    setTimeout(() => {
        toggleAnimation("hatSpike", "jaz")
        changeSize("jaz", 1000, 1.7)
        slideChar("jaz", defaultX + 200, defaultY, 1000)
    }, 1000)
    setTimeout(() => {
        hopChar("npc")
        shakeChar("npc", 2000, 50)
    }, 1500)
    setTimeout(() => {
        toggleAnimation("side", "jaz")
        changeSize("jaz", 1000, charSize)
        slideChar("jaz", defaultX, defaultY, 1000)
    }, 4000)
    console.log("spike!", characters.j.hat)
}

function noisyBonk() {
    console.log("bonk!", characters.j.device)
    enemySpin()
}

function collarRoll() {
    console.log("throw collar!", characters.j.collar)
    hopChar("npc")
    enemySpin()
}

function duoAttack() {
    console.log("throw hat!", characters.p.hat)
    console.log("throw collar!", characters.j.collar)
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
