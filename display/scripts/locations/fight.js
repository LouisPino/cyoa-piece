function fight() {
    toggleAnimation("side", "jaz")
    toggleAnimation("side", "pino")
    toggleBox("none")
    jumpChar("npc", 550, 0)
    changeSize("npc", 1, .7)
    jumpChar("duo", 0, 50)
    changeSize("duo", 1, .8)
    if (history.locationsVisited[history.locationsVisited.length - 2].name === "rats") {
        // changeBg("animated/riverInterior.gif")
        document.getElementById("sandbox-bg").src = "/display/assets/backgrounds/animated/riverInterior.gif"
    } else {
        // changeBg("animated/caveInterior.gif")
        document.getElementById("sandbox-bg").src = "/display/assets/backgrounds/animated/caveInterior.gif"
    }
    renderPino()
    renderJaz()
    changeNPCSrc(`${history.locationsVisited[history.locationsVisited.length - 2].name.slice(0, -1)}/full.png`)
    setTimeout(hatSpike, 1000)
    // throwHats()
    // robeAura()
    // deviceDrop()
    // noisyBonk()
    // collarRoll()
    // hatSpike()
    // duoAttack()
}

fight()
