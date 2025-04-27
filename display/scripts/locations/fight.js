function fight() {
    toggleAnimation("fightNeutral", "jaz")
    toggleAnimation("fightNeutral", "pino")
    jumpChar("npc", 550, 200)
    changeSize("npc", 1, .7)
    jumpChar("pino", -200, 300)
    jumpChar("jaz", 50, 300)
    changeSize("duo", 1, 1)
    if (history.locationsVisited[history.locationsVisited.length - 2].name === "rats") {
        changeBg("animated/riverInterior.gif")
    } else {
        changeBg("animated/caveInterior.gif")
    }
    renderPino()
    renderJaz()
    changeNPCSrc(`${history.locationsVisited[history.locationsVisited.length - 2].name.slice(0, -1)}/full.png`)
    //     setTimeout(robeAura, 100)
    //     setTimeout(collarRoll, 8000)
    //     setTimeout(deviceDrop, 13000)
    //     setTimeout(hatSpike, 19000)
    //     setTimeout(throwHats, 26000)
    //     setTimeout(noisyBonk, 34000)
    //     setTimeout(duoAttack, 42000)

}

fight()
