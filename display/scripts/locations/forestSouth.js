textsArr = [
    "It looks like there's a fork in the road…"
];

const forestVidEl = document.getElementById("forest-video")
const forestStillEl = document.getElementById("forest-bg")

function forestSouth() {
    setTimeout(scene0, 100)
    setTimeout(scene1, 1000)
    setTimeout(scene2, 6000)
    setTimeout(scene3, 12000)
    setTimeout(scene4, 310000) // make me length of video + video start time
}

function scene0() {
    renderMap()
    fadeMap(1, 1)
    toggleAnimation("side", "duo")
    flipChar("left", "duo")
    changeSize("duo", 1, .3)
    jumpChar("pino", 3000, 3000)
    jumpChar("jaz", 3000, 3000)

}
function scene1() {
    renderPino()
    renderJaz()
    fadeChar("pino", locations.intro.mapLocations.pino.x, locations.intro.mapLocations.pino.y, 50, 1000)
    fadeChar("jaz", locations.intro.mapLocations.jaz.x, locations.intro.mapLocations.jaz.y, 50, 1000)
    setTimeout(() => {
        toggleAnimation("walk", "duo")
        slideChar("pino", locations.forestSouth.mapLocations.pino.x, locations.forestSouth.mapLocations.pino.y, 3000)
        slideChar("jaz", locations.forestSouth.mapLocations.jaz.x, locations.forestSouth.mapLocations.jaz.y, 3000)
        setTimeout(() => {
            toggleAnimation("side", "duo")
        }, 3000)
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
    forestVidEl.style.visibility = "visible"
    forestVidEl.style.opacity = 1
    forestVidEl.play()
}
function scene4() {
    //after video
    forestVidEl.style.opacity = 0
    setTimeout(() => {
        forestVidEl.pause()
    }, 8000)
    setTimeout(() => {
        slideBoxY("duo")
        setTimeout(nextLine, 750)
        setTimeout(() => {
            slideBoxY("none")
        }, 5000)
    }, 1000)
}

forestSouth()