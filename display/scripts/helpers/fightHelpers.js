function throwHats() {
    console.log("throw hat!", characters.p.hat)
    shakeChar("npc", 2000, 50)
}
function robeAura() {
    console.log("laser!", characters.p.robe)
}
function deviceDrop() {
    console.log("drop!", characters.p.device)
}
function hatSpike() {
    toggleAnimation("front", "jaz")
    setTimeout(() => {
        hopChar("jaz")
        enemySpin()
    }, 500
    )
    console.log("spike!", characters.j.hat)
}
function noisyBonk() {
    console.log("bonk!", characters.j.device)
}
function collarRoll() {
    console.log("throw collar!", characters.j.collar)
}
function duoAttack() {
    console.log("throw hat!", characters.p.hat)
    console.log("throw collar!", characters.j.collar)
}

function enemySpin() {
    const spriteEl = document.getElementById("npc");
    spriteEl.classList.remove("smacked-spin");
    // Force reflow to restart animation
    void spriteEl.offsetWidth;
    spriteEl.classList.add("smacked-spin");
}
