textsArr = [
    "It looks like there's a fork in the road…"
];

const caveVidEl = document.getElementById("cave-video")

function cave() {
    setTimeout(scene0, 100)
    setTimeout(scene1, 1000)
    setTimeout(scene2, 6000)
    setTimeout(scene3, 12000)
    setTimeout(scene4, 20000) // make me length of video + video start time
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
    fadeChar("pino", 500, -400, 50, 1000)
    fadeChar("jaz", 200, -400, 50, 1000)
    setTimeout(() => {
        toggleAnimation("walk", "duo")
        slideChar("pino", 200, 0, 3000)
        slideChar("jaz", -100, 0, 3000)
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