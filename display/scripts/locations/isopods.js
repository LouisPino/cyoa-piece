function isopods() {
    // changeBg("animated/caveInterior.gif")
    if (history.locationsVisited[history.locationsVisited.length - 2].name === "river") {
        // document.getElementById("sandbox-bg").src = `/display/assets/backgrounds/animated/riverInterior.gif`
        changeBg(`animated/riverInterior.gif`)
    }
    else if (history.locationsVisited[history.locationsVisited.length - 2].name === "cave") {
        // document.getElementById("sandbox-bg").src = `/display/assets/backgrounds/animated/caveInterior.gif`
        changeBg(`animated/caveInterior.gif`)
    }
}

isopods()