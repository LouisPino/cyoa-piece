function fight() {
    console.log(history.locationsVisited[history.locationsVisited.length - 2].name)
    renderPino()
    renderJaz()
    toggleAnimation("front", "duo")
    changeNPCSrc(`${history.locationsVisited[history.locationsVisited.length - 2].name.slice(0, -1)}/full.png`)
}

fight()
