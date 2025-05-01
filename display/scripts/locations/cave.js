textsArr = [
    "It looks like there's a fork in the road…"
];

const caveVidEl = document.getElementById("cave-video")

function cave() {
    setTimeout(scene0, 100)
    setTimeout(scene1, 1000)
    setTimeout(scene2, 8000)
    setTimeout(scene3, 14000)
    setTimeout(scene4, 22000) // make me length of video + video start time
}

function scene0() {
    renderMap()
    fadeMap(1, 1)
    toggleAnimation("side", "duo")
    changeSize("duo", 1, .3)
    jumpChar("pino", 3000, 3000)
    jumpChar("jaz", 3000, 3000)

}
function scene1() {
    renderPino()
    renderJaz()
    setTimeout(() => {
        if (checkHistory("frogs")) {
            toggleAnimation("front", "duo")
            fadeChar("pino", locations.frogs.mapLocations.pino.x, locations.frogs.mapLocations.pino.y, 50, 1000)
            fadeChar("jaz", locations.frogs.mapLocations.jaz.x, locations.frogs.mapLocations.jaz.y, 50, 1000)
            setTimeout(() => {
                slideChar("pino", locations.cave.mapLocations.pino.x, locations.cave.mapLocations.pino.y, 3000)
                slideChar("jaz", locations.cave.mapLocations.jaz.x, locations.cave.mapLocations.jaz.y, 3000)
            }, 3000)
        } else {
            flipChar("left", "duo")
            fadeChar("pino", locations.rockField.mapLocations.pino.x, locations.rockField.mapLocations.pino.y, 50, 1000)
            fadeChar("jaz", locations.rockField.mapLocations.jaz.x, locations.rockField.mapLocations.jaz.y, 50, 1000)
            setTimeout(() => {
                toggleAnimation("walk", "duo")
                slideChar("pino", locations.cave.mapLocations.pino.x, locations.cave.mapLocations.pino.y, 3000)
                slideChar("jaz", locations.cave.mapLocations.jaz.x, locations.cave.mapLocations.jaz.y, 3000)
            }, 3000)
        }

    }, 1000)
}
function scene2() {
    fadeMap(0, 5000)
    fadeChar("duo", 3000, 3000, 5000, 20)
    setTimeout(() => {
        locationBanner(currentLocation.banner)
    }, 5000)
}
function scene3() {
    //play video
    caveVidEl.style.visibility = "visible"
    caveVidEl.style.opacity = 1
    caveVidEl.play()
}
function scene4() {
    //after video
    caveVidEl.pause()
    setTimeout(() => {
        slideBoxY("duo")
        setTimeout(nextLine, 750)
        setTimeout(() => {
            slideBoxY("none")
        }, 5000)
    }, 1000)
}

// cave()